import React, { Component } from 'react';
import { Container, Form, FormGroup, Row, Col } from 'reactstrap';
import { reduxForm, Field } from 'redux-form';
import { validate as emailValidate } from 'email-validator';
import Agreement from "./Agreement";
import AgreementConfirm from "./AgreementConfirm";
import ErrorField from '../common/ErrorField';
import signUpBg from '../../img/side_bkg_right.svg';
import signUpSubmitBtn from "./signUpSubmitBtn";

class SignUpForm extends Component {
  render() {
    const {handleSubmit} = this.props;

    return (
      <div className='sign-up' style={{backgroundImage: `url(${signUpBg})`}}>
        <Container>
          <Row>
            <Col xs='12' md='6' lg='7'>
              <Form onSubmit={handleSubmit}>
                <h2 className='text-uppercase'>Registration</h2>
                <Row>
                  <Col xs='12' lg='4'>
                    <FormGroup>
                      <Field name="email" component={ErrorField} className='form-control' placeholder="E-MAIL"/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs='12' lg='8'>
                    <Row>
                      <Col xs='12' lg='6'>
                        <FormGroup>
                          <Field name="password" component={ErrorField} className='form-control'
                                 placeholder="PASSWORD" type='password'/>
                        </FormGroup>
                      </Col>
                      <Col xs='12' lg='6'>
                        <FormGroup>
                          <Field name="confirmPassword" component={ErrorField} className='form-control'
                                 placeholder="CONFIRM PASSWORD" type='password'/>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col xs='12'>
                    <h5 className='sign-up__form-title font-weight-bold'>Your name:</h5>
                    <Row>
                      <Col xs='12' lg='4'>
                        <FormGroup>
                          <Field name="firstName" component={ErrorField} className='form-control'
                                 placeholder="FIRST NAME"/>
                        </FormGroup>
                      </Col>
                      <Col xs='12' lg='4'>
                        <FormGroup>
                          <Field name="middleName" component='input' className='form-control'
                                 placeholder="MIDDLE NAME"/>
                        </FormGroup>
                      </Col>
                      <Col xs='12' lg='4'>
                        <FormGroup>
                          <Field name="lastName" component={ErrorField} className='form-control'
                                 placeholder="LAST NAME"/>
                        </FormGroup>
                      </Col>
                      <Col xs='12' lg='4'>
                        <FormGroup>
                          <Field name="countryCode" component='input' className='form-control'
                                 placeholder="COUNTRY OF RESIDENCE"/>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col xs='12'>
                    <h5 className='sign-up__form-title font-weight-bold'>Your social:</h5>
                    <Row>
                      <Col xs='12' lg='4'>
                        <FormGroup>
                          <Field name="skypeId" component='input' className='form-control' placeholder="SKYPE ID"/>
                        </FormGroup>
                      </Col>
                      <Col xs='12' lg='4'>
                        <FormGroup>
                          <Field name="telegramId" component='input' className='form-control'
                                 placeholder="TELEGRAM ID"/>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Agreement>terms of use</Agreement>
                <div className='text-center text-md-left'><AgreementConfirm name='termsOfUse'/></div>
                <Agreement>
                  read and accept <a href="https://google.com" className='agreement__link text-secondary'>following
                  agreement</a>
                </Agreement>
                <div className='d-flex align-items-center'>
                  <AgreementConfirm name='followingAgreement'/>
                  <div className='sign-up__btn-box'>
                    <Field name='signUpSubmitBtn' component={signUpSubmitBtn}/>
                  </div>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const validate = ({email, password, confirmPassword, firstName, lastName, termsOfUse, followingAgreement}) => {
  const errors = {};

  if(!email || !password || !confirmPassword || !firstName || !lastName) {
    errors.signUpSubmitBtn = 'You should fill all required fields!'
  }

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

  if(!confirmPassword) {
    errors.confirmPassword = 'confirm password!'
  } else if(password !== confirmPassword) {
    errors.confirmPassword = 'passwords are not equal!'
  }

  if(!firstName) {
    errors.firstName = 'first name is required!'
  }

  if(!lastName) {
    errors.lastName = 'last name is required!'
  }

  if(!termsOfUse || !followingAgreement) {
    errors.signUpSubmitBtn = 'Error! You must confirm accept all term of conditions and agreements before proceed.'
  }

  return errors;
};

export default reduxForm({
  form: 'signUp',
  validate
})(SignUpForm);