import React, {Component} from 'react';
import {Col} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import '../routes/transactions/transactions.scss';

class Balance extends Component {
  render() {
    return (
      <Col xs='12' lg='4'>
        <div className='balance'>
          <h5 className='balance__title mb-5'>Balance</h5>
          <div className='balance__number-box'>
            <div className='balance__number d-flex align-items-start text-primary mb-5'>
              <span>APOLLO</span>113 933.11
            </div>
            <div className='balance__course text-secondary mb-5'>1 APO = 0,85$</div>
          </div>
          <NavLink to='/purchase'
                   className='balance__btn btn btn-primary'>Buy APOLLO</NavLink>
        </div>
      </Col>
    );
  }
}

export default Balance;
