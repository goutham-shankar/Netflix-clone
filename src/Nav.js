import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import "./Nav.css"
function Nav() {
   
    const Navigate = useNavigate();
    const [show, handleshow] = useState(false);
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleshow(true);
        } else {
            handleshow(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className='nav__contents'>

                <img className='nav_logo' onClick={()=>Navigate({ pathname: '/' }) } src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" alt='netflixlogo'/>
                <img className='nav_avathar'onClick={()=>Navigate({ pathname: '/profile' }) } src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt='avathar' />

            </div>
        </div>
    )
}

export default Nav
