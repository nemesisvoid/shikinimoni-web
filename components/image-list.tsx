'use client';

import { propertyImages } from '@/constants';
import { BUCKET_ID, storage } from '@/lib/appwrite.config';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export const ImageList = ({ images }: { images: string[] }) => {
  // console.log('imgs', imgs);
  const [image, setImage] = useState(0);
  console.log(images);

  return (
    <>
      <div className='bg-dark-200  rounded-xl max-sm:p-2 p-3'>
        <div className='flex items-center gap-8'>
          {images
            .map((image, index) => (
              <div
                key={index}
                className='hover:cursor-pointer'
                onClick={() => setImage(index)}>
                <img
                  src={image}
                  alt=''
                  className={cn('h-16 md:h-28 w-36 md:w-44 rounded-xl object-cover', '')}
                />
              </div>
            ))
            .slice(0, 5)}
        </div>
      </div>

      <div className='mt-10'>
        <img
          className='rounded-xl object-cover'
          src={images[image]}
          alt={''}
        />
      </div>
    </>
  );
};
