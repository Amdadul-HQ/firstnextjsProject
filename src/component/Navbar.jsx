"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname()
    const router = useRouter()
    const links = [
        {
            title:"Home",
            path:"/"
        },
        {
            title:"About",
            path:"/about"
        },
        {
            title:"Blog",
            path:"/blog"
        },
        {
            title:"Service",
            path:"/service"
        },
        {
            title:"Contact",
            path:"/contact"
        }
    ]
    const handleLoginPage = () =>{
        router.push('/login')
    }
    return (
        <header className='bg-teal-400'>
            <nav className='container mx-auto py-5 flex justify-between items-center'>
                <h1 className='text-3xl'>Next js</h1>
                <ul className='flex items-center gap-x-14 text-xl font-medium'>
                    {
                        links.map((link)=><Link href={link.path} className={pathName === link.path && 'text-white'} key={link.path}>{link.title}</Link>)
                    }
                </ul>
                <button onClick={handleLoginPage} className='text-xl '>Login</button>
            </nav>
        </header>
    );
};

export default Navbar;