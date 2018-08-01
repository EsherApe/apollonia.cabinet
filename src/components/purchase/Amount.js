import React from 'react';
import { Button, Col } from 'reactstrap';

const Amount = (props) => {
  return (
    <Col xs='12'>
      <h5 className="font-weight-bold">Amount: </h5>
      <div className='d-flex'>
        <label className='amount__input-box d-flex justify-content-center align-items-center'>
          <input className='amount__input' value='100'/>
        </label>
        <div className='amount__output-box d-flex justify-content-center align-items-center'>5000 APO</div>
      </div>
    </Col>
  );
};

export default Amount;