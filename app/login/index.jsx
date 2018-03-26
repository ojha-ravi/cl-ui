import React from 'react';
import img from '../../assets/cls.jpg';
import LoginWindow from './loginWindow';

// import PropTypes from 'prop-types';

const index = () => (
  <div className="main">
    <img className="bg-img" src={img} alt="Login" />
    <LoginWindow />
  </div>
);

// index.propTypes = {
//   children: PropTypes.node.isRequired
// };

export default index;
