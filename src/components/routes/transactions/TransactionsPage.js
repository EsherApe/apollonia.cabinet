import React, {Component} from 'react';
import {Container, Row} from 'reactstrap';
import Balance from "../../transactions/Balance";
import TransactionsTable from "../../transactions/TransactionsTable";
import signInBg from '../../../img/purchase__bg.png';

class TransactionsPage extends Component {
  render() {
    return (
      <div className='transactions'>
        <img src={signInBg} alt="" className='purchase__bg'/>
        <Container>
          <Row>
            <Balance/>
            <TransactionsTable/>
          </Row>
        </Container>
      </div>
    );
  }
}

export default TransactionsPage;