'use client';
import { motion } from 'framer-motion';

export const Achievements = () => {
  return (
    <motion.section
      className='my-52'
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 1 }}
      initial={{ opacity: 0, y: 100 }}>
      <div className='container my-56'>
        <div className='mb-6'>
          <h1 className='section-header mb-5'>Achievements</h1>
          <p className='text-lg'>We have have made some milestone over the years</p>
        </div>

        <div className='flex flex-col md:flex-row items-center gap-8 mt-14'>
          <div className='border-8 border-spacing-10 border-[#1c1c1c] rounded-xl px-8 py-6'>
            <h4 className='text-2xl font-semibold mb-5'>4+ years of Excellence</h4>
            <p className=''>
              With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real
              estate.
            </p>
          </div>

          <div className='border-8 border-spacing-10 border-[#1c1c1c] rounded-xl px-8 py-6'>
            <h4 className='text-2xl font-semibold mb-5'>4+ years of Excellence</h4>
            <p className=''>
              With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real
              estate.
            </p>
          </div>

          <div className='border-8 border-spacing-10 border-[#1c1c1c] rounded-xl px-8 py-6'>
            <h4 className='text-2xl font-semibold mb-5'>4+ years of Excellence</h4>
            <p className=''>
              With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real
              estate.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
