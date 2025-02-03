import { reviews } from '@/constants';
import Marquee from '../marquee';
import { ReviewCard } from '../review-card';
import { TestimonialCard } from '../ui/testimonial-card';

export const Testimonials = () => {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
  return (
    <section className='container my-60'>
      <div>
        <h2 className='section-header mb-6'>Customer Testimonials</h2>
        <p className='text-lg'>
          Hear what our satisfied clients have to say about their experience with Shikinimoni. <br /> Discover why they chose Shikinimoni for their
          real estate needs.
        </p>
      </div>
      {/* <div className='relative flex flex-row items-center justify-center gap-2 rounded-lg sm:px-20 h-[30rem] overflow-hidden'> */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {reviews.map(({ name, text }) => (
          <TestimonialCard
            name={name}
            text={text}
          />
        ))}
      </div>
    </section>
  );
};
