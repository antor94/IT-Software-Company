import React from 'react'
import logo from '../assets/images/solid.svg'
import { Link } from 'react-router'
import { IoToggle } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";




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
    <label className=' text-[16px] font-semibold font-main text-[#585C7B]'>Light</label>
    <IoToggle className=' text-[#6366F1] text-[70px] px-[16px]' />
    <label className=' text-[16px] font-semibold font-main text-[#585C7B]'>Dark</label>
</div>

{/* ------------ log in */}

<div className='w-[106px] border text-[14px] font-semibold font-ma text-[#6366F1]  border-[#6365f15a]'> <Link to={'/'} className='flex items-center gap-[8px] py-[9px]' ><FiLogOut />  Log in</Link></div>


            </div>
        </div>
    </nav>
    


    </>

  )
}

export default Navbar