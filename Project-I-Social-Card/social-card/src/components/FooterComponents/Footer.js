import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRetweet, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';


<script defer src="https://use.fontawesome.com/releases/v5.7.1/js/all.js" integrity="sha384-eVEQC9zshBn0rFj4+TU78eNA19HMNigMviK/PU/FFjLXqa/GKPgX58rvt5Z8PLs7" crossorigin="anonymous"></script>

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