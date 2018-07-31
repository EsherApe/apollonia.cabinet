import React, { Component, Fragment } from 'react';
import { Table, Col } from 'reactstrap';
import {connect} from 'react-redux';
import {moduleName, getHistory} from '../../ducks/transactions';
import Loader from '../common/Loader';
import { ToastContainer, toast } from 'react-toastify';

class TransactionsTable extends Component {
  componentDidMount() {
    this.props.getHistory();
  }

  render() {
    const {loading, error} = this.props;
    return (
      <Fragment>
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
              {this.getRows()}
              </tbody>
            </Table>
          </div>
          <div className='transactions-table__contacts text-secondary'>
            For any support and questions, <a href="" className='transactions-table__contacts-link text-secondary'>contact
            with us.</a>
          </div>
        </Col>
        {loading && <Loader/>}
        {error && this.notify()}
        <ToastContainer />
      </Fragment>
    );
  }

  notify = () => toast.error(this.props.error.error);

  getRows() {
    return this.props.transactionHistory.map(this.getRow)
  }

  getRow = (transaction) => {
    return <tr key={transaction.id}>
      <td>{transaction.created}</td>
      <td>{transaction.currencyAmount} {transaction.currency}</td>
      <td> </td>
      <td>{transaction.amount} APO</td>
      <td>{transaction.status}</td>
    </tr>
  }
}

export default connect(state => ({
  loading: state[moduleName].loading,
  error: state[moduleName].error,
  transactionHistory: state[moduleName].get('history').toArray()
}), {getHistory})(TransactionsTable);
