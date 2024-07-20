import React, { useState, useEffect, useRef } from 'react';
import './MainContent.css';
import BackgroundImage from '../assets/rectangle-9.svg';
import Ellipse1 from '../assets/ellipse-1.svg';
//import Ellipse2 from '../assets/ellipse-2.svg';
import LearnMoreBtnBg from '../assets/rectangle-4-2.svg';

const MainContent = () => {
  const [activeButton, setActiveButton] = useState('');
  const cursorPosition = useRef({ x: 0, y: 0 });
  const ellipseRef = useRef(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorPosition.current = { x: e.clientX, y: e.clientY };
    };

    const updatePosition = () => {
      if (ellipseRef.current) {
        ellipseRef.current.style.left = `${cursorPosition.current.x}px`;
        ellipseRef.current.style.top = `${cursorPosition.current.y}px`;
      }
      requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="main-content" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <img ref={ellipseRef} src={Ellipse1} alt="Ellipse 1" className="ellipse-1" />
   
      <div className="text-group">
        <div className="heading">
          Empowering Lives Through Innovative <u>AI</u> Technologies.
        </div>
        <div className="sub-heading">
          Finding new horizons for visionaries to accelerate their innovation and progress.
        </div>
        <div className="actions">
          <div
            className={`service-button ${activeButton === 'services' ? 'active' : ''}`}
            style={{ backgroundImage: `url(${LearnMoreBtnBg})` }}
            onClick={() => handleButtonClick('services')}
          >
            <div className="button-text">Explore Our Services</div>
          </div>
          <div
            className={`learn-more-button ${activeButton === 'learnMore' ? 'active' : ''}`}
            style={{ backgroundImage: `url(${LearnMoreBtnBg})` }}
            onClick={() => handleButtonClick('learnMore')}
          >
            <div className="button-text">Learn more</div>
          </div>
        </div>
        <div className="scrolling-text">
         From Ideas to Software Solutions 💡✨ From Ideas to Software Solutions 🌟✨ From Ideas to Software Solutions 💡✨ From Ideas to Software Solutions 🌟✨ From Ideas to Software Solutions 
        </div>
      </div>
    </div>
  );
};

export default MainContent;
