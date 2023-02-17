import './Nav.css';
import Logo from '../../Assets/Logo.svg'
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import more from '../../Assets/more.jpg';

function Nav() {
    const [projectActive, setProjectActive] = useState(true);
    const [aboutActive, setAboutActive] = useState(false);
    const [artActive, setArtActive] = useState(false);
    const [isMobileScreen, setIsMobileScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
                    <Link onClick={projectHandleClick} className={projectActive ? "ActiveLink" : "InActiveLink"} style={{ textDecoration: 'none' }} to="/">
                        <img className="LogoImage" src={Logo} Alt="loading.." />
                    </Link>
                </div>
                <div className='nameDesig'>
                    <Link onClick={projectHandleClick} className={projectActive ? "ActiveLink" : "InActiveLink"} style={{ textDecoration: 'none' }} to="/">
                        <div className='name'>Shanawaz shaik</div>
                        <div className='designation'>UX DESIGNER</div>
                    </Link>
                </div>
            </div>
            
            <div className='navMenu' style={{ display: isMobileScreen ? 'none' : 'flex' }}>
                <div> <Link onClick={projectHandleClick} className={projectActive ? "ActiveLink" : "InActiveLink"} style={{ textDecoration: 'none' }} to="/">Projects</Link></div>
                <div><Link onClick={aboutHandleClick} className={aboutActive ? "ActiveLink" : "InActiveLink"} style={{ textDecoration: 'none' }} to="/About">About</Link></div>
                <div><Link onClick={artHandleClick} className={artActive ? "ActiveLink" : "InActiveLink"} style={{ textDecoration: 'none' }} to="/Art">Art</Link></div>
            </div>
            <div className="menuIcon" style={{ display: isMobileScreen ? 'flex' : 'none' }}>
                <img src={more} alt="Loading" width={25} height={25} />
            </div>
        </div >
    );
}

export default Nav;