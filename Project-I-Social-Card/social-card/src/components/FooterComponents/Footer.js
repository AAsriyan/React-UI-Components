import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRetweet, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className="footer-elements">
      <FontAwesomeIcon icon={faComment} className="footer-icon"/>
      <FontAwesomeIcon icon={faRetweet} className="footer-icon"/>
      <FontAwesomeIcon icon={faHeart} className="footer-icon"/>
      <FontAwesomeIcon icon={faEnvelope} className="footer-icon"/>
    </div>
  );
}

export default Footer;