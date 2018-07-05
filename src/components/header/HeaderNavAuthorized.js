import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Nav, NavItem} from 'reactstrap';
import {NavLink, Link} from 'react-router-dom';
import userImg from '../../img/user.png';

const HeaderNavAuthorized = (props) => {
    return (
        <Fragment>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink to="/transactions"
                             className='m-auto header__link'>Transactions</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to='/purchase'
                             className='m-auto header__link'>Buy APO coin</NavLink>
                </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <div className='d-flex align-items-center justify-content-center'>
                        <a href=''>
                            <img src={userImg} className='header__img' alt=""/>
                        </a>
                        <div className='header__user-greeting'>
                            <div>Hello, Eugen!</div>
                            <Link to="/" className='font-weight-bold' onClick={props.logOut}>LOGOUT</Link>
                        </div>
                    </div>
                </NavItem>
            </Nav>
        </Fragment>
    );
};

HeaderNavAuthorized.propTypes = {
    logOut: PropTypes.func.isRequired
};

export default HeaderNavAuthorized;
