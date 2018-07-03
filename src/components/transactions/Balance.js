import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Col} from 'reactstrap';
import './transactions.scss';

class Balance extends Component {
    render() {
        return (
            <Col xs='12' lg='4'>
                <div className='balance d-flex align-items-center'>
                    <h5 className='balance__title'>My balance:</h5>
                    <div className='balance__number-box'>
                        <div className='balance__number d-flex align-items-center justify-content-center'>110 000 APO</div>
                        <div className='balance__course text-center'>1 APO = 0,85$</div>
                    </div>
                </div>
            </Col>
        );
    }
}

Balance.propTypes = {};
Balance.defaultProps = {};

export default Balance;
