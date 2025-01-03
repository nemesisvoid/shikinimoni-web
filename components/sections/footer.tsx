'use client';

import { navList } from '@/constants';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='border-t border-gray-600 mt-40 bg-dark-100'>
      <div className='container'>
        <div className='flex items-center justify-between py-12 max-sm:gap-8 max-sm:flex-col max-sm:items-start border-b border-gray-600'>
          <div>
            <img
              src='/images/logo.png'
              alt='company-logo'
              width={150}
              height={150}
            />
          </div>

          <nav className='flex items-center gap-7 flex-wrap '>
            {navList.map((nav, index) => (
              <Link
                className='underline hover:no-underline duration-500 transition-all'
                href={nav.href}
                key={index}>
                {nav.title}
              </Link>
            ))}
          </nav>

          <div className='flex items-center gap-4'>
            <div>
              <img
                src='/social-icons/whatsapp.svg'
                width={30}
                height={30}
                alt='whatsapp icon'
              />
            </div>

            <div>
              <img
                src='/social-icons/insta.svg'
                width={30}
                height={30}
                className='text-white'
                alt='instagram icon'
              />
            </div>
          </div>
        </div>
      </div>
      <div className=' py-4'>
        <p className='text-white text-center'>&copy; {new Date().getFullYear()} Shikinimoni. All rights reserved.</p>
      </div>
    </footer>
  );
};
