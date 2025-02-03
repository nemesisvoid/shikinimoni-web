'use client';
import { propertySolutions } from '@/constants';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { TextGenerateEffect } from '../ui/text-generate-effect';

export const Solutions = () => {
  const [isSelected, setIsSelected] = useState(0);

  return (
    <section
      className='container my-80 relative overflow-hidden'
      id='solutions'>
      <h2 className='section-header mb-10'>
        <TextGenerateEffect
          className='section-header mb-14 inline-block'
          words='Your Gateway to Property Solutions'
          duration={1.5}
        />
      </h2>
      <img
        src='/images/star.png'
        alt='property image'
        className='absolute -top-10 z-10'
      />
      <div className='flex flex-col md:flex-row justify-between gap-10'>
        <motion.div
          className='lg:flex-1'
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <p className='text-lg'>
            Whether you're a first-time buyer, a seasoned investor, or simply looking for a new home, you are right on time. Explore our luxury
            properties, commercial spaces, and affordable housing solutions, and discover why Shikinimoni is the trusted name in Nigerian real estate.
          </p>

          <div className='flex flex-col gap-6 mt-8'>
            {propertySolutions.map(({ heading, text }, index) => (
              <div
                className={`${cn(
                  'cursor-pointer border-b border-b-gray-500 text-gray-500 py-4 transition-colors duration-300',
                  isSelected === index && 'text-white border-b-white duration-300'
                )}`}
                key={index}
                onClick={() => setIsSelected(index)}>
                <h3 className='text-2xl mb-3'>{heading}</h3>
                <p className=''>{text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='w-full lg:w-1/2 relative h-72 md:h-auto'>
          <div className='relative h-full w-full overflow-hidden'>
            {propertySolutions.map(({ src, alt }, index) => (
              <img
                key={index}
                src={src}
                alt={alt}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                  isSelected === index ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
