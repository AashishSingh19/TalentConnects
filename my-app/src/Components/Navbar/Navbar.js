import React, { useState } from 'react';
import smallLogo from '../../Assets/small-logo.png';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';

export const Navbar = () => {
    const links = [
        { name: 'About Us', link: '/' },
        { name: 'Products', link: '/' },
        { name: 'Find Salaries', link: '/' },
        { name: 'Training', link: '/' },
        { name: 'Employer', link: '/' },
        { name: 'Jobseeker', link: '/' },
    ];

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-white">
                <div className="flex items-center gap-1 cursor-pointer text-2x1">
                    <img src={smallLogo} alt="Small Logo" />
                </div>

                <div onClick={() => setIsOpen(!isOpen)} className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden">
                    {isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
                </div>

                <ul className={`md:flex md:pl-9 pl-0 md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto transition-all ${isOpen ? 'bg-white top-12' : 'bg-transparent top-[-490px]'}`}>
                    {links.map((link, index) => (
                        <li key={index} className="font semi-bold my-10 md:my-0 md:ml-8">
                            <a href={link.link}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
