import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import HandleDataAction from "./actions/HandleDataAction";

import Layout from "./components/layout/Layout";

import NotFound from "./pages/NotFound";

import Home from "./pages/Home";

injectTapEventPlugin();


ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={Layout} >
        <IndexRoute component={Home} />
        <Route path="/home" component={Home} />
      </Route>
      <Route path="*" component={NotFound}/>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
