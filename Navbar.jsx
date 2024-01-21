import React from 'react'
import "./Navbar.css"
// import classes from './Nabar.module.cc'
import Logo from './Logo';
import Search from './Search';
// import {Link} from 'react-router-dom'
const Navbar = () => {
  // nav-link ki css ko change kar k use set kar dena baaki to thik hai
  return (
    <div >
            <div>
            {/* <Link className="nav-link" to="/">PaymentPage</Link> */}
            {/* <Link className="nav-link" to="/">Home</Link> */}
            <Logo/>
            <Search/>
            </div>
        </div>
  )
}

export default Navbar;
