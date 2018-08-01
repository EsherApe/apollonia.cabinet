import React, { Component } from 'react';
import { Col, Button } from 'reactstrap';

class ConfirmPurchase extends Component {
  render() {
    return (
      <Col xs='12'>
        <div className='d-flex align-items-center'>
          <Button className='confirm-purchase__btn'>CONFIRM</Button>
          {this.props.children}
        </div>
      </Col>
    );
  }
}

export default ConfirmPurchase;
