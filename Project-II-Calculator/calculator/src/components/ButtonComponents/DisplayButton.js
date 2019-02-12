import React from 'react';
import './Button.css';

const DisplayButton = props => {
  return (
    <div className="display-button">{props.display.display}</div>
  );
}

export default DisplayButton;