'use client';
import { motion } from 'framer-motion';

import { FaHandshake, FaStar } from 'react-icons/fa';
import { ImStatsDots } from 'react-icons/im';
import { IoShieldSharp } from 'react-icons/io5';

export const Values = () => {
  return (
    <motion.section
      className='my-52'
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 1 }}
      initial={{ opacity: 0, y: 100 }}>
      <div className='container flex flex-col lg:flex-row gap-8'>
        <div className='self-center'>
          <h2 className='section-header mb-5'>Our Values</h2>
          <p className='text-lg mt-3'>
            We are a team of passionate professionals committed to providing our clients with the best possible real estate experience.
          </p>
        </div>

        <div className='grid grid-cols-1 max-md:gap-5 md:grid-cols-2 shadow-md border-8 border-spacing-10 border-[#1c1c1c] rounded-xl px-8 py-6 w-full place-items-center relative'>
          <div
            className='absolute h-[0.5px] w-[95%]
           bg-dark-300 mt-3 md:mt-5'
          />
          <div className='md:border-r border-dark-300 md:mr-5'>
            <div className='flex items-center gap-4'>
              <div className='flex items-center justify-center w-12 h-12 rounded-full border-purple-500 border'>
                <FaStar
                  color='purple'
                  className=''
                  size={22}
                />
              </div>
              <h4 className='text-2xl'>Commitment</h4>
            </div>

            <p className='mt-5'>
              We dedicate ourselves to providing exceptional service, going above and beyond to ensure your real estate needs are met.
            </p>
          </div>

          <div className='max-md:mt-10'>
            <div className='flex items-center gap-4'>
              <div className='flex items-center justify-center w-12 h-12 rounded-full border-purple-500 border'>
                <IoShieldSharp
                  color='purple'
                  className=''
                  size={22}
                />
              </div>
              <h4 className='text-2xl'>Integrity</h4>
            </div>

            <p className='mt-5'>
              We believe in conducting business with honesty and transparency. We prioritize building long-lasting relationships with our clients
              based on trust and reliability.
            </p>
          </div>

          <div className='md:border-r border-dark-300 mt-10 pr-3 mr-5'>
            <div className='flex items-center gap-4 '>
              <div className='flex items-center justify-center w-12 h-12 rounded-full border-purple-500 border'>
                <ImStatsDots
                  color='purple'
                  className=''
                  size={22}
                />
              </div>
              <h4 className='text-2xl'>Innovation</h4>
            </div>

            <p className='mt-5'>We embrace innovation to stay ahead of the curve and deliver cutting-edge solutions to our clients.</p>
          </div>

          <div className='mt-10'>
            <div className='flex items-center gap-4'>
              <div className='flex items-center justify-center w-12 h-12 rounded-full border-purple-500 border'>
                <FaHandshake
                  color='purple'
                  className=''
                  size={22}
                />
              </div>
              <h4 className='text-2xl'>Customer Focused</h4>
            </div>

            <p className='mt-5'>
              We prioritize open communication, personalized attention, and a client-centric approach. Your satisfaction is our ultimate goal.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
