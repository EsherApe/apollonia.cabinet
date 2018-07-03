import React from 'react';
import {ButtonGroup, Button, Col} from 'reactstrap';
import PropTypes from 'prop-types';

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

Amount.propTypes = {};
Amount.defaultProps = {};

export default Amount;
