import React, { Component } from 'react';
import { FormGroup, Input, Form, Row } from 'reactstrap';
import CurrencyList from "./CurrencyList";
import WalletAddress from "./WalletAddress";
import Amount from "./Amount";
import ConfirmPurchase from "./ConfirmPurchase";
import { reduxForm } from 'redux-form';

class PurchaseForm extends Component {
  render() {
    const {handleSubmit, error} = this.props;
    return (
      <div className='purchase__form w-100'>
        <Form onSubmit={handleSubmit}>
          <Row className='purchase__form-row'>
            <CurrencyList error={error}/>
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
                  <Input type='text' placeholder='GENERATED APOLLONIA WALLET ADDRESS'/>
                </FormGroup>
              </div>
            </ConfirmPurchase>
          </Row>
        </Form>
      </div>
    );
  }
}

const validate = ({currency, currencyAmount, wallet, amount}) => {
  const errors = {};

  if(!currency) {
    errors.currency = 'choose currency!';
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
