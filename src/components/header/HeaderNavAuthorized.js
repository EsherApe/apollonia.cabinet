import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem } from 'reactstrap';
import {connect} from 'react-redux';
import {moduleName} from '../../ducks/auth';

class HeaderNavAuthorized extends Component {
  render() {
    return (
      <Fragment>
        {/*<Nav className="ml-auto" navbar>*/}
          {/*<NavItem>*/}
            {/*<NavLink to="/transactions"*/}
                     {/*className='m-auto header__link'>Transactions</NavLink>*/}
          {/*</NavItem>*/}
          {/*<NavItem>*/}
            {/*<NavLink to='/purchase'*/}
                     {/*className='m-auto header__link'>Buy APO coin</NavLink>*/}
          {/*</NavItem>*/}
        {/*</Nav>*/}
        <Nav className="ml-auto" navbar>
          <NavItem>
            <div className='d-flex align-items-center justify-content-center'>
              <div className='header__user-greeting'>
                <span className='header__logout-btn font-weight-bold' onClick={this.props.signOut}>LOGOUT</span>
              </div>
            </div>
          </NavItem>
        </Nav>
      </Fragment>
    );
  }
}

HeaderNavAuthorized.propTypes = {
  signOut: PropTypes.func.isRequired,
  // firstName: PropTypes.string.isRequired
};

export default connect(state => ({
  firstName: state[moduleName].user.token
}))(HeaderNavAuthorized);
