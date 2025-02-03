'use client';

import { SparklesCore } from '../ui/sparkles';
import { Button } from '../ui/button';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className='relative overflow-hidden bg-[url("/images/img-5.jpg")] bg-cover bg-center bg-no-repeat h-screen '>
      <div className='absolute inset-0 bg-black opacity-80'></div>

      <div className='z-20 absolute mt-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full'>
        <h1 className='text-white text-4xl lg:text-7xl text-center font-bold'>
          Discover Your Dream <br className='hidden md:block' /> Home With Shikinimoni
        </h1>

        <p className='text-xl text-gray-200 md:text-2xl text-center mt-6 max-sm:px-6'>
          Explore our curated listings of stunning homes and find the perfect space for you.
        </p>

        <div className='my-24 max-sm:px-8 flex justify-center  sm:flex-row items-center gap-8 sm:gap-10 z-10 flex-col'>
          <Button
            className='bg-purple-600 text-white hover:bg-purple-500 text-xl py-5 md:py-6  '
            asChild>
            <Link href={'/properties/sale'}>Properties For Sale</Link>
          </Button>
          <Button
            className='text-xl  py-5 md:py-6'
            asChild>
            <a href='/properties/rent'>Properties For Rent</a>
          </Button>
        </div>
      </div>
      {/* <HeroParallax products={propertyImages} /> */}
      <div className='w-full absolute inset-0 h-screen z-10'>
        <SparklesCore
          id='tsparticlesfullpage'
          background='transparent'
          minSize={1}
          maxSize={1.5}
          particleDensity={50}
          className='w-full h-full'
          particleColor='#FFFFFF'
        />
      </div>
    </section>
  );
};
