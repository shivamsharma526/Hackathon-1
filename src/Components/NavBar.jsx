import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { UserContext } from '../assets/API/ContextApi';
import { CiMenuBurger } from "react-icons/ci";

const NavBar = () => {
  const {user , cartOpen , setCartOpen ,cart,setmenu} = useContext(UserContext)
  return (
    <div className='relative  text-white uppercase p-5 flex items-center justify-between gap-10 w-full z-30 bg-black'>
        <NavLink to="/" className='text-2xl font-bold tracking-tighter'>Rosier</NavLink>
        <ul className='hidden lg:flex gap-4 flex-1 '>
          
<NavLink to="/"   className={({ isActive }) =>
    ` relative text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px]  tracking-tighter after:bg-[#B7FF2B] after:transition-all after:duration-300 ${
      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
    }`
  }>home</NavLink>       
<NavLink
  to="/ourstory"
  className={({ isActive }) =>
    `relative text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] tracking-tighter after:bg-[#B7FF2B] after:transition-all after:duration-300 ${
      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
    }`
  }
>
  our story
</NavLink>
            <NavLink to="/shop" 
  className={({ isActive }) =>
    `relative text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] tracking-tighter after:bg-[#B7FF2B] after:transition-all after:duration-300 ${
      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
    }`
  }>shop</NavLink>
            <NavLink to="/community"  className={({ isActive }) =>
    `relative text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] tracking-tighter after:bg-[#B7FF2B] after:transition-all after:duration-300 ${
      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
    }`
  }>community</NavLink>
            <NavLink to="/contact-us"  className={({ isActive }) =>
    `relative text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] tracking-tighter after:bg-[#B7FF2B] after:transition-all after:duration-300 ${
      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
    }`
  }>contact us</NavLink>
        </ul>
        <div className='flex items-center gap-5'>

<div className='bg-[#B7FF2B] px-5 h-15 rounded-4xl flex items-center text-black font-bold justify-center'>
        {user.name?"welcome "+user.name:  <NavLink to={'/login'} className='scale-y-150 text-2xl leading-0 tracking-tighter'>let's get start</NavLink>
}
</div>
<div className='bg-[#B7FF2B] w-[50px] h-[50px] rounded-4xl flex items-center text-black font-bold justify-center text-2xl relative'>
<button onClick={() => setCartOpen(!cartOpen)} className="relative">
      <CiShoppingCart />
     
      </button>
<p className='absolute top-0 right-1 text-sm w-5 h-5  rounded-full text-center'>{cart ? (cart.length > 10 ? "10" : cart.length) : "0"}</p>
</div>
<div className='text-2xl'>
<button  onClick={() => setmenu(!cartOpen)} className="relative lg:hidden">
  <CiMenuBurger />
     
      </button>
</div>
</div>
    </div>
  )
}

export default NavBar