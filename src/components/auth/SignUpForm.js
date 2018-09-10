import React, {Component} from 'react';
import {Container, Form, FormGroup, Row, Col} from 'reactstrap';
import {reduxForm, Field} from 'redux-form';
import {validate as emailValidate} from 'email-validator';
import Agreement from "./Agreement";
import AgreementConfirm from "./AgreementConfirm";
import ErrorField from '../common/ErrorField';
import signUpBg from '../../img/sign-up__bg.png';
import signUpSubmitBtn from "./signUpSubmitBtn";

class SignUpForm extends Component {
  render() {
    const {handleSubmit} = this.props;

    return (
      <div className='sign-up' style={{backgroundImage: `url(${signUpBg})`}}>
        <Container>
          <Form onSubmit={handleSubmit}>
            <h2 className=''>Registration</h2>
            <Row>
              <Col xs='12' lg='3' className='sign-up--left'>
                <FormGroup>
                  <label htmlFor="" className='mb-3'>E-mail</label>
                  <Field name="email" component={ErrorField} className='form-control'/>
                </FormGroup>
                <FormGroup>
                  <label htmlFor="" className='mb-3'>Password</label>
                  <Field name="password" component={ErrorField} className='form-control' type='password'/>
                </FormGroup>
                <FormGroup>
                  <label htmlFor="" className='mb-3'>Confirm password</label>
                  <Field name="confirmPassword" component={ErrorField} className='form-control' type='password'/>
                </FormGroup>
              </Col>
              <Col xs='12' lg={{size: 7, offset: 2}} className='sign-up--right'>
                <Row>
                  <Col xs='12' lg='4'>
                    <FormGroup>
                      <label htmlFor="" className='mb-3'>First name</label>
                      <Field name="firstName" component={ErrorField} className='form-control'/>
                    </FormGroup>
                  </Col>
                  <Col xs='12' lg='4'>
                    <FormGroup>
                      <label htmlFor="" className='mb-3'>Middle name</label>
                      <Field name="middleName" component='input' className='form-control'/>
                    </FormGroup>
                  </Col>
                  <Col xs='12' lg='4'>
                    <FormGroup>
                      <label htmlFor="" className='mb-3'>Family name</label>
                      <Field name="lastName" component={ErrorField} className='form-control'/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs='12' lg='8'>
                    <FormGroup>
                      <label htmlFor="" className='mb-3'>Country of residence</label>
                      <Field name="countryCode" component='input' className='form-control'/>
                    </FormGroup>
                  </Col>
                  <Col xs='12' lg='4'>
                    <FormGroup>
                      <label htmlFor="" className='mb-3'>Telegram id</label>
                      <Field name="telegramId" component='input' className='form-control'
                             placeholder=""/>
                    </FormGroup>
                  </Col>
                </Row>

                <Agreement>terms of use</Agreement>
                <div className='text-center text-md-right'><AgreementConfirm name='termsOfUse'/></div>
                <Agreement>
                  read and accept <a href="https://google.com" className='agreement__link'>following
                  agreement</a>
                </Agreement>

                <div className='text-center text-md-right'><AgreementConfirm name='followingAgreement'/></div>
                <div className='text-center text-md-right'>
                  <Field name='signUpSubmitBtn' component={signUpSubmitBtn}/>
                </div>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    )
  }
}

const validate = ({email, password, confirmPassword, firstName, lastName, termsOfUse, followingAgreement}) => {
  const errors = {};

  if (!email || !password || !confirmPassword || !firstName || !lastName) {
    errors.signUpSubmitBtn = 'You should fill all required fields!'
  }

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

  if (!confirmPassword) {
    errors.confirmPassword = 'confirm password!'
  } else if (password !== confirmPassword) {
    errors.confirmPassword = 'passwords are not equal!'
  }

  if (!firstName) {
    errors.firstName = 'first name is required!'
  }

  if (!lastName) {
    errors.lastName = 'last name is required!'
  }

  if (!termsOfUse || !followingAgreement) {
    errors.signUpSubmitBtn = 'Error! You must confirm accept all term of conditions and agreements before proceed.'
  }

  return errors;
};

export default reduxForm({
  form: 'signUp',
  validate
})(SignUpForm);