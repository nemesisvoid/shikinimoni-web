'use client';

import { propertyImages } from '@/constants';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export const ImageList = () => {
  const [image, setImage] = useState(0);
  return (
    <>
      <div className='bg-dark-200  rounded-xl p-3'>
        <div className='flex items-center gap-8'>
          {propertyImages
            .map((image, index) => (
              <div
                key={index}
                className='hover:cursor-pointer'
                onClick={() => setImage(index)}>
                <img
                  src={image.src}
                  alt=''
                  className={cn('h-20 md:h-28 w-36 md:w-44 rounded-xl object-cover', '')}
                />
              </div>
            ))
            .slice(0, 4)}
        </div>
      </div>

      <div className='mt-10'>
        <img
          className='rounded-xl object-cover'
          src={propertyImages[image].src}
          alt={propertyImages[image].alt}
        />
      </div>
    </>
  );
};
