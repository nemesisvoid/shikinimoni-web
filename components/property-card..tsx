import Link from 'next/link';
import { Button } from './ui/button';
import { formatCurrency } from '@/lib/utils';
import { BedDoubleIcon, LandPlotIcon, ShowerHeadIcon } from 'lucide-react';
import { IoLocation } from 'react-icons/io5';
import { PropertyType } from '@/types/appwrite.types';
import { BUCKET_ID, storage } from '@/lib/appwrite.config';

export const PropertyCard = ({ data }: { data: PropertyType }) => {
  const image = storage.getFileView(BUCKET_ID!, data.images[0]).toString();
  return (
    <div className='p-6 rounded-xl border border-dark-300'>
      <div className='mb-5'>
        <img
          src={image}
          alt='property image'
          className='object-cover h-60 w-full rounded-xl hover:scale-[1.03] duration-300 select-none'
        />
      </div>
      <div>
        <div className='text-white'>
          <div className='flex flex-col gap-3  sm:flex-row sm:items-center justify-between mb-5 sm:mb-4'>
            <div>
              <p className='text-sm py-1 px-3 bg-dark-300 rounded-full w-fit'>{data.location}</p>
            </div>

            <div className='flex items-center gap-1 '>
              <div className='w-3 h-3 rounded-full animate-pulse bg-purple-600' />
              available
            </div>
          </div>

          <div className='flex gap-10 my-6'>
            {data.bathrooms && (
              <div className='flex items-center gap-1'>
                <ShowerHeadIcon size={23} />
                <p>{data.bathrooms}</p>
              </div>
            )}

            {data.bedrooms && (
              <div className='flex items-center gap-1'>
                <BedDoubleIcon size={23} />
                <p>{data.bedrooms}</p>
              </div>
            )}

            {data.size && (
              <div className='flex items-center gap-1'>
                <LandPlotIcon size={23} />
                <p>{data.size}</p>
              </div>
            )}
          </div>

          <div className='flex gap-1 my-4 text-gray-400'>
            <IoLocation size={18} />
            <p>Ilorin</p>
          </div>

          <div className='flex flex-col sm:flex-row  sm:items-center justify-between max-sm:gap-5'>
            <div className='flex flex-col'>
              <span className='text-gray-400'>Price</span>
              <p className='text-xl'>
                {formatCurrency(data.price)}
                {data.model === 'rent' && '/yr'}
              </p>
            </div>

            <Button
              className='text-base text-white bg-purple-600 hover:text-purple-400 hover:bg-black duration-300 py-6 sm:py-5 rounded-full'
              asChild>
              <Link href={`/properties/${data.$id}`}>View Property</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
