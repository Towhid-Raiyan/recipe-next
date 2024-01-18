import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <nav className='flex justify-between items-center bg-slate-800 px-7 py-3'>
            <Link href={'/'} className='text-xl font-bold text-white'>Recipe Next</Link>
            <Link href={'/addRecipe'} className='text-white bg-green-600 hover:bg-green-700 px-3 py-2 text-xl font-semibold rounded-md'>Add Recipe</Link>
        </nav>
    );
};

export default NavBar;