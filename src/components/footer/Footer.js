import React from 'react';
import Copyright from './Copyright';
import SocialList from './SocialList';

const Footer = (props) => {
    return (
        <div className='footer'>
            <Copyright/>
            <SocialList/>
        </div>
    );
};

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
