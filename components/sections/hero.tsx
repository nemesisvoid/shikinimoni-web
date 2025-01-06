'use client';

import { propertyImages } from '@/constants';
import { HeroParallax } from '../ui/hero-parallax';
import { SparklesCore } from '../ui/sparkles';

export const Hero = () => {
  return (
    <section className='overflow-hidden'>
      <HeroParallax products={propertyImages} />
      <div className='w-full absolute inset-0 h-[100vh] md:h-[150vh] -z-10'>
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
