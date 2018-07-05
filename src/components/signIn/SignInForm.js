import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';

class SignInForm extends Component {
    render() {
        return (
            <div className='sign-in__form'>
                <Row>
                    <Col xs='12' md='6' lg='4'>
                        <Form>
                            <Row>
                                <Col xs='12'><h2 className='text-uppercase'>Sign in</h2></Col>
                            </Row>
                            <Row>
                                <Col xs='8' style={{paddingRight: '6rem'}}>
                                    <FormGroup>
                                        <Input type="email" name="email" className='font-weight-bold' id="exampleEmail"
                                               placeholder="E-MAIL"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="password" name="password" className='font-weight-bold'
                                               id="examplePassword" placeholder="PASSWORD"/>
                                    </FormGroup>
                                </Col>
                                <Col xs='4'>
                                    <Link to='/purchase' className='btn btn-primary sign-in__login-btn'>LOGIN</Link>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default SignInForm;