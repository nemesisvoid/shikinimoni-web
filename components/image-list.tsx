'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

export const ImageList = ({ images }: { images: string[] }) => {
  const [image, setImage] = useState(0);

  return (
    <>
      <div className='bg-dark-200  rounded-xl max-sm:p-2 p-3'>
        <div className='md:flex items-center gap-8 hidden'>
          {images
            .map((image, index) => (
              <div
                key={`${image}-${index}`}
                className='hover:cursor-pointer'
                onClick={() => setImage(index)}>
                <img
                  src={image}
                  alt=''
                  className={cn(' h-28 w-44 rounded-xl object-cover', '')}
                />
              </div>
            ))
            .slice(0, 5)}
        </div>

        <div className='flex items-center gap-8 md:hidden'>
          {images
            .map((image, index) => (
              <div
                key={`${image}-${index}`}
                className='hover:cursor-pointer'
                onClick={() => setImage(index)}>
                <img
                  src={image}
                  alt=''
                  className={cn('h-24 w-44 rounded-xl object-cover', '')}
                />
              </div>
            ))
            .slice(0, 3)}
        </div>
        <div className='mt-10 w-full'>
          <img
            className='rounded-xl object-cover w-full h-[400px] md:h-[600px]'
            src={images[image]}
            alt='property image'
          />
        </div>
      </div>
    </>
  );
};
