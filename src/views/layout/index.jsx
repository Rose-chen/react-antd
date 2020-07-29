import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './../login';
import LayoutComp from '../../components/nav-layout';
import './index.less';

export default class Layout extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={LayoutComp} />
        </Switch>
      </Router>
    );
  }
}
