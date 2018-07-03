import React, {Component} from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SignIn from './components/signIn/SignIn';
import SignUp from './components/signUp/SignUp';
import Purchase from './components/purchase/Purchase';
import Transactions from './components/transactions/Transactions';
import NotFound from './components/NotFound';
import './App.scss';
import {Router, Route, Switch, Link} from 'react-router-dom';
import {syncHistoryWithStore} from 'react-router-redux';
import history from './history';

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div className='app'>
                    <main className='main'>
                        <Header/>
                        <Switch>
                            <Route path='/' component={SignIn}/>
                            <Route path='/sign-up' component={SignUp}/>
                            <Route path='/purchase' component={Purchase}/>
                            <Route path='/transactions' component={Transactions}/>
                            <Route path='*' component={NotFound}/>
                        </Switch>
                    </main>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
