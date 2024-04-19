import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div className='flex justify-around  shadow-lg '>
            <h2 className='my-4 text-2xl text-[#1677ff] font-bold'>Logo</h2>
            <ul className='flex gap-6'>
                <li className=' my-4 text-lg '><Link className='hover:text-[#1677ff]' to={'/'}>Add Book</Link></li>
                <li className='my-4 text-lg'><Link className='hover:text-[#1677ff]' to={'/books'}>All Books</Link></li>
            </ul>
        </div>
    );
}

export default Nav;
