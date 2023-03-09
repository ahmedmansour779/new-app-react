import React from 'react';
import NavItems from './NavItems';
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
                        <NavItems />
                    </LinkWrapper>
                </NavbarContainer>
            </div>
        </NavbarWrapper>
    )
}

export default NavBar;