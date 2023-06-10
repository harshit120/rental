import React from 'react'
import Logo from "../images/logo/logo.png";
import { NavLink,Link } from 'react-router-dom';
import About from '../pages/About'
import { hover } from '@testing-library/user-event/dist/hover';
const Navbar = () => {
// function nsv(){
//   <About/>
// }
  return (
    <div className='flex flex-row justify-between items-center mx-20 py-7 relative z-50 '>
        <div>
            <img src={Logo} alt="" className='w-36'/>
        </div>
        <div className='flex flex-row gap-6 font-semibold text-xl'>
<NavLink className="hover:-translate-y-2 " to="/" >Home</NavLink>
<NavLink to="/about"   >About</NavLink>
<NavLink to="/team" >Team</NavLink>
<NavLink to="/contactt" >contact</NavLink>
<NavLink to="/testi" >Testimonial</NavLink>
<NavLink to="/" >Home</NavLink>



        </div>
        <div className=' flex flex-row gap-5'>
            <button className=''>login</button>
            <button className=' py-2 px-3 bg-orange-600 rounded-md text-white'>Register</button>

        </div>
    </div>
  )
}

export default Navbar