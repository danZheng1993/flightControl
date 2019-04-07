import React from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

import { CreateFlight, UpdateFlight } from 'store/actions/flights';
import { getFlightsInProcessableFormat } from 'store/selectors/flights';

const Wrapper = styled.div`
  padding: 30px
`;

const Container = styled(Paper)`
  padding: 20px;
`;

class Editor extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  flights: getFlightsInProcessableFormat(state),
})

const mapDispatchToProps = {
  CreateFlight,
  UpdateFlight,
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);