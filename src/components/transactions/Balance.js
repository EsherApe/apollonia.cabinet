import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../routes/transactions/transactions.scss';
import { connect } from "react-redux";
import { getHistory, moduleName, transactionsListSelector } from "../../ducks/user";
import moment from "moment/moment";

class Balance extends Component {
  render() {
    const {history} = this.props;
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
