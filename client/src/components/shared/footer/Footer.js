import React from 'react';
import './style.scss';

const Footer = () => {
  return (
    <footer style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <p style={{ color: 'white' }} className="">
        &copy; 2022 Mohammad Abedalnabi
      </p>
    </footer>
  );
};

export default Footer;
