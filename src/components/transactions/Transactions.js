import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container, Row} from 'reactstrap';
import Balance from "./Balance";
import TransactionsTable from "./TransactionsTable";

class Transactions extends Component {
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

Transactions.propTypes = {};
Transactions.defaultProps = {};

export default Transactions;
