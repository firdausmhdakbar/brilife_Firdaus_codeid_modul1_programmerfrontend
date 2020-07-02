import React, { Component } from 'react';
import { Button, TextField, CircularProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Page from '../../../components/Page';
import { save, findById } from '../../../actions/stocks';
import { findAll as findItems } from '../../../actions/items';
import { findAll as findUnits } from '../../../actions/units';
import styles from './styles.js';
import GetAppIcon from '@material-ui/icons/GetApp';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { connect } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Backdrop from '@material-ui/core/Backdrop';

class StockPage extends Component {

  constructor(props) {
    super(props);

    const { match } = this.props;

    this.state = {
      form: {
        id: match.params.id,
        item: null,
        unit: null,
        quantity:'',

      },
      itemOptions: [],
      unitOptions: [],
      error: false
    };
  }

  componentDidMount() {
    const { form } = this.state;
    if (form.id) {
      this.props.findById(form.id);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { itemsData, unitsData, saveData, saveError, data, error, history } = this.props;

    if (prevProps.itemsData !== itemsData) {
      this.setState({ itemOptions: itemsData.list });
    } else if (prevProps.unitsData !== unitsData) {
      this.setState({ unitOptions: unitsData.list });
    } else if (prevProps.data !== data) {
      this.setState({ form: data });
    } else if (error && prevProps.saveError !== saveError) {
      this.setState({ error: saveError });
    } else if (prevProps.error !== error) {
      this.setState({ error: error });
    } else if (saveData && prevProps.saveData !== saveData) {
      history.push('/stocks');
    }
  }

  onChange = (event) => {
    const { form } = this.state;
    const { value } = event.target;
    this.setState({ form: { ...form, quantity: value } });
  };

  onItemChange = (event, value) => {
    const { form } = this.state;
    this.setState({ form: { ...form, item: value } });
  };

  onUnitChange = (event, value) => {
    const { form } = this.state;
    this.setState({ form: { ...form, unit: value } });
  };

  onItemTextChange = event => {
    const { value } = event.target;

    if (value) {
      this.props.findItems({ search: { name: value } });
    } else {
      this.setState({ itemOptions: [] });
    }
  };

  onUnitTextChange = event => {
    const { value } = event.target;

    if (value) {
      this.props.findUnits({ search: { name: value } });
    } else {
      this.setState({ unitOptions: [] });
    }
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.save(this.state.form);
  };

  render() {
    const { classes, loading, saveError, itemsLoading, unitsLoading } = this.props;
    const { form, error, itemOptions, unitOptions } = this.state;

    const errorData = saveError?.data || {};
    return (
      <Page error={error}>
        {!loading ?
          <form noValidate autoComplete="off" onSubmit={this.onSubmit} >
            {
              form.id && <div className={classes.formField}>
                <TextField id="id" name="id" label="Id" value={form.id} fullWidth
                  InputProps={{ readOnly: true }} />
              </div>
            }
            <Autocomplete
              className={classes.select}
              autoHighlight
              options={!itemsLoading ? itemOptions : []}
              value={form.item}
              onChange={this.onItemChange}
              getOptionSelected={(option, value) => option.id === value.id}
              getOptionLabel={(option) => option.name}
              loading={itemsLoading}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Item"
                  variant="outlined"
                  disabled={itemsLoading}
                  onChange={this.onItemTextChange}
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: 'new-password',
                  }}
                />
              )}
            /><br /><br />
            <Autocomplete
              className={classes.select}
              autoHighlight
              options={!unitsLoading ? unitOptions : []}
              value={form.unit}
              onChange={this.onUnitChange}
              getOptionSelected={(option, value) => option.id === value.id}
              getOptionLabel={(option) => option.name}
              loading={unitsLoading}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Unit"
                  variant="outlined"
                  disabled={unitsLoading}
                  onChange={this.onUnitTextChange}
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: 'new-password',
                  }}
                />
              )}
            />
            <div className={classes.formField}>
              <TextField id="quantity" name="quantity" label="Quantity" type="number"
                error={errorData.quantity} value={form.quantity} 
                helperText={errorData.quantity ? errorData.quantity[0] : null}
                onChange={this.onChange} fullWidth />
            </div>
            <div className={classes.formField}>
              <Button className={classes.formButton} variant="contained" color="primary" type="submit"
                startIcon={<GetAppIcon />} disabled={loading}>
                Save
            </Button>
              <Button className={classes.backButton} variant="contained" color="inherit" href="/stocks"
                startIcon={<ArrowBackIcon />}>
                Back
            </Button>
            </div>
          </form> :
          <Backdrop className={classes.backdrop} open={true} onClick={loading}>
            <CircularProgress color="inherit" />
          </Backdrop>
        }
      </Page>
    );
  }
}

const mapStateToProps = state => ({

  itemsData: state.findItems.data,
  itemsError: state.findItems.error,
  itemsLoading: state.findItems.loading,

  unitsData: state.findUnits.data,
  unitsError: state.findUnits.error,
  unitsLoading: state.findUnits.loading,

  saveData: state.saveStock.data,
  saveError: state.saveStock.error,
  data: state.findStockById.data,
  loading: state.findStockById.loading || state.saveStock.loading,
  error: state.findStockById.error
});

const mapDispatchToProps = {
  findItems, findUnits, save, findById
};

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(StockPage)
);
