import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from 'modules/Main';

export default ({ privilege }) => (
  <Router>
    <Route exact path="/" component={Main} />
  </Router>
);
