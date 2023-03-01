import React, { useEffect, useState } from 'react';
import ScrollTo from '../ScrollTo/ScrollTo';
import './style.scss';

const ScrollTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', scrollTop);
    return function cleanUp() {
      window.removeEventListener('scroll', scrollTop);
    };
  }, []);

  function scrollTop() {
    if (window.scrollY > 120) setShowTopBtn(true);
    else setShowTopBtn(false);
  }

  return (
    <>
      {showTopBtn && (
        <ScrollTo componentId="nav-bar" offset={0} scrollTop={true}>
          <button className="up-btn">^</button>
        </ScrollTo>
      )}
    </>
  );
};

export default ScrollTop;
