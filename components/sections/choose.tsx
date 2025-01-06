'use client';
import { motion } from 'framer-motion';

export const Choose = () => {
  return (
    <motion.section
      className='container my-80'
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.3 }}
      viewport={{ once: true }}>
      <div className='flex flex-col md:flex-row gap-10'>
        <div className='basis-[40%] md:basis-[90%] self-stretch '>
          <img
            src='/images/img-6.jpg'
            alt='property image'
            className='object-cover h-full'
          />
        </div>

        <div>
          <h2 className='section-header mb-10 leading-[10px]'>
            Why Choose Shikinimoni <br /> for Your Real Estate Needs?
          </h2>
          <p className='text-lg mb-8'>
            We connect you with expert agents who understand the market. <br /> Our extensive listings and flexible financing options make finding
            your perfect property easier than ever.
          </p>

          <div className='flex flex-col lg:flex-row lg:gap-6 gap-8'>
            <div>
              <h4 className='font-semibold text-2xl mb-3'>Expert Agents</h4>
              <p className='max-md:text-sm'>Our knowledgeable agents guide you through every step of the buying or renting process.</p>
            </div>

            <div>
              <h4 className='font-semibold text-2xl mb-3'>Extensive Listings</h4>
              <p className='max-md:text-sm'>Explore a wide variety of properties that suits all your needs and preferences.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
