import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field} from 'redux-form';
import {Col} from 'reactstrap';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import checkedIconActive from '../../img/currencies/checked__icon--active.png';
import checkedIcon from '../../img/currencies/checked__icon.png';
import {generateAddress} from '../../ducks/user';

class CurrencyList extends Component {
  render() {
    return (
      <div className='currency__list'>
        <h5 className="font-weight-bold">Choose currency:</h5>
        <ul className='list-unstyled'>
          <li className='currency__list-item'>
            <label>
              <Field name='currency' type="radio" value='BTC' component='input' className='currency__input'
                     onClick={this.handleInputClick('BITCOIN')}/>
              <div className='currency__item d-flex align-items-center justify-content-start'>
                <img src={checkedIconActive} alt="" className='currency__icon-checked'/>
                <div
                  className="currency__item-box currency__item-box--active d-flex align-items-center justify-content-start">
                  <i className='currency__icon bitcoin'> </i>
                  <span>Bitcoin</span>
                </div>
              </div>
            </label>
          </li>
          <li className='currency__list-item'>
            <label>
              <Field name='currency' type="radio" value='ALT/BTC' component='input' className='currency__input'
                     onClick={this.handleInputClick('BITCOINALT')}/>
              <div className='currency__item d-flex align-items-center justify-content-start'>
                <img src={checkedIcon} alt="" className='currency__icon-checked'/>
                <div className="currency__item-box d-flex align-items-center justify-content-start">
                  <i className="currency__icon bitcoin-alt"> </i>
                  <span>Bitcoin cash</span>
                </div>
              </div>
            </label>
          </li>
          <li className='currency__list-item'>
            <label>
              <Field name='currency' type="radio" value='EOS' component='input' className='currency__input'
                     onClick={this.handleInputClick('EOS')}/>
              <div className='currency__item d-flex align-items-center justify-content-start'>
                <img src={checkedIcon} alt="" className='currency__icon-checked'/>
                <div className="currency__item-box d-flex align-items-center justify-content-start">
                  <i className="currency__icon eos"> </i>
                  <span>EOS</span>
                </div>
              </div>
            </label>
          </li>
          <li className='currency__list-item'>
            <label>
              <Field name='currency' type="radio" value='ETH' component='input' className='currency__input'
                     onClick={this.handleInputClick('ETHEREUM')}/>
              <div className='currency__item d-flex align-items-center justify-content-start'>
                <img src={checkedIcon} alt="" className='currency__icon-checked'/>
                <div className="currency__item-box d-flex align-items-center justify-content-start">
                  <i className="currency__icon ethereum"> </i>
                  <span>Ethereum</span>
                </div>
              </div>
            </label>
          </li>
          <li className='currency__list-item'>
            <label>
              <Field name='currency' type="radio" value='LTC' component='input' className='currency__input'
                     onClick={this.handleInputClick('LITECOIN')}/>
              <div className='currency__item d-flex align-items-center justify-content-start'>
                <img src={checkedIcon} alt="" className='currency__icon-checked'/>
                <div className="currency__item-box d-flex align-items-center justify-content-start">
                  <i className="currency__icon litecoin"> </i>
                  <span>Lite coin</span>
                </div>
              </div>
            </label>
          </li>
        </ul>
        <NavLink to="/transactions"
                 className='currency__btn btn btn-primary'>List of transactions</NavLink>


      </div>
    );
  }

  handleInputClick = (walletType) => () => {
    this.props.generateAddress(walletType);
  }
}

CurrencyList.propTypes = {};
CurrencyList.defaultProps = {};

export default connect(null, {generateAddress})(CurrencyList);
