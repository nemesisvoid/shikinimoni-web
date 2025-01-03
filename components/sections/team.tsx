'use client';
import { motion } from 'framer-motion';

export const Team = () => {
  return (
    <motion.section
      className='my-52'
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 1 }}
      initial={{ opacity: 0, y: 100 }}>
      <div className='container'>
        <div>
          <h1 className='section-header mb-5'>
            The Team Behind <span className='text-purple-500'>Shikinimoni</span>
          </h1>
          <p className='text-lg'>We are the founders and executives of Shikinimoni</p>
        </div>

        <div className='flex flex-col sm:flex-row justify-evenly max-md:gap-10 mt-20'>
          <div className='p-6 border border-dark-300 rounded-xl relative'>
            <div className='mb-5'>
              <img
                src='/images/ceo.png'
                alt='team-image'
                className='w-full object-cover rounded-xl'
              />
            </div>

            <div className='flex flex-col items-center'>
              <h4 className='font-medium text-xl my-2'>Ajibade Adedayo</h4>
              <p className='text-gray-400'>CEO/Founder</p>
            </div>
          </div>

          <div className='p-6 rounded-xl border border-dark-300'>
            <div className='mb-5'>
              <img
                src='/images/ceo.png'
                alt='team-image'
                className='w-full object-cover rounded-xl'
              />
            </div>

            <div className='flex flex-col items-center'>
              <h4 className='font-medium text-xl my-2'>Ajibade Moses</h4>
              <p className='text-gray-400'>Assistant CEO</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
