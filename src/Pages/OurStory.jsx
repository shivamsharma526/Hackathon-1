import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const OurStory = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const gifRef = useRef(null);
  const promiseRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    gsap.fromTo(headingRef.current, {
      opacity: 0,
      y: 100,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
      },
    });

    gsap.fromTo(paragraphRef.current, {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 85%",
      },
    });

    gsap.fromTo(gifRef.current, {
      opacity: 0,
      y: 80,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: gifRef.current,
        start: "top 90%",
      },
    });

    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(card, {
        opacity: 0,
        y: 50,
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: i * 0.2,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
        },
      });
    });

    gsap.fromTo(promiseRef.current, {
      opacity: 0,
      x: -50,
    }, {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: promiseRef.current,
        start: "top 90%",
      },
    });

  }, []);

  return (
    <div ref={sectionRef} className='w-full bg-black px-6 md:px-12 lg:px-20 py-12'>

      {/* Heading */}
      <h1 ref={headingRef} className='text-white flex flex-wrap justify-center items-center text-4xl md:text-7xl lg:text-9xl uppercase text-center'>
        hope
        <span className='inline-block w-24 md:w-40 lg:w-60 aspect-video rounded-full overflow-hidden mx-4'>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ul0Byq7_tJ4?si=xaMXFAI3YoT2x_en&autoplay=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className='w-full h-full'
          ></iframe>
        </span>
        rise
      </h1>

      <h1 className='text-white text-center text-3xl md:text-6xl lg:text-8xl uppercase mt-6'>is support</h1>


      <h1 ref={paragraphRef} className='text-white text-center text-xl md:text-4xl lg:text-6xl font-bold capitalize mt-16'>
        We are Proudly and Passionately Obsessed <br className='hidden md:block' /> with Everything Organic!
      </h1>

      <p className='text-white text-sm md:text-base text-center uppercase leading-relaxed mt-6'>
        In our daily life routine, we sometimes forget to take stock of what we are eating and how we are eating.
        The choices we make with respect to food affect us and our family. <br className='hidden md:block' />
        So, we must consciously invest energy in finding the right kinds of foods to help build our immunity.
      </p>

      <div ref={gifRef} className='w-full md:w-[70%] lg:w-[50%] aspect-[3/1] mx-auto mt-10'>
        <img
          src="https://i.pinimg.com/originals/e8/83/3d/e8833d39e918c66ab4b60b6d48beac5b.gif"
          alt="Organic Movement"
          className='w-full h-full object-cover object-center rounded-xl'
        />
      </div>

      <h1 ref={promiseRef} className='text-white flex items-center text-lg md:text-2xl capitalize mt-20'>
        Our Promise
        <img src="https://media.tenor.com/K8fECej_KzYAAAAM/promise.gif" alt="Promise" className='w-10 h-6 ms-2 rounded-xl' />
      </h1>

  
      <div className='flex flex-wrap justify-center gap-6 mt-10'>
        {[
          {
            title: "Pure Ingredients",
            desc: "We source only the finest, chemical-free ingredients straight from trusted organic farms — no compromise, just nature.",
          },
          {
            title: "Farm to Table Freshness",
            desc: "Every product is harvested at peak ripeness and delivered with care — ensuring freshness you can taste in every bite.",
          },
          {
            title: "Sustainably Grown",
            desc: "Our food is grown with love for the earth. Eco-friendly methods that protect the planet and nourish your body.",
          },
        ].map((card, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className='w-full sm:w-[47%] lg:w-[30%] p-6 border border-white/20 rounded-xl bg-white/5 hover:bg-white/10 transition duration-300'
          >
            <h1 className='text-white uppercase font-bold text-xl mb-2'>{card.title}</h1>
            <p className='text-white text-sm leading-6'>{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurStory;
