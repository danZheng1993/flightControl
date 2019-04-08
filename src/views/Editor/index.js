import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { find, get, isEmpty, set } from 'lodash';
import uniqid from 'uniqid';
import Button from '@material-ui/core/Button';

import { Wrapper, Container, Spliter } from 'components';

import { CreateFlight, UpdateFlight } from 'store/actions/flights';
import { getFlightsInProcessableFormat } from 'store/selectors/flights';

import { TypeSelector, InfoEditor } from './components';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    const { location, flights } = props;
    const query = queryString.parse(location.search);
    const { id, type } = query;
    const flight = find(flights, flight => flight[0] === id && flight[1] === type);
    const departurePoint = get(flight, '[2]', '');
    const arrivalPoint = get(flight, '[3]', '');
    const departureTime = get(flight, '[4]');
    const arrivalTime = get(flight, '[5]');
    this.state = {
      type: type || 'cheap',
      id,
      arrivalPoint,
      departurePoint,
      arrivalTime,
      departureTime
    };
  }

  onChangeType = (e) => {
    this.setState({ type: e.target.value });
  }

  onChangeValue = (field) => (val) => {
    const updateObj = {};
    set(updateObj, field, val);
    this.setState({ ...updateObj });
  }

  getIdInfo = () => {
    const { location } = this.props;
    const query = queryString.parse(location.search);
    const { id, type } = query;
    if (isEmpty(id) && isEmpty(type)) {
      return null;
    }
    return { id, type };
  }

  handleSave = () => {
    const { id } = this.state;
    if (isEmpty(id)) {
      this.createOne();
    } else {
      this.updateOne();
    }
  }

  createOne = () => {
    const id = uniqid();
    const { type, departurePoint, departureTime, arrivalPoint, arrivalTime } = this.state;
    const { CreateFlight, history } = this.props;
    CreateFlight({
      id, type, departurePoint, departureTime, arrivalPoint, arrivalTime
    });
    history.push('/');
  }

  updateOne = () => {
    const { id, type, departurePoint, departureTime, arrivalPoint, arrivalTime } = this.state;
    const { UpdateFlight, history } = this.props;
    UpdateFlight({
      id, type, departurePoint, departureTime, arrivalPoint, arrivalTime
    });
    history.push('/');
  }

  render() {
    const idInfo = this.getIdInfo();
    const { type, arrivalPoint, departurePoint, arrivalTime, departureTime } = this.state;
    return (
      <Wrapper>
        <Container>
          { isEmpty(idInfo) && <TypeSelector value={type} onChange={this.onChangeType} /> }
          <InfoEditor
            arrivalPoint={arrivalPoint}
            departurePoint={departurePoint}
            arrivalTime={arrivalTime}
            departureTime={departureTime}
            onChange={this.onChangeValue}
          />
          <Spliter />
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleSave}
          >
            Save
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
  CreateFlight,
  UpdateFlight,
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);