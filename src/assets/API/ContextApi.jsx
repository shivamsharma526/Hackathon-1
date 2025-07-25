import React, { createContext, useContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const ContextApi = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : [];
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
const [cartOpen, setCartOpen] = useState(false);
const [menu, setmenu] = useState(false);
const [food, setfood] = useState([
  {
    id:1,
    image: 'https://images.unsplash.com/photo-1741515044901-58696421d24a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Fresh Organic Veggies',
    desc: 'Locally sourced green veggies full of nutrients.',
    price:500,
  },
  {
    id:2,
    image: 'https://images.unsplash.com/photo-1535869344117-a3cbf6f37466?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Seasonal Fruits',
    desc: 'Naturally sweet fruits with no added chemicals.',
    price:1000,
  },
  {
    id:3,
    image: 'https://images.unsplash.com/photo-1649361562904-316e772cf80a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Cold-Pressed Juices',
    desc: 'Fresh juices with no added sugar or preservatives.',
    price:1500,
  },
  {
    id:4,

    image: 'https://images.unsplash.com/photo-1741515044901-58696421d24a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Fresh Organic Veggies',
    desc: 'Locally sourced green veggies full of nutrients.',
    price:400,
  },
  {
    id:5,

    image: 'https://images.unsplash.com/photo-1535869344117-a3cbf6f37466?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Seasonal Fruits',
    desc: 'Naturally sweet fruits with no added chemicals.',
    price:900,
  },
  {
    id:6,
    image: 'https://images.unsplash.com/photo-1649361562904-316e772cf80a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Cold-Pressed Juices',
    desc: 'Fresh juices with no added sugar or preservatives.',
    price:1100,
  },
   {
    id:7,

    image: 'https://images.unsplash.com/photo-1741515044901-58696421d24a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Fresh Organic Veggies',
    desc: 'Locally sourced green veggies full of nutrients.',
    price:400,
  },
  {
    id:8,
    image: 'https://images.unsplash.com/photo-1535869344117-a3cbf6f37466?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Seasonal Fruits',
    desc: 'Naturally sweet fruits with no added chemicals.',
    price:800,
  },
  {
    id:9,

    image: 'https://images.unsplash.com/photo-1649361562904-316e772cf80a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Cold-Pressed Juices',
    desc: 'Fresh juices with no added sugar or preservatives.',
    price:2500,
  },
   {
    id:10,

    image: 'https://images.unsplash.com/photo-1741515044901-58696421d24a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Fresh Organic Veggies',
    desc: 'Locally sourced green veggies full of nutrients.',
    price:5000,
  },
  {
    id:11,
    image: 'https://images.unsplash.com/photo-1535869344117-a3cbf6f37466?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Seasonal Fruits',
    desc: 'Naturally sweet fruits with no added chemicals.',
    price:1200,
  },
  {
    id:12,
    image: 'https://images.unsplash.com/photo-1649361562904-316e772cf80a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Cold-Pressed Juices',
    desc: 'Fresh juices with no added sugar or preservatives.',
    price:50,
  },
])
const [cart, setcart] = useState([])
  return (
    <UserContext.Provider value={{ user, setUser ,cartOpen, setCartOpen ,cart, setcart , food , setfood ,menu,setmenu}}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextApi;

