import { PropertyType } from '@/types/appwrite.types';
import { ImageList } from './image-list';
import { BedDoubleIcon, Grid2X2Icon, ShowerHeadIcon } from 'lucide-react';
import { Button } from './ui/button';
type PropertyProps = {
  data: PropertyType | undefined;
};
export const Property = ({ data }: PropertyProps) => {
  return (
    <div>
      <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
        <div className='flex items-center gap-4'>
          <h3 className='text-white text-3xl'>{data?.name}</h3>
          <p className='text-sm bg-dark-300 px-4 py-3 rounded-full'>{data?.location}</p>
        </div>

        <div className='flex flex-col'>
          <span className='text-gray-400'>Price</span>
          <p className='text-2xl'>${data?.price}</p>
        </div>
      </div>

      <div className='bg-dark-300 p-6 rounded-xl my-14'>
        <ImageList />
      </div>

      <div className='mt-14 flex flex-col lg:flex-row justify-between gap-20 lg:gap-12'>
        <div className='lg:w-[50%]'>
          <h3 className='text-white text-2xl'>Description</h3>
          <p className='mt-3 text-gray-400'>{data?.description}</p>

          <div className='flex items-center justify-between mt-12 pt-4 border-t border-gray-600 gap-10'>
            <div>
              <div className='flex items-center gap-2 text-gray-400 mb-3'>
                <BedDoubleIcon size={24} />
                <span className=''>Bedrooms</span>
              </div>
              <p className='text-white text-xl'>{String(data?.bedrooms).padStart(2, '0')}</p>
            </div>

            <div>
              <div className='flex items-center gap-2 text-gray-400 mb-3'>
                <ShowerHeadIcon size={24} />
                <span className=''>Bathrooms</span>
              </div>
              <p className='text-white text-xl'>{String(data?.bathrooms).padStart(2, '0')}</p>
            </div>

            <div>
              <div className='flex items-center gap-2 text-gray-400 mb-3'>
                <Grid2X2Icon size={24} />
                <span className=''>Area</span>
              </div>
              <p className='text-white text-xl'>N/A</p>
            </div>
          </div>
        </div>
        <div className='border border-gray-500 p-10 rounded-2xl'>
          <div className='text-gray-400'>
            <h3 className='text-white text-2xl mb-3'>Inquire about {data?.name}</h3>
            <p>Interested in this property? Reach out to us for more information.</p>
            <Button
              className='text-purple-600 mt-14 text-xl py-5 rounded-sm'
              variant={'secondary'}
              asChild>
              <a href=''>Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
