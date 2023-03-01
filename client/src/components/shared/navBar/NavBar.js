import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import STATIC_TEXT from './staticText';
import ScrollTo from '../Utilities/ScrollTo/ScrollTo';
import { Box, Button } from '@mui/material';
import { getToken, decodeToken } from '../common/auth';
import useUserContext from '../../../contextApi/contexts/UserContext';
import { removeStorage } from '../../../config/storage';
import BasicMenu from './BasicMenu';
import './style.scss';

const NavBar = () => {
  const navigate = useNavigate();
  const [toggleOpen, setToggleOpen] = useState(false);
  const { token, setToken, userInfo, setUserInfo } = useUserContext();

  useEffect(() => {
    const userToken = getToken();
    setToken(userToken);
    const userInformation = decodeToken();
    setUserInfo(userInformation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handelToggle() {
    setToggleOpen(!toggleOpen);
  }

  function goToPath(path) {
    navigate(path);
    handelToggle();
  }

  function logOut() {
    removeStorage('token');
    setToken('');
    handelToggle();
    navigate('/');
  }

  let navItems = (
    <Button variant="contained" onClick={() => goToPath('login')}>
      {STATIC_TEXT.LoginBtn}
    </Button>
  );

  if (token) {
    navItems = (
      <>
        <Button variant="contained" onClick={logOut}>
          {STATIC_TEXT.logout}
        </Button>
      </>
    );
  }

  return (
    <nav id="nav-bar" className="navBar-container ">
      <Box className="logo">
        <ScrollTo setToggleOpen={setToggleOpen} componentId={'home'}>
          {STATIC_TEXT.logo}
        </ScrollTo>
      </Box>
      <div className={`navBar-item ${!toggleOpen && 'open'} `}>
        {toggleOpen && (
          <span
            className="x-button nav-item"
            onClick={() => {
              handelToggle();
            }}
          >
            &#10006;
          </span>
        )}
        <ScrollTo setToggleOpen={setToggleOpen} componentId={'home'}>
          {STATIC_TEXT.home}
        </ScrollTo>
        <ScrollTo setToggleOpen={setToggleOpen} componentId={'sport-section'}>
          {STATIC_TEXT.aboutUS}
        </ScrollTo>
        <ScrollTo setToggleOpen={setToggleOpen} componentId={'contact-us'}>
          {STATIC_TEXT.contactUs}
        </ScrollTo>
        {token && (
          <BasicMenu goToPath={goToPath} userInfo={userInfo} token={token} />
        )}
        {navItems}
      </div>
      <div onClick={handelToggle} className="nav-toggle">
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default NavBar;
