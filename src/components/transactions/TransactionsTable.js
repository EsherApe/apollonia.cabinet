import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table, Col} from 'reactstrap';

class TransactionsTable extends Component {
    render() {
        return (
            <Col xs='12' lg='8'>
                <h1 className='transactions__title'>Transactions</h1>
                <p className='transactions__text'>Average transaction process may take 15 minutes and above.</p>
                <div className='transactions__table-box'>
                    <Table>
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
                                <td className='text-light'>IN PROGRESS</td>
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
                <div className='transactions__contacts'>For any support and questions, <a href="">contact with us.</a></div>
            </Col>
        );
    }
}

TransactionsTable.propTypes = {};
TransactionsTable.defaultProps = {};

export default TransactionsTable;
