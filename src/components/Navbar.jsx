import React from 'react'
import logo from '../assets/images/solid.svg'
import { Link } from 'react-router'
import { IoToggle } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";



const Navbar = () => {
  return (
    
    <>


    <nav id='navbar' className='py-[16px]'>
        <div className="container">
            <div id='navbar-row'>
{/* ---------- main-logo */}
                <Link to={'/'} ><img src={logo} alt="main-logo" /></Link>
{/* ------------ nav-items */}
<div>
    <ul className='flex items-center gap-[24px]'>
        <li className='w-[86px]'><Link to={'/'} className='text-[16px] flex items-center gap-[8px] font-semibold font-f text-[#3E4265]'  >Services <MdOutlineKeyboardArrowDown /></Link></li>
        <li className='w-[122px] flex gap-[8px]'><Link to={'/'} className='text-[16px] flex items-center gap-[8px] font-semibold font- text-[#3E4265]'  >Case Studies <MdOutlineKeyboardArrowDown /></Link></li>
        <li><Link to={'/'}  className='text-[16px] font-semibold font-ma text-[#3E4265]' >About</Link></li>
        <li><Link to={'/'} className='text-[16px] font-semibold font-ma text-[#3E4265]'  >News</Link></li>
        <li><Link to={'/'} className='text-[16px] font-semibold font-ma text-[#3E4265]'  >Contact</Link></li>
    </ul>
</div>
{/* ---------- toggle button */}
<div className='flex items-center'>
    <label className=''>Light</label>
    <IoToggle className=' text-[#6366F1] w-[46px] h-[24px] px-[16px]' />
    <label>Dark</label>
</div>

{/* ------------  */}


            </div>
        </div>
    </nav>
    


    </>

  )
}

export default Navbar