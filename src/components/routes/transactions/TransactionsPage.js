import React, {Component} from 'react';
import {Container, Row} from 'reactstrap';
import Balance from "../../transactions/Balance";
import TransactionsTable from "../../transactions/TransactionsTable";

class TransactionsPage extends Component {
  render() {
    return (
      <div className='transactions'>
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