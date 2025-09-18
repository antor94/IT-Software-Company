import React from 'react'
import logo from '../assets/images/solid.svg'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    
    <>


    <nav id='navbar'>
        <div className="container">
            <div id='navbar-row'>

                <Link to={'/'} ><img src={logo} alt="main-logo" /></Link>



            </div>
        </div>
    </nav>
    


    </>

  )
}

export default Navbar