import React from 'react';
import './footer.styles.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='Footer py-2  px-5 mt-auto'>
      <Link>Terms & Conditions</Link>
      <Link>All services | Policy</Link>
    </footer>
  );
};

export default Footer;
