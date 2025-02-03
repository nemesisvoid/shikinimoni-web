import { Star } from 'lucide-react';

export const TestimonialCard = ({ name, text }: { name: string; text: string }) => {
  return (
    <div className='p-10 relative rounded-xl mt-20 card-gradient bg-dark-100 hover:bg-dark-200 duration-200'>
      <div className='flex items-center gap-2'>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={20}
            fill='white'
          />
        ))}
      </div>
      <p className='text-xl italic my-6'>"{text}"</p>
      <p className='text-gray-300 font-light text-2xl'>-{name}</p>
    </div>
  );
};
