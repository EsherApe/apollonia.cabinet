import React from 'react';
import { Button, Col } from 'reactstrap';

const Amount = (props) => {
  return (
    <Col xs='12'>
      <h5 className="font-weight-bold">Amount: </h5>
      <div>
        <Button className='amount__btn amount__btn--active'>20 000 DOGE</Button>
        <Button className='amount__btn'>5000 APO</Button>
      </div>
    </Col>
  );
};

export default Amount;