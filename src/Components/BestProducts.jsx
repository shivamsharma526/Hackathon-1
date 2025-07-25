import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const BestProducts = () => {
  const box = useRef(null);
  const itemsRef = useRef([]);
  const cardRef = useRef([]);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useGSAP(() => {
    itemsRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 100, rotate: index % 2 === 0 ? 5 : -5 },
        {
          opacity: 1,
          rotate: 0,
          duration: 1,
          delay: index * 0.3,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const products = [
    'wheat aata',
    'khapli aata',
    'stone pressed oils',
    'puja essential',
    'build your own box',
    'essentials pack',
  ];

  const handleMouseMove = (e, index) => {
    const rect = itemsRef.current[index].getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setHoveredIndex(index);

    gsap.to(cardRef.current[index], {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (index) => {
    setHoveredIndex(null);
    gsap.to(cardRef.current[index], {
      scale: 0,
      duration: 0.3,
      ease: 'power2.in',
    });
  };

  return (
    <div
      ref={box}
      className="flex flex-col bg-black px-4 md:px-10 lg:px-20 py-20 relative z-10"
    >
      <h1 className="text-lg md:text-xl lg:text-2xl font-bold tracking-tighter uppercase text-[#B23738] mb-10">
        Popular Products
      </h1>

      <div className="text-white uppercase text-2xl md:text-4xl lg:text-5xl font-extrabold w-full">
        <div className="w-full flex flex-col gap-20">
          {products.map((item, i) => (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseLeave={() => handleMouseLeave(i)}
              className="border-b border-white/10 opacity-0  transform relative scale-y-200"
              style={{ letterSpacing: '2px' }}
            >
              <p className="z-20 relative">{item}</p>

              <div
                ref={(el) => (cardRef.current[i] = el)}
                className="w-24 md:w-36 lg:w-40 h-12 md:h-16 lg:h-20  absolute rounded-2xl pointer-events-none z-10 overflow-hidden"
                style={{
                  top: mousePos.y,
                  left: mousePos.x,
                  transform: 'translate(-50%, -50%) scale(0)',
                }}
                

              >
<img src="https://www.rosierfoods.com/cdn/shop/files/Bestseller.jpg?v=1743589042&width=713" alt="" className='w-full h-full object-cover object-center ' />

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestProducts;
