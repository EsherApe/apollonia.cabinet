import React, {Component, Fragment} from 'react';
import SignInForm from './SignInForm';
import SignInText from './SignInText';
import {Row, Col} from 'reactstrap';

class SignIn extends Component {
    render() {
        return (
            <Fragment>
                <SignInForm/>
                <SignInText/>
            </Fragment>
        )
    }
}

export default SignIn;