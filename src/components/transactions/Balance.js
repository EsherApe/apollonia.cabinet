import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'reactstrap';

class Balance extends Component {
    render() {
        return (
            <Col xs='12' lg='4'>
                <h3 className='balance__title'>My balance</h3>
                <div className='balance__number-box'>
                    <div className='balance__number'>110 000 APO</div>
                    <div className='balance__course'>1 APO = 0,85$</div>
                </div>
            </Col>
        );
    }
}

Balance.propTypes = {};
Balance.defaultProps = {};

export default Balance;
