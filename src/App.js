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
            <Container className='App'>
                <Header/>
                <SignIn/>
                {/*<SignUp/>*/}
                {/*<Purchase/>*/}
                {/*<Transactions/>*/}
                <Footer/>
            </Container>
        );
    }
}

export default App;
