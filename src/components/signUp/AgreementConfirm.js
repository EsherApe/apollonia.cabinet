import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';

const AgreementConfirm = (props) => {
    return (
        <Button className='agreement__btn'>Confirm <br/> and accept</Button>
    );
};

AgreementConfirm.propTypes = {};
AgreementConfirm.defaultProps = {};

export default AgreementConfirm;
