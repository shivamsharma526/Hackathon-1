import React from 'react'
import { Router, Routes , Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Community from '../Pages/Community'
import ContactUs from '../Pages/ContactUS'
import OurStory from '../Pages/OurStory'
import Shop from '../Pages/Shop'
import Login from '../Components/Login'
const MainRoutes = () => {
  return (
    <>
  
<Routes>
<Route path='/' element={<Home/>}></Route>
 <Route path='/community' element={<Community/>}></Route>
<Route path='/contact-us' element={<ContactUs/>}></Route>
<Route path='/ourstory' element={<OurStory/>}></Route>
<Route path='/shop' element={<Shop/>}></Route>
<Route path='/login' element={<Login/>}></Route>

</Routes>
 
    </>
  )
}

export default MainRoutes