import React from 'react';
import PropTypes from 'prop-types';
import {Col} from 'reactstrap';

const CurrencyList = (props) => {
    return (
        <Col xs='12' md='6'>
            <div className='currency__list'>
                <h5 className="font-weight-bold">Choose currency:</h5>
                <ul className='list-unstyled d-flex'>
                    <li className='currency__item list-inline-item d-flex align-items-center justify-content-center'>
                        <a href=""><i className='currency__icon bitcoin'> </i></a>
                    </li>
                    <li className='currency__item list-inline-item d-flex align-items-center justify-content-center'>
                        <a href=""><i className="currency__icon bitcoin-alt"> </i></a>
                    </li>
                    <li className='currency__item list-inline-item d-flex align-items-center justify-content-center'>
                        <a href=""><i className="currency__icon eos"> </i></a>
                    </li>
                    <li className='currency__item list-inline-item d-flex align-items-center justify-content-center'>
                        <a href=""><i className="currency__icon ethereum"> </i></a>
                    </li>
                    <li className='currency__item list-inline-item d-flex align-items-center justify-content-center'>
                        <a href=""><i className="currency__icon litecoin"> </i></a>
                    </li>
                </ul>
            </div>
        </Col>
    );
};

CurrencyList.propTypes = {};
CurrencyList.defaultProps = {};

export default CurrencyList;
