import React from 'react'
import theme from '../../../../config'
import { Link } from './style'

function NavLinkes({ navLink, navText, active }) {
    return (
        <>
            <Link color={active ? theme.primary : ""} href={navLink}>{navText}</Link>
        </>
    )
}

export default NavLinkes