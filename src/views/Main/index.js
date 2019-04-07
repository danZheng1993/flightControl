import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import FilterableTable from 'react-filterable-table';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

import { GetFlights } from 'store/actions/flights';
import { getFlightsInProcessableFormat } from 'store/selectors/flights';

const Wrapper = styled.div`
  padding: 30px
`;

const Container = styled(Paper)`
  padding: 20px;
`;

class Main extends React.Component {
  componentDidMount() {
    this.props.GetFlights();
  }

  getFields = () => {
    return [
      { name: 'departurePoint', displayName: 'Departure', inputFilterable: true, sortable: true },
      { name: 'arrivalPoint', displayName: 'Arrival', inputFilterable: true, sortable: true },
      { name: 'departureTime', displayName: 'Depart At', inputFilterable: true, sortable: true, render: this.renderTime },
      { name: 'arrivalTime', displayName: 'Arrive At', inputFilterable: true, sortable: true, render: this.renderTime },
      { name: 'info', displayName: '', render: this.renderEditor },
    ]
  }

  editFlight = (info) => () => {
    const { id, type } = info;
    this.props.history.push(`/edit?id=${id}&type=${type}`);
  }

  renderTime = (time) => {
    return moment(time.value).format('YYYY-MM-DD h:mm:ss a');
  }

  renderEditor = (info) => {
    return (
      <Button variant="contained" color="primary" onClick={this.editFlight(info.value)}>
        Edit
      </Button>
    )
  }

  render() {
    const { flights } = this.props;
    const fields = this.getFields();
    return (
      <Wrapper>
        <Container>
          <FilterableTable
            nameSpace="Flight"
            initialSort="name"
            data={flights}
            fields={fields}
            noRecordsMessage="There are no flights"
            noFilteredRecordsMessage="No flight match your filters!"
          />
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