import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Col, Button } from 'reactstrap';

class ConfirmPurchase extends Component {
  render() {
    return (
      <Col xs='12'>
        <div className='d-flex align-items-center'>
          <Button className='confirm-purchase__btn'>CONFIRM</Button>
          <div className='confirm-purchase__input-box'>
            <h5 className="font-weight-bold">Confirm operation and send your currency on following address:</h5>
            <FormGroup>
              <Input type='text' placeholder='GENERATED APOLLONIA WALLET ADDRESS'/>
            </FormGroup>
          </div>
        </div>
      </Col>
    );
  }
}

ConfirmPurchase.propTypes = {};
ConfirmPurchase.defaultProps = {};

export default ConfirmPurchase;
