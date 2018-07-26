import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {signIn, signOut} from '../../ducks/auth';
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
    const {signIn} = this.props;
    signIn();
  };

  handleLogOut = () => {
    const {signOut} = this.props;
    signOut();
  };

  render() {
    const headerNav = () => {
      return this.props.isAuthorized ? <HeaderNavAuthorized logOut={this.handleLogOut}/> :
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

// Header.propTypes = {
//   signIn: PropTypes.func.isRequired,
//   logOut: PropTypes.func.isRequired
// };

export default connect((state, ownProps) => ({
  isAuthorized: state.auth.get('isAuthorized')
}), {signIn, signOut})(Header);