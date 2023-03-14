import React from 'react';
import NavItems from './NavItems';
import { Event, LinkWrapper, NavbarContainer, NavbarTitle, NavbarWrapper } from './style';

function NavBar() {
    return (
        <NavbarWrapper className='nav-bar' id='NavBar'>
            <div className='container-main-project'>
                <NavbarContainer>
                    <div>
                        <NavbarTitle>
                            New <Event>Event</Event>
                        </NavbarTitle>
                    </div>
                    <LinkWrapper>
                        <NavItems />
                    </LinkWrapper>
                </NavbarContainer>
            </div>
        </NavbarWrapper>
    )
}

export default NavBar;