import React, { useEffect, useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactUS = () => {
  const headingRef = useRef(null);
  const formRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    gsap.from(headingRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
      },
    });

    gsap.from(formRef.current, {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 85%",
      },
    });

    gsap.from(animationRef.current, {
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: animationRef.current,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <div className="w-full bg-black text-white py-12 px-4 md:px-12">
      <h1 ref={headingRef} className="text-3xl md:text-5xl uppercase font-bold">
        contact our friendly team
      </h1>
      <p className="text-lg md:text-2xl capitalize  mt-4">
        let us know how we can help.
      </p>

      <div className="flex flex-col md:flex-row justify-between items-center mt-16 gap-10">
        <form
          ref={formRef}
          className="w-full md:w-[45%] space-y-6"
        >
          <h2 className="text-xl md:text-2xl capitalize pb-2">send a message</h2>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-1/2 border-b border-white bg-transparent outline-none placeholder-white py-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-1/2 border-b border-white bg-transparent outline-none placeholder-white py-2"
            />
          </div>
          <textarea
            placeholder="Message"
            className="w-full border-b border-white bg-transparent outline-none placeholder-white py-3 h-32 resize-none"
          />
          <button
            type="submit"
            className="bg-white text-black px-6 py-2 uppercase font-semibold hover:bg-gray-300 transition"
          >
            Submit
          </button>
        </form>

        {/* LOTTIE SECTION */}
        <div
          ref={animationRef}
          className="w-full md:w-[45%] max-w-md h-auto"
        >
          <DotLottieReact
            src="/Animation.lottie"
            loop
            autoplay
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
