import React, { Component } from 'react';
import SignInForm from '../../auth/SignInForm';
import SignUpForm from '../../auth/SignUpForm';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { moduleName, signUp, signIn } from '../../../ducks/auth';
import Loader from '../../common/Loader';
import './auth.scss';
import { ToastContainer, toast } from 'react-toastify';

class AuthPage extends Component {
  notify = () => toast.error(this.props.error.error);
  render() {
    const {loading, error} = this.props;
    return (
      <div>
        <Route path='/auth/signIn' render={() => <SignInForm onSubmit={this.handleSignIn}/>}/>
        <Route path='/auth/signUp' render={() => <SignUpForm onSubmit={this.handleSignUp}/>}/>
        {loading && <Loader/>}
        {error && this.notify()}
        <ToastContainer />
      </div>
    );
  }

  handleSignIn = ({email, password}) => this.props.signIn(email, password);
  handleSignUp = ({email, password, firstName, middleName, lastName, countryCode, skypeId, telegramId}) => {
    this.props.signUp(email, password, firstName, middleName, lastName, countryCode, skypeId, telegramId
    )
  };
}

export default connect(state => ({
  loading: state[moduleName].loading,
  error: state[moduleName].error
}), {signUp, signIn})(AuthPage);