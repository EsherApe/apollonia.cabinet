import React, { Component } from 'react';
import { FormGroup, Input, Form, Row } from 'reactstrap';
import { reduxForm, Field } from 'redux-form';
import CurrencyList from "./CurrencyList";
import WalletAddress from "./WalletAddress";
import Amount from "./Amount";
import ConfirmPurchase from "./ConfirmPurchase";
import ErrorField from '../common/ErrorField';

class PurchaseForm extends Component {
  render() {
    const {handleSubmit, address} = this.props;
    return (
      <div className='purchase__form w-100'>
        <Form onSubmit={handleSubmit}>
          <Row className='purchase__form-row'>
            <CurrencyList/>
            <WalletAddress/>
          </Row>
          <Row className='purchase__form-row'>
            <Amount/>
          </Row>
          <Row className='purchase__form-row'>
            <ConfirmPurchase>
              <div className='confirm-purchase__input-box'>
                <h5 className="font-weight-bold">Confirm operation and send your currency on following address:</h5>
                <FormGroup>
                  <Field name='generatedAddress' type='text' placeholder='GENERATED APOLLONIA WALLET ADDRESS' defaultValue={address} component={ErrorField}/>
                </FormGroup>
              </div>
            </ConfirmPurchase>
          </Row>
        </Form>
      </div>
    );
  }
}

const validate = ({currency, currencyAmount, wallet, generatedAddress}) => {
  const errors = {};

  if(!currency) {
    errors.generatedAddress = 'choose currency!';
  }

  if(!currencyAmount) {
    errors.currencyAmount = 'set currency amount!';
  }

  if(!wallet) {
    errors.wallet = 'enter your wallet address!'
  }

  return errors;
};

export default reduxForm({
  form: 'buyCoin',
  validate
})(PurchaseForm);
