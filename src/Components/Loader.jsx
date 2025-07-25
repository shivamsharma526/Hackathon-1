import React from 'react'
import { gsap } from "gsap";
import { useEffect, useRef ,useState} from "react";
import loader from '../assets/gif-loader.gif';
const Loader = () => {
    const boxesRef = useRef([]);
      const [count, setCount] = useState(0);
      const counterRef = useRef(null);
      const [isLoaded, setIsLoaded] = useState(false);
 
  

    const anim = () =>{
        gsap.fromTo(
            boxesRef.current,
            { x: 0, opacity: 1 },
            {
                x: 0,
                opacity: 0,
                scale:0.7,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
            }
        );
    }

    const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll(".letter");

    gsap.fromTo(
      letters,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);


    useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoaded(true);
          anim()
          return 100;
        }
        return prev + 1;
      });
    }, 40);
  }, []);



  return (
    <div
        className='w-screen h-screen fixed'
        >
         {!isLoaded &&<div className="counter absolute right-0 bottom-0 font-bold text-4xl z-30 text-white"  ref={counterRef}>{count}%</div>}
          <div className='flex'>
              {[...Array(5)].map((_, i) => (
            <div
              key={i}
              ref={(el) => (boxesRef.current[i] = el)}
              className="h-screen w-[20%] bg-black border-1"
            />
          ))}
          </div>
      
   {!isLoaded && (
  <div className="z-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 absolute">
    <img
      src={loader}
      alt="miss"
      className="w-full h-full object-cover object-center"
    />
    <p ref={textRef} className="text-white text-3xl font-bold text-center leading-0">
      {"loading...".split("").map((char, index) => (
        <span key={index} className="letter">
          {char}
        </span>
      ))}
    </p>
  </div>
)}
        </div>
  )
}

export default Loader