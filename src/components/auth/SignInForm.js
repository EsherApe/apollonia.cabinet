import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Container, Form, FormGroup, Row, Col } from 'reactstrap';
import SignInText from './SignInText';
import signInBg from  '../../img/side_bkg_right.svg';

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
                        <Field name="email" component='input' className='font-weight-bold' id="exampleEmail"
                               placeholder="E-MAIL"/>
                      </FormGroup>
                      <FormGroup>
                        <Field name="password" component="input" className='font-weight-bold'
                               id="examplePassword" placeholder="PASSWORD"/>
                      </FormGroup>
                    </Col>
                    <Col xs='4'>
                      <button type='submit' className='btn btn-primary sign-in__login-btn'>LOGIN</button>
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

export default reduxForm({
  form: 'auth'
})(SignInForm);
