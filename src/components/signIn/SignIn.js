import React, {Component} from 'react';
import SignInForm from './SignInForm';
import SignInText from './SignInText';
import {Container} from 'reactstrap';
import './sign-in.scss';
import signInBg from  '../../img/side_bkg_right.svg';

class SignIn extends Component {
    render() {
        return (
            <div className='sign-in' style={{backgroundImage: `url(${signInBg})`}}>
                <Container>
                    <SignInForm/>
                    <SignInText/>
                </Container>
            </div>
        )
    }
}

export default SignIn;