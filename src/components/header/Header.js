import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {moduleName, signIn, signOut} from '../../ducks/auth';
import HeaderNavAuthorized from "./HeaderNavAuthorized";
import HeaderNavNotAuthorized from "./HeaderNavNotAuthorized";
import './header.scss';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleSignIn = () => {
    this.props.signIn();
  };

  handleSignOut = () => {
    this.props.signOut();
  };

  render() {
    const headerNav = () => {
      return this.props.authorized ? <HeaderNavAuthorized signOut={this.handleSignOut}/> :
        <HeaderNavNotAuthorized signIn={this.handleSignIn}/>
    };
    return (
      <header className='header'>
        <Container>
          <Navbar light expand="md" className='header__navbar'>
            <NavbarBrand tag={Link} to="/" className='header__logo font-weight-bold'>Apollonia</NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
              {headerNav()}
            </Collapse>
          </Navbar>
        </Container>
      </header>
    )
  }
}

Header.propTypes = {
  signIn: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired
};

export default connect(state => ({
  authorized: !!state[moduleName].user.token
}), {signIn, signOut})(Header);