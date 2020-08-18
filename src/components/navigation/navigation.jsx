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
      className='bg-yellow justify-content-around'
      activeKey='/data'
      //   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link as={Link} eventKey='/' to='/'>
          <div className='nav-icon'>
            <AccountIcon color='#777' width='25' height='25' />
          </div>
          <div>Manage</div>
          <div>Account</div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} eventKey='/data' to='/data'>
          <div className='nav-icon'>
            <DataIcon color='#777' width='25' height='25' />
          </div>
          <div>Manage</div>
          <div>Data</div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} eventKey='/' to='/'>
          <div className='nav-icon'>
            <TempleteIcon color='#777' width='25' height='25' />
          </div>
          <div>Manage</div>
          <div>Templetes</div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} eventKey='/' to='/'>
          <div className='nav-icon'>
            <ResultIcon color='#777' width='25' height='25' />
          </div>
          <div>Manage</div>
          <div>Results</div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} eventKey='/' to='/'>
          <div className='nav-icon'>
            <AlertIcon color='#777' width='25' height='25' />
          </div>
          <div>Manage</div>
          <div>Alerts</div>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navigation;
