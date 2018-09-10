import React from 'react';
import Copyright from './Copyright';
import SocialList from './SocialList';
import { Container, Row } from 'reactstrap';
import './footer.scss';

const Footer = (props) => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Copyright/>
          {/*<SocialList/>*/}
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
