import Link from 'next/link';
import { Button } from './ui/button';
import { formatCurrency } from '@/lib/utils';

type PropertyCardProps = {
  name: string;
  price: number;
  image: string;
  location: string;
};

export const PropertyCard = ({ data }) => {
  return (
    <div className='p-6 rounded-xl border border-dark-300'>
      <div className='mb-5'>
        <img
          src='/images/img-1.jpg'
          alt='property image'
          className='object-cover rounded-xl hover:scale-[1.03] duration-300'
        />
      </div>
      <div>
        <div className='text-white'>
          <p className='text-sm py-1 px-3 bg-dark-300 rounded-full w-fit mb-6'>{data.location}</p>

          <h3 className='text-xl mb-4'>{data.name}</h3>

          <div className='flex items-center justify-between'>
            <div className='flex flex-col gap-1'>
              <span className='text-gray-400'>Price</span>
              <p className='text-xl'>
                {formatCurrency(data.price)}
                {data.model === 'rent' && '/yr'}
              </p>
            </div>

            <Button
              className='text-base text-white bg-purple-600 hover:text-purple-400 hover:bg-black duration-300 py-6 rounded-3xl'
              asChild>
              <Link href={`/properties/${data.$id}`}>View Property</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
