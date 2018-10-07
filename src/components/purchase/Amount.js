import React from 'react';
import {Col} from 'reactstrap';
import {Field, formValueSelector} from 'redux-form';
import ErrorField from '../common/ErrorField';

const Amount = (props) => {
  let {rates, buyCoinForm} = props;
  let currency = buyCoinForm && buyCoinForm.values ? buyCoinForm.values.currency : '';


  let calcApoCoins = (e) => {
    let currencyAmount = e.target.value;
    this.apoCoins = ((rates[currency] * currencyAmount) / 0.03).toFixed(2);
  };

  return (
    <div className='amount d-flex align-items-center justify-content-between'>
      <div className='d-flex align-items-center'>
        <h5 className="amount__title font-weight-bold">Amount: </h5>
        <label className='amount__input-box'>
          <Field name='currencyAmount' type='number' className='amount__input form-control' component='input'
                 placeholder={currency ? currency : 'choose currency'}
                 onChange={calcApoCoins}
                 disabled={!currency}/>
        </label>
      </div>
      <div>
        <div className='amount__output-box d-flex justify-content-center align-items-start'>
          <small>APOLLO&nbsp;</small> <span>{this.apoCoins}</span>
        </div>
      </div>
    </div>
  );
};

export default Amount;