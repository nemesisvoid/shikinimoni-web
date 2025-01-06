import { reviews } from '@/constants';
import Marquee from '../marquee';
import { ReviewCard } from '../review-card';

export const Testimonials = () => {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
  return (
    <section className='container'>
      <div className='flex items-center flex-col gap-10 lg:flex-row max-sm:gap-8'>
        <div>
          <h2 className='section-header mb-6'>Customer Testimonials</h2>
          <p className='text-lg'>
            Hear what our satisfied clients have to say about their experience with Shikinimoni. <br /> Discover why they chose Shikinimoni for their
            real estate needs.
          </p>
        </div>
        <div className='relative flex flex-row items-center justify-center gap-2 rounded-lg sm:px-20 h-[30rem] overflow-hidden'>
          <Marquee
            vertical
            pauseOnHover
            className='[--duration:20s]'>
            {firstRow.map(row => (
              <ReviewCard
                key={row.name}
                {...row}
              />
            ))}
          </Marquee>
          <Marquee
            reverse
            pauseOnHover
            vertical
            className='[--duration:20s] bg-transparent'>
            {secondRow.map(row => (
              <ReviewCard
                key={row.name}
                {...row}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};
