import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ links }) => {
    return (
        <div>
            {links.map((link, i) => 
                <Link to={`/${link.value}`}>
                    {link.title}
                </Link>
            )}
        </div>
    )
}

export default Navbar
