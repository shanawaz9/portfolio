import './Nav.css';
import Logo from '../../Assets/Logo.svg'
import { Link } from "react-router-dom";
import React, { useState } from 'react';

function Nav() {
    const [projectActive, setProjectActive] = useState(true);
    const [aboutActive, setAboutActive] = useState(false);
    const [artActive, setArtActive] = useState(false);

    const projectHandleClick = () => {
        setProjectActive(true)
        setAboutActive(false)
        setArtActive(false)
    };

    const aboutHandleClick = () => {
        setProjectActive(false)
        setAboutActive(true)
        setArtActive(false)
    };

    

    const artHandleClick = () => {
        setProjectActive(false)
        setAboutActive(false)
        setArtActive(true)
    };

    return (
        <div className="Nav">
            <div className='LogoAndName'>
                <div classname="Logo">
                    <img src={Logo} Alt="loading.." width={81.58} height={83.54} />
                </div>
                <div className='nameDesig'>
                    <div className='name'>Shanawaz shaik</div>
                    <div className='designation'>UX DESIGNER</div>
                </div>
            </div>
            <div className='navMenu'>
                <div> <Link onClick={projectHandleClick} className={projectActive ? "ActiveLink" : "InActiveLink"} style={{ textDecoration: 'none' }} to="/">Projects</Link></div>
                <div><Link onClick={aboutHandleClick} className={aboutActive ? "ActiveLink" : "InActiveLink"} style={{ textDecoration: 'none' }} to="/About">About</Link></div>
                <div><Link onClick={artHandleClick} className={artActive ? "ActiveLink" : "InActiveLink"} style={{ textDecoration: 'none' }} to="/Art">Art</Link></div>
            </div>
        </div>
    );
}

export default Nav;

