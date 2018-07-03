import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Row, Col} from 'reactstrap';
import Agreement from "./Agreement";
import AgreementConfirm from "./AgreementConfirm";

class SignUpForm extends Component {
    render() {
        return (
            <Row>
                <Col xs='12' md='6' lg='7'>
                    <Form>
                        <h2 className='text-uppercase'>Registration</h2>
                        <Row>
                            <Col xs='12' lg='4'>
                                <FormGroup>
                                    <Input type="email" name="email" id="email" placeholder="E-MAIL"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='12' lg='8'>
                                <Row>
                                    <Col xs='12' lg='6'>
                                        <FormGroup>
                                            <Input type="password" name="pass" id="pass" placeholder="PASSWORD"/>
                                        </FormGroup>
                                    </Col>
                                    <Col xs='12' lg='6'>
                                        <FormGroup>
                                            <Input type="password" name="confirmPass" id="confirmPass" placeholder="CONFIRM PASSWORD"/>
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
                                            <Input type="text" name="firstName" id="firstName" placeholder="FIRST NAME"/>
                                        </FormGroup>
                                    </Col>
                                    <Col xs='12' lg='4'>
                                        <FormGroup>
                                            <Input type="text" name="middleName" id="middleName" placeholder="MIDDLE NAME"/>
                                        </FormGroup>
                                    </Col>
                                    <Col xs='12' lg='4'>
                                        <FormGroup>
                                            <Input type="text" name="lastName" id="lastName" placeholder="LAST NAME"/>
                                        </FormGroup>
                                    </Col>
                                    <Col xs='12' lg='4'>
                                        <FormGroup>
                                            <Input type="text" name="country" id="country" placeholder="COUNTRY OF RESIDENCE"/>
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
                                            <Input type="text" name="skypeId" id="skypeId" placeholder="SKYPE ID"/>
                                        </FormGroup>
                                    </Col>
                                    <Col xs='12' lg='4'>
                                        <FormGroup>
                                            <Input type="text" name="telegramId" id="telegramId" placeholder="TELEGRAM ID"/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Agreement title='terms of use'/>
                        <div className='text-center text-md-left'><AgreementConfirm/></div>
                        <Agreement title='read and accept' linkText='following agreement' link='https://'/>
                        <div className='d-flex align-items-center'>
                            <AgreementConfirm/>
                            <div className='sign-up__btn-box'>
                                <a href='' className='sign-up__btn font-weight-bold text-uppercase text-primary'>Register my profile</a>
                                <div className='text-danger'>Error! You must confirm accept all term of conditions and
                                    agreements before proceed.
                                </div>
                            </div>
                        </div>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default SignUpForm;