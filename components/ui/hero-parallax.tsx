'use client';

import React from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import Link from 'next/link';
import { Button } from './button';

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: 'blur(10px)', transform: 'translateY(20%)', opacity: 0 },
  visible: { filter: 'blur(0)', transform: 'translateY(0)', opacity: 1 },
};

export const HeroParallax = ({
  products,
}: {
  products: {
    src: string;
    thumbnail: string;
    alt: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  // const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);
  return (
    <div
      ref={ref}
      className='h-[300vh] md:h-[250vh] py-10 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]'>
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=''>
        <motion.div className='flex flex-row-reverse space-x-reverse space-x-20 mb-20'>
          {firstRow.map(product => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.alt}
            />
          ))}
        </motion.div>
        <motion.div className='flex flex-row  mb-10 space-x-20 '>
          {secondRow.map(product => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.alt}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className='max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 z-20'>
      <h1 className='text-white text-4xl lg:text-7xl text-center font-bold'>
        Discover Your Dream <br className='hidden md:block' /> Home With Shikinimoni
      </h1>

      <p className='text-lg md:text-xl text-center mt-10 max-sm:px-6'>
        Welcome to Shikinimoni, where your property journey begins. <br className='hidden md:block' /> Explore our curated listings of stunning homes
        and find the perfect space for you.
      </p>

      <div className='my-24 max-sm:px-8 flex justify-center items-center gap-6 z-10'>
        <Button
          className='bg-purple-600 text-white hover:bg-purple-500 text-xl py-5 md:py-6  '
          asChild>
          <Link href={'/properties'}>Browse Properties</Link>
        </Button>
        <Button
          className='text-xl  py-5 md:py-6'
          asChild>
          <a href='#solutions'>Learn More</a>
        </Button>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    src: string;
    alt: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.src}
      className='group/product h-80 w-[30rem] relative flex-shrink-0'>
      <img
        src={product.thumbnail}
        height='600'
        width='600'
        className='object-cover object-left-top absolute h-full w-full inset-0'
        alt={product.alt}
      />
      <div className='absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none'></div>
    </motion.div>
  );
};
