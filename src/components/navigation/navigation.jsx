import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.styles.css';
import { Nav } from 'react-bootstrap';

// Icons
import AccountIcon from '../../assets/svgs/Account.icon';
import DataIcon from '../../assets/svgs/Data.icon';
import TempleteIcon from '../../assets/svgs/Templete.icon';
import ResultIcon from '../../assets/svgs/Result.icon';
import AlertIcon from '../../assets/svgs/Alert.icon';

const Navigation = () => {
  return (
    <Nav
      className='navigation-menu bg-yellow justify-content-around'
      activeKey='/data'
      //   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link as={Link} to='/'>
          <div className='icon-box nav-icon-color'>
            <AccountIcon color='currentColor' height={25} />
          </div>
          <div>Manage</div>
          <div>Account</div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to='/data'>
          <div className='icon-box nav-icon-color'>
            <DataIcon color='currentColor' height={25} />
          </div>
          <div>Manage</div>
          <div>Data</div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to='/'>
          <div className='icon-box nav-icon-color'>
            <TempleteIcon color='currentColor' height={25} />
          </div>
          <div>Manage</div>
          <div>Templetes</div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to='/'>
          <div className='icon-box nav-icon-color'>
            <ResultIcon color='currentColor' height={25} />
          </div>
          <div>Manage</div>
          <div>Results</div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to='/'>
          <div className='icon-box nav-icon-color'>
            <AlertIcon color='currentColor' height={25} />
          </div>
          <div>Manage</div>
          <div>Alerts</div>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navigation;
