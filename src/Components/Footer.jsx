import React, { useEffect, useRef } from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef();
  const textRefs = useRef([]);

  useEffect(() => {
    gsap.from(textRefs.current, {
      x: (i) => (i % 2 === 0 ? -100 : 100), // zig-zag left-right
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom",
        toggleActions: "play none none none"
      }
    });
  }, []);

  return (
    <div ref={footerRef} className='w-full bg-black px-6 md:px-20 py-10 relative z-50 text-white'>
      <div className='flex flex-col md:flex-row justify-between gap-10'>
        {/* More Info Section */}
        <div>
          <h1 ref={el => textRefs.current[0] = el} className='text-lg md:text-xl uppercase text-white/50'>More info</h1>
          <h1 ref={el => textRefs.current[1] = el} className='text-lg md:text-xl uppercase mt-3'>Returns and Exchanges</h1>
          <h1 ref={el => textRefs.current[2] = el} className='text-lg md:text-xl uppercase mt-3'>Privacy Policy</h1>
          <h1 ref={el => textRefs.current[3] = el} className='text-lg md:text-xl uppercase mt-3'>General Terms and Conditions of Sale</h1>
        </div>

        {/* Social Media Section */}
        <div>
          <a ref={el => textRefs.current[4] = el} href="#" className='block text-lg md:text-xl'>Facebook</a>
          <a ref={el => textRefs.current[5] = el} href="#" className='block text-lg md:text-xl mt-3 uppercase'>Instagram</a>
          <a ref={el => textRefs.current[6] = el} href="#" className='block text-lg md:text-xl mt-3 uppercase'>X.com</a>
          <a ref={el => textRefs.current[7] = el} href="#" className='block text-lg md:text-xl mt-3 uppercase'>YouTube</a>
        </div>

        {/* Arrow Icons Section (No animation here, optional) */}
        <div className='flex flex-row md:flex-col gap-3'>
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className='w-10 h-10 border border-white/50 rounded flex justify-center items-center'>
              <IoIosArrowRoundForward className='text-3xl' style={{ transform: 'rotate(-50deg)' }} />
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom Line */}
      <div className='w-full h-px border-t border-white/50 mt-10'></div>
    </div>
  );
};

export default Footer;
