import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import PurchaseForm from "../../purchase/PurchaseForm";
import './purchase.scss';
import signInBg from '../../../img/purchase__bg.png';
import {connect} from "react-redux";
import {moduleName, buyCoin} from "../../../ducks/user";
import { getRates } from "../../../ducks/inventory";

class Purchase extends Component {
  render() {
    let {generatedAddress, status} = this.props;
    return (
      <div className='purchase'>
        <img src={signInBg} alt="" className='purchase__bg'/>
        <Container>
          <h2 className='purchase__title'>Buy APOLLO</h2>
          <PurchaseForm onSubmit={this.handlePurchaseForm} address={generatedAddress} status={status} getRates={getRates}/>
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
  status: state[moduleName].status
}), {buyCoin, getRates})(Purchase);
