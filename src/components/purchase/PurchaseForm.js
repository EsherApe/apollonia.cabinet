import React, {Component} from 'react';
import {FormGroup, Form, Row, Col} from 'reactstrap';
import {reduxForm, Field} from 'redux-form';
import CurrencyList from "./CurrencyList";
import WalletAddress from "./WalletAddress";
import Amount from "./Amount";
import ConfirmPurchase from "./ConfirmPurchase";

class PurchaseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalApoCoins: 0,
      currencyAmount: 0
    }
  }

  calcTotalApoCoins = (totalApoCoins, currencyAmount) => {
    this.setState(() => {
      return {
        totalApoCoins: totalApoCoins,
        currencyAmount: currencyAmount
      }
    })
  };

  render() {
    const {handleSubmit, address, status, rates, buyCoinForm} = this.props;
    return (
      <div className='purchase__form w-100'>
        <Form onSubmit={handleSubmit}>
          <Row className='purchase__form-row'>
            <Col xs='12' md='5' lg='4' className='purchase__form--left'>
              <CurrencyList buyCoinForm={buyCoinForm} rates={rates} calcTotalApoCoins={this.calcTotalApoCoins}/>
            </Col>
            <Col xs='12' md='7' lg={{size: 7, offset: 1}} className='purchase__form--right'>
              <div className="purchase__row">
                <Amount buyCoinForm={buyCoinForm} rates={rates} totalApoCoins={this.state.totalApoCoins} calcTotalApoCoins={this.calcTotalApoCoins}/>
              </div>
              {/*<div className="purchase__row">*/}
                {/*<WalletAddress/>*/}
              {/*</div>*/}
              <div className="purchase__row">
                <ConfirmPurchase address={address}/>
                Average transaction process may take 15 minutes and above. For any support and questions, contact with us.
              </div>
              <button type='submit' className='btn btn-primary'>Submit</button>
              {/*<div className="purchase__row">*/}
                {/*<h5 className="font-weight-bold">Status</h5>*/}
                {/*<FormGroup>*/}
                  {/*<Field name='purchaseStatus' type='text' component='input' className='form-control' value={status} disabled/>*/}
                {/*</FormGroup>*/}
                {/*Average transaction process may take 15 minutes and above. For any support and questions, contact with us.*/}
              {/*</div>*/}
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

const validate = ({currency, currencyAmount, wallet, generatedAddress}) => {
  const errors = {};

  if (!currency) {
    errors.generatedAddress = 'choose currency!';
  }

  if (!currencyAmount) {
    errors.currencyAmount = 'set currency amount!';
  }

  return errors;
};

export default reduxForm({
  form: 'buyCoin',
  validate
})(PurchaseForm);
