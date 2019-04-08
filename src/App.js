import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';

import AppRoutes from 'navigation';

import store, { persistor } from 'store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <React.Fragment>
              <AppRoutes />
            </React.Fragment>
          </MuiPickersUtilsProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
