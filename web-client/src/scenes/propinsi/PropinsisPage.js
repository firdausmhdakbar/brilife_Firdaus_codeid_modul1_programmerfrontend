import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Page from '../../components/Page';
import styles from './styles.js';
import { deleteById, findAll } from '../../actions/propinsi';
import { Button, Tooltip } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { connect } from 'react-redux';
import MUIDataTable from 'mui-datatables';
import { CircularProgress } from '@material-ui/core';
import {
  Cached as ReloadIcon,
} from '@material-ui/icons';
import Backdrop from '@material-ui/core/Backdrop';


class PropinsisPage extends Component {


  constructor(props) {
    super(props);
    this.state = {
      data: [],
      total: 0,
      params: {
        search: { name: '' },
        sort: 'asc',
        page: 0,
        size: 10,
      },
      error: null
    };
  }

  componentDidMount() {
    this.reload();
  }

  reload() {
    this.props.findAll(this.state.params);
  }

  componentDidUpdate(prevProps, prevState) {
    const { deleteData, deleteError, data, error } = this.props;
    const { params } = this.state;

    if (prevProps.data !== data) {
      this.setState({ data: data.list, total: data.total });
    } else if (prevState.params !== params ||
      prevProps.deleteData !== deleteData) {
      this.reload();
    } else if (deleteError && prevProps.deleteError != deleteError) {
      this.setState({ error: deleteError });
    } else if (error && prevProps.error != error) {
      this.setState({ error: error });
    }
  }

  onAdd = () => {
    this.props.history.push('/propinsi/add');
  }

  onReload = () => {
    this.reload();
  }
  
  onRowsDelete = (rowsDeleted) => {
    const { list } = this.props.data;

    const e = list[rowsDeleted.data[0].index];
    this.props.deleteById(e.id);

    return false;
  }

  onRowClick = rowData => {
    this.props.history.push(`/propinsi/${rowData[0]}`);
  };

  onChangePage = (currentPage) => {
    const { params } = this.state;
    this.setState({ params: { ...params, page: currentPage } });
  }

  onChangeRowsPerPage = (numberOfRows) => {
    const { params } = this.state;
    this.setState({ params: { ...params, size: numberOfRows } });
  }

  onSearchChange = (searchText) => {
    const { params } = this.state;
    this.setState({ params: { ...params, search: { name: searchText } } });
  }

  onColumnSortChange = (changedColumn, direction) => {
    const { params } = this.state;
    const sort = direction === 'descending' ? 'desc' : 'asc';
    this.setState({ params: { ...params, sort } });
  }

  render() {
    const { classes, loading } = this.props;
    const { data, total, params, error } = this.state;

    const columns = [
      {
        name: "id",
        label: "Id_Propinsi",
        options: {
          sortDirection: params.sort
        }
      },
      {
        name: "namaPropinsi",
        label: "Nama Propinsi",
        options: {
          sort: false,
        }
      }
    ];
    const options = {
      serverSide: true,
      selectableRows: 'multiple',
      page: params.page,
      count: total,
      rowsPerPage: params.size,
      filter: false,
      searchText: params.search.name,
      onRowClick: this.onRowClick,
      onRowsDelete: this.onRowsDelete,
      onChangePage: this.onChangePage,
      onChangeRowsPerPage: this.onChangeRowsPerPage,
      onSearchChange: this.onSearchChange,
      onColumnSortChange: this.onColumnSortChange,

      textLabels: {
        body: {
          noMatch: loading ? 
          <Backdrop className={classes.backdrop} open={true} onClick={loading}>
          <CircularProgress color="inherit" thickness={5} />
        </Backdrop>
            : "Sorry, not macth records not found"
        }
      }
    }
    return (
      <Page error={error}>
        <div className={classes.buttonContainer}>
          <Button variant="contained" color="primary"
            onClick={this.onAdd}
            startIcon={<AddCircleOutlineIcon />}>
            New Propinsi
          </Button>
        </div>
        <MUIDataTable
          title={"Propinsi List"}
          data={!loading ? data : []}
          columns={columns}
          options={options}
        />
        <div className={classes.buttonContainer}>
          <Button variant="contained" color="primary"
            onClick={this.onReload}
            startIcon={<ReloadIcon />}
            disabled={loading}>
            Reload
          </Button>
        </div>
        
      </Page>
    );
  }
}


const mapStateToProps = state => ({
  deleteData: state.deletePropinsiById.data,
  deleteError: state.deletePropinsiById.error,
  data: state.findPropinsis.data,
  loading: state.findPropinsis.loading || state.deletePropinsiById.loading,
  error: state.findPropinsis.error || state.deletePropinsiById.error
});

const mapDispatchToProps = {
  deleteById, findAll
};

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(PropinsisPage)
);



