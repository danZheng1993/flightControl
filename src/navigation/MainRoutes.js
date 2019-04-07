import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from 'views/Main';
import Editor from 'views/Editor';

export default ({ privilege }) => (
  <Router>
    <Route exact path="/" component={Main} />
    <Route exact path="/edit" component={Editor} />
  </Router>
);
