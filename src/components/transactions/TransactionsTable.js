import React, { Component } from 'react';
import { Table, Col } from 'reactstrap';

class TransactionsTable extends Component {
  render() {
    return (
      <Col xs='12' lg='8'>
        <h2 className='transactions-table__title mb-0'>Transactions</h2>
        <p className='transactions-table__subtitle text-secondary'>Average transaction process may take 15 minutes and
          above.</p>
        <div className='transactions-table__table-box'>
          <Table className='transactions-table__table text-center font-weight-bold' borderless>
            <thead>
            <tr>
              <th>Date</th>
              <th>Send</th>
              <th>Exchange rate</th>
              <th>Received</th>
              <th>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>11.06.18</td>
              <td>10 000 DOGE</td>
              <td>0,4</td>
              <td>2500 APO</td>
              <td className='text-success'>DONE</td>
            </tr>
            <tr>
              <td>09.06.18</td>
              <td>200 000 DOGE</td>
              <td>0,4</td>
              <td>50 000 APO</td>
              <td className='text-secondary'>IN PROGRESS</td>
            </tr>
            <tr>
              <td>01.06.18</td>
              <td>10 000 DOGE</td>
              <td>0,4</td>
              <td>2500 APO</td>
              <td className='text-danger'>CANCELED</td>
            </tr>
            </tbody>
          </Table>
        </div>
        <div className='transactions-table__contacts text-secondary'>
          For any support and questions, <a href="" className='transactions-table__contacts-link text-secondary'>contact
          with us.</a>
        </div>
      </Col>
    );
  }
}

export default TransactionsTable;
