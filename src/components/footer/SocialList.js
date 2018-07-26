import React, { Component } from 'react';
import SocialItem from './SocialItem';
import { Col } from 'reactstrap';

class SocialList extends Component {
  render() {
    let socialClassNames = [
      'facebook-f',
      'twitter',
      'instagram',
      'youtube',
      'linkedin-in'
    ];
    let socialList = socialClassNames.map((className) => {
      return (
        <SocialItem key={className} iconClassName={className}/>
      )
    });
    return (
      <Col xs='12' sm='8'>
        <ul className="socials__list list-unstyled text-sm-right text-center">
          {socialList}
        </ul>
      </Col>
    )
  }
}

export default SocialList;