import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../routes/transactions/transactions.scss';
import { connect } from "react-redux";
import { transactionsListSelector } from "../../ducks/user";

class Balance extends Component {
  render() {
    return (
      <Col xs='12' lg='4'>
        <div className='balance'>
          <h5 className='balance__title mb-5'>Balance</h5>
          <div className='balance__number-box'>
            <div className='balance__number d-flex align-items-start text-primary mb-5'>
              <span className='balance__number-text'>APOLLO</span>
              <span className='balance__number-value'>{this.calcTokensSum()}</span>
            </div>
            <div className='balance__course text-secondary mb-5'>1 APO = <span>0.03</span>$</div>
          </div>
          <NavLink to='/purchase'
                   className='balance__btn btn btn-primary'>Buy APOLLO</NavLink>
        </div>
      </Col>
    );
  }

  calcTokensSum = () => {
    let tokensArr = this.props.history.map((transaction) => {
      if(transaction.amount == false) {
        return 0
      }
      return transaction.amount
    });

    return tokensArr.reduce((sum, current) => {
      return sum + current;
    }, 0);
  }
}

export default connect(state => ({
  history: transactionsListSelector(state)
}))(Balance);
