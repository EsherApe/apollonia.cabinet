import React, { Component, Fragment } from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {moduleName} from '../../ducks/auth';
import AuthPage from '../routes/auth/AuthPage';

class ProtectedRoute extends Component {
  render() {
    const {component, ...rest} = this.props;
    return (
      <Fragment>
        <Route {...rest} render={this.renderProtected}/>
      </Fragment>
    );
  }

  renderProtected = (routeProps) => {
    const {component: ProtectedComponent, authorized} = this.props;
    return authorized ? <ProtectedComponent {...routeProps}/> : <AuthPage/>;
  }
}

export default connect(state => ({
  authorized: !!state[moduleName].user.token
}), null, null, {pure: false})(ProtectedRoute);