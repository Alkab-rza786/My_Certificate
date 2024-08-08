import React, { useRef, useState } from 'react'
import './Navbar.css'
import { MdOutlineMenu } from "react-icons/md";
import { RiCloseLargeLine } from "react-icons/ri";
import logo from '../../assests/logo_main.png'


function Navbar() {

    const menuRef = useRef(null);
    const [icon, setIcon] = useState(true)

    const openMenu = () => {
        menuRef.current.style.top = '40px';
        setIcon(false)
    }

    const closeMenu = () => {
        menuRef.current.style.top = '-500px'
        setIcon(true)
    }



    return (
        <div className='navbar'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="nav-list  "  >
                <ul ref={menuRef} >

                    <a href="#home" onClick={closeMenu} ><li>Home</li></a>
                    <a href="#service" onClick={closeMenu} ><li>Services</li></a>
                    <a href="#pricing" onClick={closeMenu} > <li>Pricing</li></a>
                    <a href="#about" onClick={closeMenu} > <li>About us</li></a>
                    <a href="#contact" onClick={closeMenu}  > <li>Contact</li></a>
                </ul>
            </div>
            <div className="nav-btn">
                <button>Sign Up</button>
            </div>
            <div className="menu" >
                {icon ? <div className="open-icon" onClick={openMenu} >   <MdOutlineMenu /></div> :
                    <div className="close-icon" onClick={closeMenu} > <RiCloseLargeLine /></div>
                }
            </div>

        </div>
    )
}

export default Navbar
