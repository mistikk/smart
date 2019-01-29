import React from 'react';

import logo from '../../assets/placeholder_logo.jpg';

import './_header.css';

const HeaderView = () => (
  <header className="header">
    <img className="logo" src={logo} alt="placeholder logo" />
  </header>
);

export default HeaderView;
