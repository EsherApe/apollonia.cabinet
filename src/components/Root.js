import React, { Component } from 'react';
import Header from './header/Header';
import AuthPage from "./routes/auth/AuthPage";
import PurchasePage from "./routes/purchase/PurchasePage";
import TransactionsPage from "./routes/transactions/TransactionsPage";
import NotFoundPage from "./routes/notFound/NotFoundPage";
import ProtectedRoute from './common/ProtectedRoute';
import { Route, Switch, withRouter } from 'react-router-dom';
import {signInFromStorage} from '../ducks/auth';
import {connect} from 'react-redux';

class Root extends Component {
  componentWillMount() {
    if(sessionStorage.getItem('userConfig')) {
      let userConfig = JSON.parse(sessionStorage.getItem('userConfig'));
      console.log(userConfig);
      this.props.signInFromStorage(userConfig);
      console.log('update page');
    }
  }
  render() {
    return (
      <div className='wrapper'>
        <main className='main'>
          <Header/>
          <div className="content">
            <Switch>
              <ProtectedRoute path='/purchase' component={PurchasePage}/>
              <ProtectedRoute path='/transactions' component={TransactionsPage}/>
              <Route path='/auth' component={AuthPage}/>
              <Route path='*' component={NotFoundPage}/>
            </Switch>
          </div>
        </main>
        {/*<Footer/>*/}
      </div>
    )
  }
}

export default withRouter(connect(null, {signInFromStorage})(Root));