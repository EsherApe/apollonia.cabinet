import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PurchaseForm from "../../purchase/PurchaseForm";
import './purchase.scss';
import signInBg from '../../../img/side_bkg_right.svg';

class Purchase extends Component {
  render() {
    return (
      <div className='purchase' style={{backgroundImage: `url(${signInBg})`}}>
        <Container>
          <Col xs='12' lg='9'>
            <Row>
              <h2 className='purchase__title text-uppercase'>Buy APO coin</h2>
              <span className='purchase__subtitle text-secondary'>
                                Average transaction process may take 15 minutes and above. For any support and
                                questions, contact with us.
                            </span>
            </Row>
            <Row>
              <PurchaseForm/>
            </Row>
          </Col>
        </Container>
      </div>
    );
  }
}

export default Purchase;
