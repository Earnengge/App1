import React, { useState, useEffect } from 'react';
import './VerticalSlider.css';

const VerticalSlider = () => {
  const slides = [
    'Slide 1: Welcome to our website!',
    'Slide 2: Explore our amazing features.',
    'Slide 3: Join us today!',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slider-slide ${index === currentSlide ? 'active' : ''}`}
        >
          {slide}
        </div>
      ))}
    </div>
  );
};

export default VerticalSlider;
