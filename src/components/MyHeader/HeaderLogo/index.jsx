import React from 'react';
import Logo from '../../../assets/icons/logo.png';

function HeaderLogo(props) {
  return (
    <a
      href="#"
      style={{
        display: 'inline-block',
      }}
    >
      <img src={Logo} alt="" />
    </a>
  );
}

export default HeaderLogo;
