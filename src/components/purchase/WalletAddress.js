import React from 'react';
import { FormGroup, Col } from 'reactstrap';
import { Field } from 'redux-form';
import ErrorField from '../common/ErrorField';

const WalletAddress = (props) => {
  return (
    <Col xs='12' md='6'>
      <h5 className="purchase__form-title font-weight-bold">Write your wallet address for recieving APO coin:</h5>
      <FormGroup>
        <Field name='wallet' type='text' placeholder='YOUR WALLET ADDRESS' component={ErrorField}/>
      </FormGroup>
    </Col>
  );
};

export default WalletAddress;