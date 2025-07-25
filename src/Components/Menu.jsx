import { useContext } from 'react';
import { UserContext } from '../assets/API/ContextApi';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const { menu, setmenu } = useContext(UserContext);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black shadow-lg z-50 transition-transform duration-300 ease-in-out ${
        menu ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-semibold text-white">menu</h2>
        <button className='text-white' onClick={() => setmenu(false)}>✖</button>
      </div>
      
     <ul className=' flex flex-col md:text-9xl uppercase'>
          
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
      
    </div>
  );
};

export default Menu;
