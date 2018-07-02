import React from 'react';
import PropTypes from 'prop-types';
import {Col} from 'reactstrap'

const CurrencyList = (props) => {
    return (
        <Col xs='12' md='6'>
            <div className='currency__list'>
                <h5 className="purchase__form-title font-weight-bold">Choose currency:</h5>
                <ul className='list-unstyled'>
                    <li><a href=""> </a></li>
                    <li><a href=""> </a></li>
                    <li><a href=""> </a></li>
                    <li><a href=""> </a></li>
                    <li><a href=""> </a></li>
                </ul>
            </div>
        </Col>
    );
};

CurrencyList.propTypes = {};
CurrencyList.defaultProps = {};

export default CurrencyList;
