import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Video = () => {
  const topRef = useRef(null);
  const centerRef = useRef(null);
  const bottomRef = useRef(null);

useEffect(() => {
  const elements = [topRef.current, centerRef.current, bottomRef.current];

  const values = ["-100%", "-100%", "-100%"]; 

  elements.forEach((elem, index) => {
    gsap.from(elem, {
      x: values[index],
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: elem,
        start: "top 90%",
      }
    });
  });
}, []);


  return (
    <div className='w-full h-[110vh] md:min-h-[200vh] bg-black relative px-10 md:px-20 py-10'>
      <h1 className='text-[#B23738] text-xl md:text-3xl font-bold tracking-tighter uppercase mb-5 text-center mt-5'>
        New in the world of Rosier
      </h1>

 
      <div
        ref={topRef}
        className='w-full md:w-[50%] h-[60vw] md:h-[30vw]  absolute right-0'
      >
        <iframe
          className='w-full h-full rounded-xl'
          src="https://www.youtube.com/embed/xQyGAInjAR0?autoplay=1&mute=1&controls=0&loop=1&playlist=xQyGAInjAR0"
          title="Video 1"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>


      <div
        ref={centerRef}
        className='w-full md:w-[50%] h-[60vw] md:h-[30vw] absolute md:top-[37vw] top-[100vw] left-0 md:left-1/2 md:-translate-x-1/2 '
      >
        <iframe
          className='w-full h-full rounded-xl'
          src="https://www.youtube.com/embed/8bHRcvI2EqM?autoplay=1&mute=1&controls=0&loop=1&playlist=8bHRcvI2EqM"
          title="Video 2"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

 
      <div
        ref={bottomRef}
        className='w-full md:w-[50%] h-[60vw] md:h-[30vw] absolute top-[160vw] left-0 md:top-[67vw] md:left-5 '
      >
        <iframe
          className='w-full h-full rounded-xl'
          src="https://www.youtube.com/embed/-QdAPzgPo0A?autoplay=1&mute=1&controls=0&loop=1&playlist=-QdAPzgPo0A"
          title="Video 3"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
