import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <div className='not-found'>
        <Container>
          <div className='text-center'>
            <h1>404</h1>
            <h2>Page not Found</h2>
            <NavLink to="/auth/signIn"
            className='m-auto header__link'>SIGN IN</NavLink>
            <NavLink to="/auth/signUp"
                     className='m-auto header__link'>SIGN UP</NavLink>
          </div>
        </Container>
      </div>
    );
  }
}

export default NotFound;