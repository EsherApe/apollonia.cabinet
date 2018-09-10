import React, { Component, Fragment } from 'react';
import { Table, Col } from 'reactstrap';
import {connect} from 'react-redux';
import {moduleName, getHistory, transactionsListSelector} from '../../ducks/user';
import Loader from '../common/Loader';
import { ToastContainer, toast } from 'react-toastify';

class TransactionsTable extends Component {
  componentDidMount() {
    // this.props.getHistory();
  }

  render() {
    const {loading, error, history} = this.props;
    return (
      <Fragment>
        <Col xs='12' lg='8'>
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
              {history.length ? this.getRows() : <tr><td colSpan={5} style={{color: 'red'}}>No transactions yet!</td></tr>}
              </tbody>
            </Table>
          </div>
          <div className='transactions-table__contacts text-secondary'>
            Average transaction process may take 15 minutes and above. For any support and questions, contact with us.
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
    return this.props.history.map(this.getRow)
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
  history: transactionsListSelector(state)
}), {getHistory})(TransactionsTable);
