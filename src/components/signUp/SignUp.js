import React, {Component, Fragment} from 'react';
import SignUpForm from "./SignUpForm";
import {Container} from 'reactstrap';
import signUpBg from '../../img/side_bkg_right.svg';
import './sign-up.scss';

class SignUp extends Component {
    render() {
        return (
            <div className='sign-up' style={{backgroundImage: `url(${signUpBg})`}}>
                <Container>
                    <SignUpForm/>
                </Container>
            </div>
        );
    }
}

SignUp.propTypes = {};
SignUp.defaultProps = {};

export default SignUp;
