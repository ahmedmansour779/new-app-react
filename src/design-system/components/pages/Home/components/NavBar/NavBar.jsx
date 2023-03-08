import React from 'react';
import links from './Linkes';
import NavLinkes from './NavLinkes';
import { Event, LinkWrapper, NavbarContainer, NavbarTitle, NavbarWrapper } from './style';

function NavBar() {
    return (
        <NavbarWrapper>
            <div className='container'>
                <NavbarContainer>
                    <div>
                        <NavbarTitle>
                            New <Event>Event</Event>
                        </NavbarTitle>
                    </div>
                    <LinkWrapper>
                        {links.map((link, index) => {
                            return (
                                <NavLinkes
                                    active={link.active}
                                    navLink={link.navLink}
                                    navText={link.navText}
                                    key={index}
                                />
                            )
                        })}
                    </LinkWrapper>
                </NavbarContainer>
            </div>
        </NavbarWrapper>
    )
}

export default NavBar;