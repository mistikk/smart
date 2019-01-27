import React from 'react';

import './_button.css';

const ButtonView = ({ text, onClick, disabled }) => (
  <a
    onClick={() => !disabled && onClick()}
    className={`button ${disabled && 'passive'}`}
  >
    {text}
  </a>
);

export default ButtonView;
