import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Row, Col} from 'reactstrap';
import CurrencyList from "./CurrencyList";
import WalletAddress from "./WalletAddress";
import Amount from "./Amount";
import Confirm from "./Confirm";

class PurchaseForm extends Component {
    render() {
        return (
            <Row>
                <Form>
                    <CurrencyList/>
                    <WalletAddress/>
                    <Amount/>
                    <Confirm/>
                </Form>
            </Row>
        );
    }
}

PurchaseForm.propTypes = {};
PurchaseForm.defaultProps = {};

export default PurchaseForm;
