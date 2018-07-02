import React from 'react';
import {ButtonGroup, Button, Col} from 'reactstrap';
import PropTypes from 'prop-types';

const Amount = (props) => {
    return (
        <Col xs='12'>
            <ButtonGroup>
                <Button>20 000 DOGE</Button>
                <Button>5000 APO</Button>
            </ButtonGroup>
        </Col>
    );
};

Amount.propTypes = {};
Amount.defaultProps = {};

export default Amount;
