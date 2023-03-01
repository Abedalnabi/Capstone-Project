import React from 'react';
import { useNavigate } from 'react-router-dom';

const ScrollTo = ({ componentId, offset, scrollType, children, setToggleOpen, scrollTop = false }) => {
  const navigate = useNavigate();

  const scrollTo = async (e) => {
    e.preventDefault();
    if (window.location.pathname !== '/' && !scrollTop) await navigate('/');
    setTimeout(() => {
      if (setToggleOpen) setToggleOpen(false);
      const offSet = offset || -64;
      const selectedComponent = document.getElementById(componentId);
      const scrollOptions = {
        left: 0,
        top: selectedComponent.offsetTop + offSet,
        behavior: scrollType || 'smooth',
      };
      window.scrollTo(scrollOptions);
    }, 0);
  };

  return <span onClick={scrollTo}>{children}</span>;
};

export default ScrollTo;
