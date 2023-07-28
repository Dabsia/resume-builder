import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {

    const [navActive, setNavActive] = useState('nav__menu')
    const [toggleBtn, setToggleBtn] = useState(false)

    const navToggle = () => {

        if (navActive === 'nav__menu') {
            setNavActive('nav__menu nav__active')
            setToggleBtn(true)
        }
        else {
            setNavActive('nav__menu')
            setToggleBtn(false)
        }

    }

    return (
        // <header> When u want to maintain the width throughout
        <nav>
            <Link className='brand' to='/' >Dabsia</Link>
            <ul className={navActive}>
                <li className='nav__item'><NavLink className='nav__link' to='/'>Home</NavLink></li>
                <li className='nav__item'><NavLink className='nav__link' to='/'>About</NavLink></li>
                <li className='nav__item'><NavLink className='nav__link' to='/'>Skills</NavLink></li>
                <li className='nav__item'><NavLink className='nav__link' to='/'>Portfolio</NavLink></li>
                <li className='nav__item'><NavLink className='nav__link' to='/'>Contact</NavLink></li>
            </ul>
            <div onClick={navToggle} className='nav__toggler'>
                {toggleBtn ? <i className="ri-close-fill icon"></i>
                    :
                    <i className="ri-menu-line icon "></i>
                }
            </div>
        </nav>
        // </header>
    )
}

export default NavBar
