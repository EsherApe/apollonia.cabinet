import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import {Container, Form, FormGroup, Row, Col} from 'reactstrap';
import SignInText from './SignInText';
import ErrorField from '../common/ErrorField';
import signInBg from '../../img/cellphone-circle__img.png';
import {validate as emailValidate} from "email-validator/index";

class SignInForm extends Component {
  render() {
    const {handleSubmit} = this.props;

    return (
      <div className='sign-in'>
        <Container>
          <Row>
            <Col xs='12' md='6' lg='4'>
              <div className='sign-in__form'>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col xs='12'><h2 className='text-uppercase'>Sign in</h2></Col>
                  </Row>
                  <Row>
                    <Col xs='12'>
                      <FormGroup>
                        <label htmlFor="" className='font-weight-bold mb-4'>E-mail</label>
                        <Field name="email" component={ErrorField} className='font-weight-bold form-control'/>
                      </FormGroup>
                      <FormGroup>
                        <label htmlFor="" className='font-weight-bold mb-4'>Password</label>
                        <Field name="password" component={ErrorField} className='font-weight-bold form-control'
                               type='password'/>
                      </FormGroup>
                      <div className="d-flex">
                        <button className='btn btn-primary sign-in__login-btn mr-3'>Login</button>
                        <NavLink to='/auth/signUp'
                                 className='btn btn-primary sign-in__login-btn'>Register</NavLink>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
            <Col xs='12' md='6' lg='8'>
              <a href="http://apollonia.online/" className='sign-in__link'>
                <img src={signInBg} className='img-fluid'/>
              </a>
            </Col>
          </Row>
          <SignInText/>
        </Container>
      </div>
    )
  }
}

const validate = ({email, password}) => {
  const errors = {};

  if (!email) {
    errors.email = 'email is required!';
  } else if (!emailValidate(email)) {
    errors.email = 'invalid email!';
  }

  if (!password) {
    errors.password = 'password is required!';
  } else if (password.length < 8) {
    errors.password = 'password to short!';
  }

  return errors;
};

export default reduxForm({
  form: 'signIn',
  validate
})(SignInForm);
