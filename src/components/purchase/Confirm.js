import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FormGroup, Input, Col} from 'reactstrap';

class Confirm extends Component {
    render() {
        return (
            <Col xs='12'>
                <div className='purchase__confirm-btn-box'>
                    <button className='purchase__confirm-btn'>CONFIRM</button>
                </div>
                <div className=''>
                    <h5 className="purchase__form-title font-weight-bold">Confirm operation and send your currency on following address:</h5>
                    <FormGroup>
                        <Input type='text' placeholder='GENERATED APOLLONIA WALLET ADDRESS'/>
                    </FormGroup>
                </div>
            </Col>
        );
    }
}

Confirm.propTypes = {};
Confirm.defaultProps = {};

export default Confirm;
