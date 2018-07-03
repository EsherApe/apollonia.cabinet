import React from 'react';
import {Col} from 'reactstrap';

const Copyright = (props) => {
    return (
        <Col xs='12' sm='4' className='d-flex align-items-center justify-content-center justify-content-sm-start'>
            <div className='copyright'>
                <span className='text-secondary'>2018, Apollonia.io</span>
            </div>
        </Col>
    );
};

Copyright.propTypes = {};
Copyright.defaultProps = {};

export default Copyright;

