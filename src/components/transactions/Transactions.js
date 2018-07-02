import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'reactstrap';
import Balance from "./Balance";
import TransactionsTable from "./TransactionsTable";

class Transactions extends Component {
    render() {
        return (
            <Row>
                <Balance/>
                <TransactionsTable/>
            </Row>
        );
    }
}

Transactions.propTypes = {};
Transactions.defaultProps = {};

export default Transactions;
