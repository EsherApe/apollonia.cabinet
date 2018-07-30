import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Container, Form, FormGroup, Row, Col } from 'reactstrap';
import SignInText from './SignInText';
import ErrorField from '../common/ErrorField';
import signInBg from '../../img/side_bkg_right.svg';
import { validate as emailValidate } from "email-validator/index";
import { ToastContainer, toast } from 'react-toastify';

class SignInForm extends Component {
  render() {
    const {handleSubmit} = this.props;

    return (
      <div className='sign-in' style={{backgroundImage: `url(${signInBg})`}}>
        <Container>
          <div className='sign-in__form'>
            <Row>
              <Col xs='12' md='6' lg='4'>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col xs='12'><h2 className='text-uppercase'>Sign in</h2></Col>
                  </Row>
                  <Row>
                    <Col xs='8' style={{paddingRight: '6rem'}}>
                      <FormGroup>
                        <Field name="email" component={ErrorField} className='font-weight-bold form-control'
                               placeholder='E-MAIL'/>
                      </FormGroup>
                      <FormGroup>
                        <Field name="password" component={ErrorField} className='font-weight-bold form-control'
                               placeholder='PASSWORD' type='password'/>
                      </FormGroup>
                    </Col>
                    <Col xs='4'>
                      <button className='btn btn-primary sign-in__login-btn'>LOGIN</button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </div>
          <SignInText/>
        </Container>
      </div>
    )
  }
}

const validate = ({email, password}) => {
  const errors = {};

  if(!email) {
    errors.email = 'email is required!';
  } else if(!emailValidate(email)) {
    errors.email = 'invalid email!';
  }

  if(!password) {
    errors.password = 'password is required!';
  } else if(password.length < 8) {
    errors.password = 'password to short!';
  }

  return errors;
};

export default reduxForm({
  form: 'signIn',
  validate
})(SignInForm);
