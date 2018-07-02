import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

class SignInForm extends Component {
    render() {
        return (
            <Row>
                <Col xs='12' md='6' lg='4'>
                    <Form>
                        <h3 className='text-uppercase'>Sign in</h3>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                        </FormGroup>
                        <Button>Login</Button>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default SignInForm;