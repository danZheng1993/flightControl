import React from 'react';
import { connect } from 'react-redux';
import MUIDataTable from "mui-datatables";
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { Wrapper, Container, Spliter } from 'components';

import { GetFlights } from 'store/actions/flights';
import { getFlightsInProcessableFormat } from 'store/selectors/flights';

class Main extends React.Component {
  componentDidMount() {
    const { flights, GetFlights } = this.props;
    if (flights.length === 0) {
      GetFlights();
    }
  }

  onRowClick = (info) => {
    const [id, type] = info;
    this.props.history.push(`/edit?id=${id}&type=${type}`);
  }

  getTableOptions = () => {
    return {
      selectableRows: false,
      onRowClick: this.onRowClick
    }
  }

  getColumns = () => {
    return [
      {
        name: 'id',
        label: 'Flight ID',
        options: {
          filter: false,
          sort: false,
        }
      },
      { name: 'type', label: 'Flight Type' },
      { name: 'departurePoint', label: 'Departure' },
      { name: 'arrivalPoint', label: 'Arrival' },
      { name: 'departureTime', label: 'Depart At'},
      { name: 'arrivalTime', label: 'Arrive At'},
    ]
  }

  handleCreate = () => {
    this.props.history.push('/edit')
  }

  render() {
    const { flights } = this.props;
    const columns = this.getColumns();
    return (
      <Wrapper>
        <Container>
          <MUIDataTable
            title={"Flight List"}
            data={flights}
            columns={columns}
            options={this.getTableOptions()}
          />
          <Spliter />
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleCreate}
          >
            Create One
          </Button>
        </Container>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  flights: getFlightsInProcessableFormat(state),
})

const mapDispatchToProps = {
  GetFlights
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));