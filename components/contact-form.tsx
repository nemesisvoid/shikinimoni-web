'use client';

import { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    mail: '',
    phone: '',
    message: '',
  });

  const handleChange = ({ target: { name, value } }: { target: { name: string; value: string } }) => {
    setForm({ ...form, [name]: value });
  };

  const formRef = useRef();

  const handleMessage = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      emailjs.send(
        'service_9c8cubb',
        'template_wxufs47',
        {
          from_name: form.name,
          from_email: form.mail,
          from_phone: form.phone,
          to_name: 'Shikinimoni',
          to_email: 'shikinibusinessenterprise@gmail.com',
          message: form.message,
        },
        '7aLI8faxRxw7MGFP_'
      );

      setLoading(false);
      alert('Message sent successfully');
      setForm({ name: '', mail: '', phone: '', message: '' });
    } catch {
      setLoading(false);
    }
  };

  return (
    <form
      ref={formRef.current}
      onSubmit={handleMessage}
      action=''
      className='border border-gray-600 rounded-xl py-16 px-10 space-y-14'>
      <div className='flex max-lg:gap-10 min-[1340px]:items-center justify-between flex-col min-[1340px]:flex-row '>
        <div className='space-y-4'>
          <label
            htmlFor='name'
            className='text-lg'>
            Full Name
          </label>
          <Input
            id='name'
            name='name'
            placeholder='Name'
            value={form.name}
            onChange={handleChange}
            className='form-input lg:w-1/2 min-[1340px]:w-96 placeholder:text-gray-400 focus-visible:ring-gray-400'
          />
        </div>

        <div className='space-y-4'>
          <label
            htmlFor='phone'
            className='text-lg'>
            Phone No
          </label>
          <Input
            id='phone'
            name='phone'
            value={form.phone}
            onChange={handleChange}
            type='text'
            placeholder='Phone'
            disabled={loading}
            className='form-input lg:w-1/2 min-[1340px]:w-96 placeholder:text-gray-400 focus-visible:ring-gray-400'
          />
        </div>

        <div className='space-y-4'>
          <label
            htmlFor='mail'
            className='text-lg'>
            Email
          </label>
          <Input
            id='mail'
            name='mail'
            value={form.mail}
            onChange={handleChange}
            type='email'
            disabled={loading}
            placeholder='email@example.com'
            className='form-input lg:w-1/2 min-[1340px]:w-96 placeholder:text-gray-400 focus-visible:ring-gray-400'
          />
        </div>
      </div>

      <div className='space-y-4'>
        <label
          htmlFor='message'
          className='text-lg'>
          Message
        </label>
        <Textarea
          id='message'
          name='message'
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder='Your message...'
          disabled={loading}
          className='form-input placeholder:text-gray-400 focus-visible:ring-gray-400'
        />
      </div>

      <div className='flex md:justify-end pt-10'>
        <Button
          type='submit'
          variant='outline'
          onClick={handleMessage}
          className='text-lg md:text-xl bg-dark-200 p-5 md:p-6 rounded-lg text-purple-500 ease-in duration-300 hover:bg-dark-200 hover:text-white hover:border-white'
          disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
};
