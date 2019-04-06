import React from 'react';
import { connect } from 'react-redux';

import { GetFlights } from 'store/actions/flights';
import { getFlightsInProcessableFormat } from 'store/selectors/flights';

class Main extends React.Component {
  componentDidMount() {
    this.props.GetFlights();
  }
  render() {
    return (
      <div />
    );
  }
}

const mapStateToProps = (state) => ({
  flights: getFlightsInProcessableFormat(state),
})

const mapDispatchToProps = {
  GetFlights
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);