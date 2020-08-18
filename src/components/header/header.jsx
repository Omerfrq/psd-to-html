import React from 'react';
import './header.styles.css';
import { Navbar, Nav } from 'react-bootstrap';

//  Icons
import BarsIcon from '../../assets/svgs/Bars.icon';
import UserIcon from '../../assets/svgs/User.icon';
import MailIcon from '../../assets/svgs/Mail.icon';

const Header = () => {
  return (
    <Navbar bg='dark' className='header-nav text-white'>
      <Navbar.Brand>
        <Nav.Link className='icon-box header-icon-color p-0'>
          <BarsIcon color='#ebff00' height={20} />
        </Nav.Link>
      </Navbar.Brand>
      <marquee direction='right' behavior='scroll'>
        This is a sample scrolling text that has scrolls texts to right.
      </marquee>
      <Nav className='align-items-center'>
        <Nav.Link>
          <MailIcon color='currentColor' height={35} />
        </Nav.Link>
        <Nav.Link className='mx-3'>
          <UserIcon color='currentColor' height={30} />
        </Nav.Link>
        <div className='user-name text-nowrap text-center'>
          <h5 className='mb-1'>Welcome</h5>
          <p className='mb-0 small'>Peter Parker</p>
        </div>
      </Nav>
    </Navbar>
  );
};

export default Header;
