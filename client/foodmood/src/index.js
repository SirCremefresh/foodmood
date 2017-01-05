import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute  } from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Layout from "./components/layout/Layout";

import NotFound from "./pages/NotFound";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Group from "./pages/Group";
import Test from "./pages/Test";

import initial from "./initial"

initial();

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={Layout} >
        <IndexRoute component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/test" component={Test} />
        <Route path="/group(/:id)" component={Group} />
      </Route>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="*" component={NotFound}/>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
