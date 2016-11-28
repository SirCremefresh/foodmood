import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

import Layout from "./components/layout/Layout";

import NotFound from "./pages/NotFound";

import Home from "./pages/Home";




ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout} >
      <IndexRoute component={Home} />
      <Route path="/home" component={Home} />
    </Route>
    <Route path="*" component={NotFound}/>
  </Router>,
  document.getElementById('root')
);
