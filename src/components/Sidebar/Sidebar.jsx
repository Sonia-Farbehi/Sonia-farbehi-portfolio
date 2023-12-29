import React from 'react';
import { useState } from 'react'

import './Sidebar.scss';
import {Link, NavLink} from 'react-router-dom';
import LogoS from '../../assets/images/logo-new.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome,faUser,faEnvelope,faSuitcase,faBars,faClose} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);


    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt='logo'/>
                {/* <img className='sub-logo' src={LogoSubtitle} alt='slogo'/> */}
            </Link>
            {/* <nav>
                <NavLink 
                    exact="true"
                    activeclassname="active"
                    to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink 
                    activeclassname="active"
                    className="about-link"
                    to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="portfolio-link"
                    to="/portfolio">
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="contact-link"
                    to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav> */}
            <ul>
                <li >
                    <a 
                    href="mailto:sonia.farbehi76@gmail.com"
                    className='email-link'>
                        
                    sonia.farbehi76@gmail.com
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/sonia-farbehi"
                        target="_blank"
                        rel="noreferrer">
                        <FontAwesomeIcon
                        icon={faLinkedin}
                        color="#4d4d4e"
                        className="anchor-icon"/>
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/Sonia-Farbehi"
                        target="_blank"
                        rel="noreferrer">
                        <FontAwesomeIcon
                        icon={faGithub}
                        color="#4d4d4e"
                        className="anchor-icon"/>
                    </a>
                </li>
            </ul>
            {/* <FontAwesomeIcon 
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffd700"
                size="3x"
                className='hamburger-icon' /> */}

        </div>
    );
};

export default Sidebar;