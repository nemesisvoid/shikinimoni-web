import { PropertyType } from '@/types/appwrite.types';
import { ImageList } from './image-list';
import { BedDoubleIcon, LandPlotIcon, LocateFixedIcon, ShowerHeadIcon } from 'lucide-react';
import { Button } from './ui/button';
import { formatCurrency } from '@/lib/utils';
import { BUCKET_ID, storage } from '@/lib/appwrite.config';
type PropertyProps = {
  data: PropertyType | undefined;
};
export const Property = async ({ data }: PropertyProps) => {
  const imgs = await Promise.all(
    data?.images?.map(async img => {
      const url = storage.getFileView(BUCKET_ID!, img);
      return url.toString();
    }) || []
  );
  return (
    <div>
      <div className='bg-dark-300 p-3 md:p-5 rounded-xl my-14'>
        <ImageList images={imgs} />
      </div>

      <div className='mt-14 flex flex-col lg:flex-row justify-between gap-20 lg:gap-12'>
        <div className='lg:w-[40%]'>
          <h3 className='text-3xl mb-2 font-semibold'>
            {formatCurrency(data.price!)}
            {data?.model === 'rent' && '/yr'}
          </h3>

          <p className='text-lg mb-10 font-base'>{data?.location}</p>

          <h3 className='text-white text-2xl'>Description</h3>
          <p className='mt-2 text-gray-400'>{data?.description}</p>

          <div className='flex items-center justify-between flex-wrap mt-12 pt-4 border-t border-gray-600 gap-10'>
            <div>
              <div className='flex items-center gap-2 text-gray-400 mb-3'>
                <BedDoubleIcon size={24} />
                <span className=''>Bedrooms</span>
              </div>
              <p className='text-white text-xl'>{data?.bedrooms ? String(data?.bedrooms).padStart(2, '0') : 'N/A'}</p>
            </div>

            <div>
              <div className='flex items-center gap-2 text-gray-400 mb-3'>
                <ShowerHeadIcon size={24} />
                <span className=''>Bathrooms</span>
              </div>
              <p className='text-white text-xl'>{data?.bathrooms ? String(data?.bathrooms).padStart(2, '0') : 'N/A'}</p>
            </div>

            <div>
              <div className='flex items-center gap-2 text-gray-400 mb-3'>
                <LandPlotIcon size={24} />
                <span className=''>Plot</span>
              </div>
              <p className='text-white text-xl'>N/A</p>
            </div>

            <div>
              <div className='flex items-center gap-2 text-gray-400 mb-3'>
                <LocateFixedIcon size={24} />
                <span className=''>City</span>
              </div>
              <p className='text-white text-xl'>Ilorin</p>
            </div>
          </div>
        </div>
        <div className='border border-gray-500 p-10 rounded-2xl'>
          <div className='text-gray-400'>
            <h3 className='text-white text-2xl mb-3'>Inquire about {data?.name}</h3>
            <p>Interested in this property? Reach out to us for more information.</p>
            <Button
              className='text-white bg-dark-300 mt-14 text-xl py-5 rounded-sm'
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
