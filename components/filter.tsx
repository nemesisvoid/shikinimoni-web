'use client';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { IoCash, IoHome } from 'react-icons/io5';

export const Filter = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleFilter = (value: string, e: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(value, e);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };
  return (
    <div className='flex items-center gap-10'>
      <div className='flex items-center px-3 border border-gray-600 rounded-xl w-1/3'>
        <IoCash
          className='size-8 text-purple-400'
          // size={10}
        />
        {/* <div className='absolute w-[1px] bg-red-100 h-full left-56' /> */}
        <Select onValueChange={e => handleFilter('price', e)}>
          <SelectTrigger className='border-none before:content-["|"] before:mx-0.5 before:text-gray-500 before:h-[20px]'>
            <SelectValue
              placeholder='Price'
              className="before:content-['*'] after:ml-0.5 after:text-red-500"
            />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value='all'>All</SelectItem>
            <SelectItem value='low-to-high'>Low to High</SelectItem>
            <SelectItem value='high-to-low'>High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className='flex items-center px-3 border border-gray-600 rounded-xl w-1/3'>
        <IoHome className='size-8 text-purple-400' />
        <Select onValueChange={e => handleFilter('mode', e)}>
          <SelectTrigger className='border-none before:content-["|"] before:mx-0.5 before:text-gray-500 before:h-[20px]'>
            <SelectValue placeholder='Type' />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value='all'>All</SelectItem>
            <SelectItem value='rent'>Rent</SelectItem>
            <SelectItem value='sale'>Sale</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
