import React from 'react';
import STATIC_TEXT from './staticText';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useUserContext from '../../../../../contextApi/contexts/UserContext';
import './style.scss';

const HomeHeader = () => {
  const { token } = useUserContext();
  const navigate = useNavigate();
  
  return (
    <header id="home" className="home-header-container" style={{ maxHeight: '800px' }}>
      <div className="quote-container">
        <p className="quote">{STATIC_TEXT.homeHeaderComponent.quote}</p>
        <p className="quote-name">
          {!token ? (
            <Button onClick={() => navigate('registerWay')} variant="contained" size="large">
              {STATIC_TEXT.homeHeaderComponent.joinNow}
            </Button>
          ) : (
            ''
          )}
        </p>
      </div>
    </header>
  );
};

export default HomeHeader;
