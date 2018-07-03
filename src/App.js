import React, {Component} from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SignIn from './components/signIn/SignIn';
import SignUp from './components/signUp/SignUp';
import Purchase from "./components/purchase/Purchase";
import Transactions from "./components/transactions/Transactions";
import {Container} from 'reactstrap'
import './App.scss';


class App extends Component {
    render() {
        return (
            <div className='app'>
                <main className='main'>
                    <Header/>
                    {/*<SignIn/>*/}
                    {/*<SignUp/>*/}
                    {/*<Purchase/>*/}
                    <Transactions/>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default App;
