import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Col } from 'reactstrap';

const CurrencyList = (props) => {
  return (
    <Col xs='12' md='6'>
      <div className='currency__list'>
        <h5 className="font-weight-bold">Choose currency:</h5>
        <ul className='list-unstyled d-flex flex-wrap'>
          <li className='currency__item list-inline-item d-flex align-items-center justify-content-center'>
            <label>
              <Field name='currency' type="radio" value='BTC' component='input'/><i className='currency__icon bitcoin'> </i>
            </label>
          </li>
          <li className='currency__item list-inline-item d-flex align-items-center justify-content-center'>
            <label>
              <Field name='currency' type="radio" value='ALT/BTC' component='input'/><i className="currency__icon bitcoin-alt"> </i>
            </label>
          </li>
          <li className='currency__item list-inline-item d-flex align-items-center justify-content-center'>
            <label>
              <Field name='currency' type="radio" value='EOS' component='input'/><i className="currency__icon eos"> </i>
            </label>
          </li>
          <li className='currency__item list-inline-item d-flex align-items-center justify-content-center'>
            <label>
              <Field name='currency' type="radio" value='ETH' component='input'/><i className="currency__icon ethereum"> </i>
            </label>
          </li>
          <li className='currency__item list-inline-item d-flex align-items-center justify-content-center'>
            <label>
              <Field name='currency' type="radio" value='LTC' component='input'/><i className="currency__icon litecoin"> </i>
            </label>
          </li>
        </ul>
      </div>
    </Col>
  );
};

CurrencyList.propTypes = {};
CurrencyList.defaultProps = {};

export default CurrencyList;
