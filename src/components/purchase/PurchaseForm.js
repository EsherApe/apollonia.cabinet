import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Row, Col} from 'reactstrap';
import CurrencyList from "./CurrencyList";
import WalletAddress from "./WalletAddress";
import Amount from "./Amount";
import ConfirmPurchase from "./ConfirmPurchase";

class PurchaseForm extends Component {
    render() {
        return (
            <div className='purchase__form w-100'>
                <Form>
                    <Row className='purchase__form-row'>
                        <CurrencyList/>
                        <WalletAddress/>
                    </Row>
                    <Row className='purchase__form-row'>
                        <Amount/>
                    </Row>
                    <Row className='purchase__form-row'>
                        <ConfirmPurchase/>
                    </Row>
                </Form>
            </div>
        );
    }
}

PurchaseForm.propTypes = {};
PurchaseForm.defaultProps = {};

export default PurchaseForm;
