import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';

const Agreement = (props) => {
    return (
        <div className='agreement'>
            <h4 className='agreement__title text-uppercase'>{props.title} {props.link && <a href={props.link}>{props.linkText}</a>}</h4>
            <p>The following Terms and Conditions ("Terms") govern your (“you” or the “Purchaser”) purchase of
                cryptographic tokens ("C20") from Crypto20, an exempted company registered in the Cayman Islands (the
                “Company”). Each of you and the Company is a “Party​” and, together, the “Parties​” to these Terms. This
                document is not a solicitation for investment and does not pertain in any way to an offering of
                securities in any jurisdiction. This document describes the C20 token sale.
            </p>
            <Button>Confirm and accept</Button>
        </div>
    );
};

Agreement.propTypes = {};
Agreement.defaultProps = {};

export default Agreement;
