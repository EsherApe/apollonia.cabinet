import React, { Component } from 'react';
import { Container, Form, FormGroup, Row, Col } from 'reactstrap';
import { reduxForm, Field } from 'redux-form';
import { validate as emailValidate } from 'email-validator';
import Agreement from "./Agreement";
import AgreementConfirm from "./AgreementConfirm";
import ErrorField from '../common/ErrorField';
import signUpBg from '../../img/side_bkg_right.svg';

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
                      <Field name="email" component={ErrorField} placeholder="E-MAIL"/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs='12' lg='8'>
                    <Row>
                      <Col xs='12' lg='6'>
                        <FormGroup>
                          <Field name="password" component={ErrorField} placeholder="PASSWORD"/>
                        </FormGroup>
                      </Col>
                      <Col xs='12' lg='6'>
                        <FormGroup>
                          <Field name="confirmPass" component={ErrorField} placeholder="CONFIRM PASSWORD"/>
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
                          <Field name="firstName" component={ErrorField} placeholder="FIRST NAME"/>
                        </FormGroup>
                      </Col>
                      <Col xs='12' lg='4'>
                        <FormGroup>
                          <Field name="middleName" component='input' placeholder="MIDDLE NAME"/>
                        </FormGroup>
                      </Col>
                      <Col xs='12' lg='4'>
                        <FormGroup>
                          <Field name="lastName" component={ErrorField} placeholder="LAST NAME"/>
                        </FormGroup>
                      </Col>
                      <Col xs='12' lg='4'>
                        <FormGroup>
                          <Field name="country" component='input' placeholder="COUNTRY OF RESIDENCE"/>
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
                          <Field name="skypeId" component='input' placeholder="SKYPE ID"/>
                        </FormGroup>
                      </Col>
                      <Col xs='12' lg='4'>
                        <FormGroup>
                          <Field name="telegramId" component='input' placeholder="TELEGRAM ID"/>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Agreement>terms of use</Agreement>
                <div className='text-center text-md-left'><AgreementConfirm/></div>
                <Agreement>
                  read and accept <a href="https://google.com" className='agreement__link text-secondary'>following
                  agreement</a>
                </Agreement>
                <div className='d-flex align-items-center'>
                  <AgreementConfirm/>
                  <div className='sign-up__btn-box'>
                    <a href='' className='sign-up__btn font-weight-bold text-uppercase text-primary'>Register my
                      profile</a>
                    <div className='text-danger'>Error! You must confirm accept all term of conditions and
                      agreements before proceed.
                    </div>
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
  form: 'auth',
  validate
})(SignUpForm);