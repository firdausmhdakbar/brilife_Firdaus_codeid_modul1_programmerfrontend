import React, { Component } from 'react';
import { Button, TextField, CircularProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Page from '../../../components/Page';
import { save, findById } from '../../../actions/pemakaikontrasepsi';
import { findAll as findPropinsis } from '../../../actions/propinsi';
import { findAll as findKontrasepsis } from '../../../actions/kontrasepsi';
import styles from './styles.js';
import GetAppIcon from '@material-ui/icons/GetApp';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { connect } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Backdrop from '@material-ui/core/Backdrop';

class PemakaiKontrasepsiPage extends Component {

  constructor(props) {
    super(props);

    const { match } = this.props;

    this.state = {
      form: {
        id: match.params.id,
        propinsi: null,
        kontrasepsi: null,
        jumlahPemakai:'',

      },
      propinsiOptions: [],
      kontrasepsiOptions: [],
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
    const { propinsisData, kontrasepsisData, saveData, saveError, data, error, history } = this.props;

    if (prevProps.propinsisData !== propinsisData) {
      this.setState({ propinsiOptions: propinsisData.list });
    } else if (prevProps.kontrasepsisData !== kontrasepsisData) {
      this.setState({ kontrasepsiOptions: kontrasepsisData.list });
    } else if (prevProps.data !== data) {
      this.setState({ form: data });
    } else if (error && prevProps.saveError !== saveError) {
      this.setState({ error: saveError });
    } else if (prevProps.error !== error) {
      this.setState({ error: error });
    } else if (saveData && prevProps.saveData !== saveData) {
      history.push('/PemakaiKontrasepsis');
    }
  }

  onChange = (event) => {
    const { form } = this.state;
    const { value } = event.target;
    this.setState({ form: { ...form, jumlahPemakai: value } });
  };

  onPropinsiChange = (event, value) => {
    const { form } = this.state;
    this.setState({ form: { ...form, propinsi: value } });
  };

  onKontrasepsiChange = (event, value) => {
    const { form } = this.state;
    this.setState({ form: { ...form, kontrasepsi: value } });
  };

  onPropinsiTextChange = event => {
    const { value } = event.target;

    if (value) {
      this.props.findPropinsis({ search: { name: value } });
    } else {
      this.setState({ propinsiOptions: [] });
    }
  };

  onKontrasepsiTextChange = event => {
    const { value } = event.target;

    if (value) {
      this.props.findKontrasepsis({ search: { name: value } });
    } else {
      this.setState({ kontrasepsiOptions: [] });
    }
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.save(this.state.form);
  };

  render() {
    const { classes, loading, saveError, propinsisLoading, kontrasepsisLoading } = this.props;
    const { form, error, propinsiOptions, kontrasepsiOptions } = this.state;

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
              options={!propinsisLoading ? propinsiOptions : []}
              value={form.propinsi}
              onChange={this.onPropinsiChange}
              getOptionSelected={(option, value) => option.id === value.id}
              getOptionLabel={(option) => option.name}
              loading={propinsisLoading}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="propinsi"
                  variant="outlined"
                  disabled={propinsisLoading}
                  onChange={this.onPropinsiTextChange}
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
              options={!kontrasepsisLoading ? kontrasepsiOptions : []}
              value={form.kontrasepsi}
              onChange={this.onKontrasepsiChange}
              getOptionSelected={(option, value) => option.id === value.id}
              getOptionLabel={(option) => option.name}
              loading={kontrasepsisLoading}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="kontrasepsi"
                  variant="outlined"
                  disabled={kontrasepsisLoading}
                  onChange={this.onKontrasepsiTextChange}
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: 'new-password',
                  }}
                />
              )}
            />
            <div className={classes.formField}>
              <TextField id="jumlahPemakai" name="jumlahPemakai" label="JumlahPemakai" type="number"
                error={errorData.jumlahPemakai} value={form.jumlahPemakai} 
                helperText={errorData.jumlahPemakai ? errorData.jumlahPemakai[0] : null}
                onChange={this.onChange} fullWidth />
            </div>
            <div className={classes.formField}>
              <Button className={classes.formButton} variant="contained" color="primary" type="submit"
                startIcon={<GetAppIcon />} disabled={loading}>
                Save
            </Button>
              <Button className={classes.backButton} variant="contained" color="inherit" href="/PemakaiKontrasepsis"
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

  propinsisData: state.findPropinsis.data,
  propinsisError: state.findPropinsis.error,
  propinsisLoading: state.findPropinsis.loading,

  kontrasepsisData: state.findKontrasepsis.data,
  kontrasepsisError: state.findKontrasepsis.error,
  kontrasepsisLoading: state.findKontrasepsis.loading,

  saveData: state.savePemakaiKontrasepsi.data,
  saveError: state.savePemakaiKontrasepsi.error,
  data: state.findPemakaiKontrasepsiById.data,
  loading: state.findPemakaiKontrasepsiById.loading || state.savePemakaiKontrasepsi.loading,
  error: state.findPemakaiKontrasepsiById.error
});

const mapDispatchToProps = {
  findPropinsis, findKontrasepsis, save, findById
};

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(PemakaiKontrasepsiPage)
);
