import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import style from './HeroSection.module.css';

const HeroSection = () => {
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    );

    gsap.fromTo(
      paraRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className={style.HeroSection}>
      <h1 ref={headingRef} className={style.heading}>
        let's organic
      </h1>
      <p ref={paraRef} className={style.para}>
        "100% certified organic fruits, vegetables, grains, and superfoods sourced directly from trusted
        <br className="hidden md:block" />
        Indian farms. No chemicals. No compromise — just real, wholesome nutrition for your family."
      </p>
    </div>
  );
};

export default HeroSection;
