import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Nav, NavItem} from 'reactstrap';
import {NavLink, Link} from 'react-router-dom';
import userImg from '../../img/user.png';

const HeaderNavAuthorized = (props) => {
    return (
        <Fragment>
            <Nav className="m-auto" navbar>
                <NavItem>
                    <NavLink to="/transactions" activeClassName="header__link--active"
                             className='m-auto header__link'>Transactions</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to='/purchase' activeClassName="header__link--active"
                             className='m-auto header__link'>Buy APO coin</NavLink>
                </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <div className='d-flex align-items-center justify-content-center'>
                        <Link to='/user'>
                            <img src={userImg} className='header__img' alt=""/>
                        </Link>
                        <div className='header__user-greeting'>
                            <div>Hello, Eugen!</div>
                            <Link to="/" className='font-weight-bold'>LOGOUT</Link>
                        </div>
                    </div>
                </NavItem>
            </Nav>
        </Fragment>
    );
};

HeaderNavAuthorized.propTypes = {};
HeaderNavAuthorized.defaultProps = {};

export default HeaderNavAuthorized;
