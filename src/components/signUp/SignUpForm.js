import React, {Component} from 'react';
import { Button, Form, FormGroup, Input, Row, Col } from 'reactstrap';
import Agreement from "./Agreement";

class SignUpForm extends Component {
    render() {
        return (
            <Row>
                <Col xs='12' md='6'>
                    <Form>
                        <h3 className='text-uppercase'>Registration</h3>
                        <FormGroup>
                            <Input type="email" name="email" id="email" placeholder="E-MAIL" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="password" name="password" id="password" placeholder="PASSWORD" />
                        </FormGroup>
                        <h5 className='font-weight-bold'>Your name:</h5>
                        <FormGroup>
                            <Input type="text" name="firstName" id="firstName" placeholder="FIRST NAME" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="middleName" id="middleName" placeholder="MIDDLE NAME" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="lastName" id="lastName" placeholder="LAST NAME" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="country" id="country" placeholder="COUNTRY OF RESIDENCE" />
                        </FormGroup>
                        <h5 className='font-weight-bold'>Your social:</h5>
                        <FormGroup>
                            <Input type="text" name="skypeId" id="skypeId" placeholder="SKYPE ID" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="telegramId" id="telegramId" placeholder="TELEGRAM ID" />
                        </FormGroup>
                        <Agreement title='terms of use'/>
                        <Agreement title='read and accept' linkText='following agreement' link='https://'/>
                        <Button className='text-uppercase'>Register my profile</Button>
                        <div className='text-danger'>Error! You must confirm accept all term of conditions and agreements before proceed.</div>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default SignUpForm;