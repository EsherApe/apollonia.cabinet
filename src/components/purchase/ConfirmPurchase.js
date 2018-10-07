import React, {Component} from 'react';
import {FormGroup} from 'reactstrap';
import {Field} from 'redux-form';
import ConfirmPurchaseInput from './ConfirmPurchaseInput';

class ConfirmPurchase extends Component {
  render() {
    let {address} = this.props;
    return (
      <div className='confirm-purchase__input-box'>
        <h5 className="font-weight-bold">Wallet for transaction</h5>
        <FormGroup>
          <Field name='generatedAddress' type='text' component={ConfirmPurchaseInput} address={address}/>
        </FormGroup>
      </div>
    );
  }
}

export default ConfirmPurchase;
