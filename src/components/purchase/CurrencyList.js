import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Col } from 'reactstrap';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import checkedIconActive from '../../img/currencies/done.svg';
import checkedIcon from '../../img/currencies/nodone.svg';
import { generateAddress } from '../../ducks/user';

class CurrencyList extends Component {
  render() {
    return (
      <div className='currency__list'>
        <h5 className="font-weight-bold">Choose currency:</h5>
        <ul className='list-unstyled'>
          <li className='currency__list-item'>
            <label>
              <Field name='currency' type="radio" value='BITCOIN' component='input' className='currency__input'
                     onClick={this.handleInputClick('BITCOIN')}/>
              <div className='currency__item d-flex align-items-center justify-content-start'>
                <img src={checkedIconActive} alt="" className='currency__icon-checked currency__icon-checked--active'/>
                <div
                  className="currency__item-box d-flex align-items-center justify-content-start">
                  <i className='currency__icon bitcoin'> </i>
                  <span>Bitcoin</span>
                </div>
              </div>
            </label>
          </li>
          <li className='currency__list-item'>
            <label>
              <Field name='currency' type="radio" value='ETHEREUM' component='input' className='currency__input'
                     onClick={this.handleInputClick('ETHEREUM')}/>
              <div className='currency__item d-flex align-items-center justify-content-start'>
                <img src={checkedIconActive} alt="" className='currency__icon-checked'/>
                <div className="currency__item-box d-flex align-items-center justify-content-start">
                  <i className="currency__icon ethereum"> </i>
                  <span>Ethereum</span>
                </div>
              </div>
            </label>
          </li>
        </ul>
        <NavLink to="/transactions" className='currency__btn btn btn-primary'>List of transactions</NavLink>
      </div>
    );
  }

  handleInputClick = (walletType) => () => {
    let {generateAddress, buyCoinForm, rates, calcTotalApoCoins} = this.props;
    generateAddress(walletType);

    let currencyAmount = buyCoinForm && buyCoinForm.values ? buyCoinForm.values.currencyAmount : '';

    if(buyCoinForm && buyCoinForm.values) {
      console.log(rates[walletType]);
      console.log(currencyAmount);
      let apoCoins = 0;

      if(currencyAmount) {
        apoCoins = ((rates[walletType] * currencyAmount) / 0.03).toFixed(2)
      }

      calcTotalApoCoins(apoCoins);
    }
  }
}

CurrencyList.propTypes = {};
CurrencyList.defaultProps = {};

export default connect(null, {generateAddress})(CurrencyList);
