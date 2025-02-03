'use client';

import { Counter } from '../counter';

export const StatCard = () => {
  return (
    <div className='flex flex-wrap items-center sm:justify-center lg:justify-start gap-10 mt-12'>
      <div className='bg-dark-100 py-6 px-10 border border-gray-500 rounded-xl'>
        <Counter num={1000} />

        <p>Properties for Clients </p>
      </div>

      <div className='bg-dark-100 py-6 px-10 border border-gray-500 rounded-xl'>
        <Counter num={1000} />
        <p>Happy Customers</p>
      </div>

      <div className='bg-dark-100 py-6 px-10 border border-gray-500 rounded-xl'>
        <Counter num={7} />
        <p>Years of Experience</p>
      </div>
    </div>
  );
};
