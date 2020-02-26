import React from 'react'
import { useParams } from 'react-router-dom';

const Subnav = ({ links }) => {
    const { category } = useParams();
    return (
        <div className='subnav'>
            { links.find(link => link.value === category)
                .subLinks.map(link => link)
            }
        </div>
    )
}

export default Subnav
