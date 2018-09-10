import React from 'react';
import {Row, Col} from 'reactstrap';

const SignInText = () => {
  return (
    <div className='sign-in__text-box'>
      <Row>
        <Col xs='12' lg='7'>
          <h2 className='sign-in__form-title'>TERMS OF USE</h2>
          <p className='sign-in__form-text'>The following Terms and Conditions ("Terms") govern your (“you” or the
            “Purchaser”) purchase of cryptographic tokens ("C20") from Crypto20, an exempted company registered in the
            Cayman Islands (the “Company”). Each of you and the Company is a “Party​” and, together, the “Parties​” to
            these Terms. This document is not a solicitation for investment and does not pertain in any way to an
            offering of securities in any jurisdiction. This document describes the C20 token sale.</p>
        </Col>
      </Row>
    </div>
  )
};

export default SignInText;