import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const HeaderNavNotAuthorized = (props) => {
  return (
    <Fragment>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink to="/auth/signIn"
                className='m-auto header__link'>SIGN IN</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/auth/signUp'
                className='m-auto header__link'>REGISTER</NavLink>
        </NavItem>
      </Nav>
    </Fragment>
  );
};

HeaderNavNotAuthorized.propTypes = {
  signIn: PropTypes.func.isRequired
};

export default HeaderNavNotAuthorized;
