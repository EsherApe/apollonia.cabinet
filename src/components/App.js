import React, {Component} from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';
import Purchase from './purchase/Purchase';
import Transactions from './transactions/Transactions';
import NotFound from './NotFound';

import store from '../store';
import {Provider} from 'react-redux';

import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';

import history from '../history';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div className='wrapper'>
                        <main className='main'>
                            <Header/>
                            <Switch>
                                <Route path='/' exact component={SignIn}/>
                                <Route path='/signUp' component={SignUp}/>
                                <Route path='/purchase' component={Purchase}/>
                                <Route path='/transactions' component={Transactions}/>
                                <Route path='*' component={NotFound}/>
                            </Switch>
                        </main>
                        <Footer/>
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
