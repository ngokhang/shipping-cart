import React from 'react';
import Logo from '../../../assets/icons/logo.png';
import { Link } from 'react-router-dom';

function HeaderLogo(props) {
  return (
    <Link
      to="/"
      style={{
        display: 'inline-block',
        padding: '0 !important',
      }}
    >
      <img src={Logo} alt="" />
    </Link>
  );
}

export default HeaderLogo;
