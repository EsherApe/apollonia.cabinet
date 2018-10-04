import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

class UnAuthorized extends Component {
  render() {
    return (
      <Container>
        <div className='text-center'>
          <h1>Unauthorized!</h1>
          <h2>please <Link to='/auth/signIn' style={{textDecoration: 'underline'}}>sign in</Link> or <Link to='/auth/signUp' style={{textDecoration: 'underline'}}>register</Link> </h2>
        </div>
      </Container>
    );
  }
}

export default UnAuthorized;
