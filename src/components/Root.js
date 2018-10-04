import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import AuthPage from "./routes/auth/AuthPage";
import PurchasePage from "./routes/purchase/PurchasePage";
import TransactionsPage from "./routes/transactions/TransactionsPage";
import NotFoundPage from "./routes/notFound/NotFoundPage";
import ProtectedRoute from './common/ProtectedRoute';
import { Route, Switch } from 'react-router-dom';

class Root extends Component {
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

export default Root;