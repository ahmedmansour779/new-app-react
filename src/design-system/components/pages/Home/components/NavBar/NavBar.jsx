import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import NavItems from "./NavItems";
import { Button, Event, LinkWrapper, NavbarContainer, NavbarTitle, NavbarWrapper } from './style';

function NavBar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };
    return (
        <NavbarWrapper className='nav-bar' id='NavBar'>
            <div className='container-main-project'>
                <NavbarContainer>
                    <NavbarTitle>
                        <Link to={"/"}>
                            New <Event>Event</Event>
                        </Link>
                    </NavbarTitle>
                    <LinkWrapper className='navbar-content' ref={navRef}>
                        <NavItems />
                        <Button className='nav-btn nav-close-btn' onClick={showNavbar} >
                            <FontAwesomeIcon icon={faClose} />
                        </Button>
                    </LinkWrapper>
                    <Button className='nav-btn' onClick={showNavbar} >
                        <FontAwesomeIcon icon={faBars} />
                    </Button>
                </NavbarContainer>

            </div>
        </NavbarWrapper>
    )
}

export default NavBar;