'use client';

import { navList } from '@/constants';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleOpen = () => {
    setIsOpen(() => !isOpen);
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-dark-300'>
      <div className='max-w-7xl mx-auto max-md:px-5'>
        <div className='flex items-center justify-between py-6 overflow-hidden'>
          <a href='/'>
            <img
              src='/images/logo.png'
              alt=''
              width={120}
              height={120}
            />
          </a>

          <button
            className='md:hidden block focus:outline-none z-10'
            onClick={handleOpen}>
            <MenuIcon />
          </button>

          <nav className='md:flex hidden'>
            <ul className='flex items-center gap-7'>
              {navList.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`hover:text-purple-500  ${pathname === item.href ? 'text-purple-500' : ''}`}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <nav
        className={`md:hidden absolute flex justify-end z-20 transition-all duration-500  bg-dark-300  w-full overflow-hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}>
        <ul className='flex flex-col relative items-center gap-7 z-20 py-6 px-8 ease-out overflow-hidden'>
          {navList.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={`hover:text-purple-500 ${pathname === item.href ? 'text-purple-500' : ''}`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
