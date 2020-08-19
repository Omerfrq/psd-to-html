import React from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
import './navigation.styles.css';
import { Nav } from 'react-bootstrap';

// Icons
import AccountIcon from '../../assets/svgs/Account.icon';
import DataIcon from '../../assets/svgs/Data.icon';
import TempleteIcon from '../../assets/svgs/Templete.icon';
import ResultIcon from '../../assets/svgs/Result.icon';
import AlertIcon from '../../assets/svgs/Alert.icon';

const Navigation = () => {
  const history = useHistory();

  const isLogin = history.location.pathname === '/login';
  return (
    <>
      {!isLogin && (
        <Nav
          className='navigation-menu bg-yellow justify-content-around'
          activeKey='/data'
          //   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link as={Link} to='/' className='py-3'>
              <div className='icon-box nav-icon-color'>
                <AccountIcon color='currentColor' height={25} />
              </div>
              <div>Manage</div>
              <div>Account</div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to='/data' className='py-3'>
              <div className='icon-box nav-icon-color'>
                <DataIcon color='currentColor' height={25} />
              </div>
              <div>Manage</div>
              <div>Data</div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to='/' className='py-3'>
              <div className='icon-box nav-icon-color'>
                <TempleteIcon color='currentColor' height={25} />
              </div>
              <div>Manage</div>
              <div>Templates</div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to='/' className='py-3'>
              <div className='icon-box nav-icon-color'>
                <ResultIcon color='currentColor' height={25} />
              </div>
              <div>Manage</div>
              <div>Results</div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to='/' className='py-3'>
              <div className='icon-box nav-icon-color'>
                <AlertIcon color='currentColor' height={25} />
              </div>
              <div>Manage</div>
              <div>Alerts</div>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      )}
    </>
  );
};

export default withRouter(Navigation);
