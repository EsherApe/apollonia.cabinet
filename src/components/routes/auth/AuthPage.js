import React, { Component } from 'react';
import SignInForm from '../../auth/SignInForm';
import SignUpForm from '../../auth/SignUpForm';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { moduleName, signUp, signIn } from '../../../ducks/auth';
import Loader from '../../common/Loader';
import './auth.scss';

class AuthPage extends Component {
  render() {
    const {loading} = this.props;
    return (
      <div>
        <Route path='/auth/signIn' render={() => <SignInForm onSubmit={this.handleSignIn}/>}/>
        <Route path='/auth/signUp' render={() => <SignUpForm onSubmit={this.handleSignUp}/>}/>
        {loading && <Loader/>}
      </div>
    );
  }

  handleSignIn = ({email, password}) => this.props.signIn(email, password);
  handleSignUp = ({email, password, firstName, middleName, lastName, countryCode, skypeId, telegramId}) => {
    console.log('handleSignUp');
    this.props.signUp(email, password, firstName, middleName, lastName, countryCode, skypeId, telegramId
    )
  }
}

export default connect(state => ({
  loading: state[moduleName].loading
}), {signUp, signIn})(AuthPage);