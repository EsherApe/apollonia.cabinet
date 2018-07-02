import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'reactstrap';
import PurchaseForm from "./PurchaseForm";

class Purchase extends Component {
    render() {
        return (
            <Row>
                <Col xs='12' lg='8' className='purchase'>
                    <Row>
                        <h2 className='text-uppercase'>Buy APO coin</h2>
                        <div>
                            Average transaction process may take 15 minutes and above. For any support and questions, contact
                            with us.
                        </div>
                    </Row>
                    <Row>
                        <PurchaseForm/>
                    </Row>
                </Col>
            </Row>
        );
    }
}

Purchase.propTypes = {};
Purchase.defaultProps = {};

export default Purchase;
