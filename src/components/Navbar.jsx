import React from 'react'
import logo from '../assets/images/solid.svg'
import { Link } from 'react-router'
import { IoToggle } from "react-icons/io5";


const Navbar = () => {
  return (
    
    <>


    <nav id='navbar'>
        <div className="container">
            <div id='navbar-row'>
{/* ---------- main-logo */}
                <Link to={'/'} ><img src={logo} alt="main-logo" /></Link>
{/* ------------ nav-items */}
<div>
    <ul>
        <li><Link to={'/'} >Services</Link></li>
        <li><Link to={'/'} >Case Studies</Link></li>
        <li><Link to={'/'} >About</Link></li>
        <li><Link to={'/'} >News</Link></li>
        <li><Link to={'/'} >Contact</Link></li>
    </ul>
</div>
{/* ---------- toggle button */}


            </div>
        </div>
    </nav>
    


    </>

  )
}

export default Navbar