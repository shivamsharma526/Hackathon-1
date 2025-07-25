import React, { useContext, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { UserContext } from '../assets/API/ContextApi';
import { useNavigate } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

const FoodCard = ({ image, title, desc ,id}) => {
  const {user , cart , setcart , food} = useContext(UserContext)
  const cardRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <div 
      ref={cardRef}
      className=" rounded-2xl shadow-md p-1 w-[300px] m-2 hover:shadow-xl transition-all"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-[180px] object-containt rounded-xl"
      />
      <h2 className="text-xl font-semibold text-white mt-3">{title}</h2>
      <p className="text-white text-sm mt-1">{desc}</p>
      <div className="flex justify-between mt-4">
      <button
  onClick={() => {
    if (user && user.name) {
        const selectedFood = food.find((item) => item.id === id);
       if (selectedFood) {
      setcart([...cart, selectedFood]);
    }
    } else {
     navigate("/login");
     
    }
  }}
  className="bg-white text-black px-4 py-1 rounded-full text-sm hover:bg-white/50 transition-all focus:scale-90"
>
  Add to Cart
</button>
        <button className="text-white border border-white/20 px-4 py-1 rounded-full text-sm  transition-all focus:scale-90">
          View Details
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
