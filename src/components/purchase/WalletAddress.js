import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {FormGroup, Input, Col} from 'reactstrap';

const WalletAddress = (props) => {
    return (
        <Col xs='12' md='6'>
            <h5 className="purchase__form-title font-weight-bold">Write your wallet address for recieving APO coin:</h5>
            <FormGroup>
                <Input type='text' placeholder='YOUR WALLET ADDRESS'/>
            </FormGroup>
        </Col>
    );
};

WalletAddress.propTypes = {};
WalletAddress.defaultProps = {};

export default WalletAddress;