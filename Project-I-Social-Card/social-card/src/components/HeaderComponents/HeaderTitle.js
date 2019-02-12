import React from 'react';
import './Header.css';
import './HeaderContainer';
const moment = require('moment');
const currentDate = moment().format('ll');

function HeaderTitle() {
  return (
    <div>
      <h5 className="title">Lambda School<span> @LambdaSchool · {currentDate}</span></h5>
    </div>
  );
}

export default HeaderTitle;
