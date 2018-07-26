import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function SocialItem(props) {
  return (
    <li className="socials__list-item list-inline-item hover-child-bounceIn">
      <a href="" className="socials__link d-flex align-items-center justify-content-center">
        <FontAwesomeIcon icon={['fab', props.iconClassName]} size='lg'/>
      </a>
    </li>
  )
}

SocialItem.propTypes = {
  iconClassName: PropTypes.string
};

export default SocialItem;