import React, {Component} from 'react';
import {FormGroup} from 'reactstrap';
import {Field} from 'redux-form';
import ErrorField from "../common/ErrorField";

class ConfirmPurchase extends Component {
  render() {
    return (
      <div className='confirm-purchase__input-box'>
        <h5 className="font-weight-bold">Wallet for transaction</h5>
        <FormGroup>
          <Field name='generatedAddress' type='text' component={ErrorField}/>
        </FormGroup>
      </div>
    );
  }
}

export default ConfirmPurchase;
