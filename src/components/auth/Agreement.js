import React from 'react';
import PropTypes from 'prop-types';

const Agreement = (props) => {
    return (
        <div className='agreement'>
            <h4 className='agreement__title text-uppercase text-secondary'>
                {props.children}
            </h4>
            <p className='agreement__text'>The following Terms and Conditions ("Terms") govern your (“you” or the
                “Purchaser”) purchase of
                cryptographic tokens ("C20") from Crypto20, an exempted company registered in the Cayman Islands (the
                “Company”). Each of you and the Company is a “Party​” and, together, the “Parties​” to these Terms. This
                document is not a solicitation for investment and does not pertain in any way to an offering of
                securities in any jurisdiction. This document describes the C20 token sale.
            </p>
        </div>
    );
};

Agreement.propTypes = {};

export default Agreement;
