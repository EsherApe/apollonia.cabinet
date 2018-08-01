import React from 'react';
import { Col } from 'reactstrap';
import { Field } from 'redux-form';
import ErrorField from '../common/ErrorField';

const Amount = (props) => {
  return (
    <Col xs='12'>
      <h5 className="font-weight-bold">Amount: </h5>
      <div className='d-flex'>
        <label className='amount__input-box d-flex justify-content-center align-items-center'>
          <Field name='currencyAmount' type='number' className='amount__input' component={ErrorField}/>
        </label>
        <div className='amount__output-box d-flex justify-content-center align-items-center'>5000 APO</div>
      </div>
    </Col>
  );
};

export default Amount;