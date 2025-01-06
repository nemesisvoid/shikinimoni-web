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
          <p className='text-lg md:w-[65%]'>
            Our achievements reflect our unwavering commitment to excellence, market expertise, and client satisfaction. We're proud of the milestones
            we've reached and the positive impact we've made in the real estate market.
          </p>
        </div>

        <div className='flex flex-col md:flex-row items-cente gap-8 mt-14'>
          <div className='border-8 border-spacing-10 border-[#1c1c1c] rounded-xl px-8 py-6 flex-1'>
            <h4 className='text-2xl font-semibold mb-5'>Successful Transactions</h4>
            <p className=''>
              We have facilitated hundreds of successful property transactions. From first-time homebuyers to seasoned investors, our team
              consistently delivers tailored solutions that meet our clients' unique needs. Our clients are a testament to the trust and satisfaction
              we inspire.
            </p>
          </div>

          <div className='border-8 border-spacing-10 border-[#1c1c1c] rounded-xl px-8 py-6 flex-1'>
            <h4 className='text-2xl font-semibold mb-5'>Client Satisfaction and Trust</h4>
            <p className=''>
              We’ve earned the trust of countless clients through our unwavering dedication to their goals. By offering personalized guidance and open
              communication at every step of the process, we ensure a seamless experience for buyers, sellers, and renters alike.
            </p>
          </div>

          <div className='border-8 border-spacing-10 border-[#1c1c1c] rounded-xl px-8 py-6 flex-1'>
            <h4 className='text-2xl font-semibold mb-5'>Market Expertise</h4>
            <p className=''>
              We pride ourselves on our deep understanding of the local real estate market. Through continuous research, data analysis, and market
              monitoring, we stay ahead of trends and provide our clients with accurate, up-to-date information. This expertise allows us to offer
              strategic advice, and negotiate effectively.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
