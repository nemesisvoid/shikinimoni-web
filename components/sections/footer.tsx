'use client';

import { navList } from '@/constants';
import Link from 'next/link';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

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
            <a href=''>
              <FaWhatsapp size={30} />
            </a>

            <a href='https://www.instagram.com/shikinimonidotcom/'>
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      </div>
      <div className=' py-4'>
        <p className='text-white text-center'>&copy; {new Date().getFullYear()} Shikinimoni. All rights reserved.</p>
      </div>
    </footer>
  );
};
