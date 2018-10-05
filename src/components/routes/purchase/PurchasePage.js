import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import PurchaseForm from "../../purchase/PurchaseForm";
import './purchase.scss';
import signInBg from '../../../img/purchase__bg.png';
import {connect} from "react-redux";
import {moduleName, buyCoin, getRates, getWalletTypes} from "../../../ducks/user";

class Purchase extends Component {
  componentDidMount() {
    let {getRates, getWalletTypes} = this.props;
    getRates();
    getWalletTypes();
  }
  render() {
    let {generatedAddress, status, rates, buyCoinForm} = this.props;
    return (
      <div className='purchase'>
        <img src={signInBg} alt="" className='purchase__bg'/>
        <Container>
          <h2 className='purchase__title'>Buy APOLLO</h2>
          <PurchaseForm onSubmit={this.handlePurchaseForm} address={generatedAddress} status={status} rates={rates} buyCoinForm={buyCoinForm}/>
        </Container>
      </div>
    );
  }

  handlePurchaseForm = (currency, currencyAmount, wallet, generatedAddress) => {
    return this.props.buyCoin(currency, currencyAmount, wallet, generatedAddress)
  }
}

export default connect(state => ({
  loading: state[moduleName].loading,
  error: state[moduleName].error,
  generatedAddress: state[moduleName].generatedAddress,
  status: state[moduleName].status,
  rates: state[moduleName].rates,
  buyCoinForm: state['form'].buyCoin
}), {buyCoin, getRates, getWalletTypes})(Purchase);
