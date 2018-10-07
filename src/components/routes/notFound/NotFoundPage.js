import React, { Component } from 'react';
import { Container } from 'reactstrap';

class NotFound extends Component {
  render() {
    return (
      <div className='not-found'>
        <Container>
          <div className='text-center'>
            <h1>404</h1>
            <h2>Page not Found</h2>
          </div>
        </Container>
      </div>
    );
  }
}

export default NotFound;