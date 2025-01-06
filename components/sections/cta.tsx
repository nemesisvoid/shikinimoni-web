import Link from 'next/link';
import { Button } from '../ui/button';

export const Cta = () => {
  return (
    <section className='border-t border-gray-600 border-b  cta-bg relative overflow-hidden mb-30 mt-10'>
      <div className='absolute left-0 top-14 w-1/2 h-full cta-bg-left -z-10' />

      <div className='absolute right-5 md:-right-[20%] top-10 w-1/2 h-full cta-bg-right -z-10' />

      <div className='container my-20'>
        <h2 className='section-header mb-12'>Start Your Real Estate Journey Today</h2>
        <div className='flex items-center justify-between max-sm:flex-col max-sm:gap-10'>
          <div>
            <p className='md:max-w-[85%] text-lg'>
              Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice,
              Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available
              properties or get in touch with our team for personalized assistance.
            </p>
          </div>

          <div>
            <Button
              className='bg-purple-500 hover:bg-purple-400 duration-500 text-white text-xl py-6'
              asChild>
              <Link href={'/properties'}>Explore Properties</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
