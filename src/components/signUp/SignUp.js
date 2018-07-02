import React, {Component, Fragment} from 'react';
import SignUpForm from "./SignUpForm";
import {Row, Col} from 'reactstrap';

class SignUp extends Component {
    render() {
        return (
            <SignUpForm/>
        );
    }
}

SignUp.propTypes = {};
SignUp.defaultProps = {};

export default SignUp;
