import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PurchaseForm from "../../purchase/PurchaseForm";
import './purchase.scss';
import signInBg from '../../../img/side_bkg_right.svg';
import { connect } from "react-redux";
import { moduleName, buyCoin } from "../../../ducks/user";

class Purchase extends Component {
  render() {
    return (
      <div className='purchase' style={{backgroundImage: `url(${signInBg})`}}>
        <Container>
          <Col xs='12' lg='9'>
            <Row>
              <h2 className='purchase__title text-uppercase'>Buy APO coin</h2>
              <span className='purchase__subtitle text-secondary'>
                Average transaction process may take 15 minutes and above. For any support and
                questions, contact with us.
              </span>
            </Row>
            <Row>
              <PurchaseForm onSubmit={this.handlePurchaseForm}/>
            </Row>
          </Col>
        </Container>
      </div>
    );
  }

  handlePurchaseForm = (currency, currencyAmount, wallet, amount) => {
    console.log('handlePurchaseForm');
    return this.props.buyCoin(currency, currencyAmount, wallet, amount)
  }
}

export default connect(state => ({
  loading: state[moduleName].loading,
  error: state[moduleName].error
}), {buyCoin})(Purchase);
