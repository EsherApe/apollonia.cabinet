import React from 'react';
import {Col} from 'reactstrap';
import {Field} from 'redux-form';
import ErrorField from '../common/ErrorField';

const Amount = (props) => {
  return (
    <div className='amount d-flex align-items-center justify-content-between'>
      <div className='d-flex align-items-center'>
        <h5 className="amount__title font-weight-bold">Amount: </h5>
        <label className='amount__input-box'>
          <Field name='currencyAmount' type='number' className='amount__input' component={ErrorField} placeholder='10 ETH'/>
        </label>
      </div>
      <div>
        <div className='amount__output-box d-flex justify-content-center align-items-start'>
          <small>APOLLO</small> 15 111.00
        </div>
      </div>
    </div>
  );
};

export default Amount;