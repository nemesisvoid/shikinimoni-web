'use client';
import { SearchIcon } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { FormEvent, useState } from 'react';
import { searchProperties } from '@/lib/actions';

export const SearchInput = () => {
  const [name, setName] = useState('');

  const handleSearch = async (e: FormEvent) => {
    // const formData = new FormData();
    // formData.append('name', name);
    e.preventDefault();
    await searchProperties(name);
  };

  return (
    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-between w-[40%] border-dark-300 border bg-dark-300 rounded-xl'>
      <form
        onSubmit={handleSearch}
        // action={searchProperties}
        className='w-full h-12 self-stretch'>
        <Input
          id='search'
          name='search'
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='Search properties...'
          className='border-none active:border-none focus-visible:ring-0 text-lg'
        />
      </form>

      <Button
        type='submit'
        className='text-xl bg-purple-700 flex items-center h-12 rounded-xl'>
        <SearchIcon size={100} /> Search
      </Button>
    </div>
  );
};
