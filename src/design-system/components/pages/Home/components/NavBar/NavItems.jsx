import React from 'react';
import { useLocation } from 'react-router-dom';
import theme from '../../../../config';
import links from './Linkes';
import NavLinkes from './NavLinkes';

export default function NavItems() {
    const items = links();
    const route = useLocation();
    return (
        items.map((link, index) => {
            return (
                <NavLinkes
                    color={route.pathname === link.navLink ? theme.primary : ""}
                    active={link.active}
                    navLink={link.navLink}
                    navText={link.navText}
                    key={index}
                />
            )
        })
    )
}