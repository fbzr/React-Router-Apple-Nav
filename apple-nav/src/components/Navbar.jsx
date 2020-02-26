import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ links }) => {
    return (
        <div className='navbar'>
            {links.map(link => 
                <Link key={link.value} to={`/${link.value}`}>
                    {link.title}
                </Link>
            )}
        </div>
    )
}

export default Navbar
