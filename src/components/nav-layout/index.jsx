import * as React from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import HeaderComp from '../nav-header';
import Main from '../../views/main';
import Evaluate from '../../views/evaluate';
import Weather from '../../views/weather';
import './index.less';

export default class Layout extends React.Component {
  render() {
    return (
      <Router>
        <HeaderComp />
        <div className="main-wrapper">
          <Route path="/home" exact component={Main}></Route>
          <Redirect path="/" to="/home" />
          <Route path="/evaluate" component={Evaluate}></Route>
          <Route path="/weather" component={Weather}></Route>
        </div>
      </Router>
    );
  }
}
