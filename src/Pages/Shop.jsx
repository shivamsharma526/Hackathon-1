import React, { useContext } from 'react';
import FoodCard from '../Components/FoodCard';
import { UserContext } from '../assets/API/ContextApi';



const Shop = () => {
  const {user , food} = useContext(UserContext)
  return (
    <div className="bg-black min-h-screen py-10 ">
      <h1 className="text-9xl font-bold text-center text-white mb-10 uppercase">
        nice to meet {user.name?user.name:"youu"}
      </h1>
      <div className="flex flex-wrap justify-center">
        {food.map((item, index) => (
          <FoodCard
            key={index}
            id={item.id}
            image={item.image}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
