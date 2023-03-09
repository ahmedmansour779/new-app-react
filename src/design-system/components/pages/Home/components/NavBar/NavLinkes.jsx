import React from 'react'
import { Link } from './style'

function NavLinkes({ navLink, navText, color }) {
    return (
        <>
            <Link style={{ color: color }} href={navLink}>{navText}</Link>
        </>
    )
}

export default NavLinkes