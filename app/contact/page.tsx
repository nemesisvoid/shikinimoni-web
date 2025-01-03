import { ContactForm } from '@/components/contact-form';
import { IoLocation, IoMail } from 'react-icons/io5';
import { MdLocalPhone } from 'react-icons/md';

function ContactPage() {
  return (
    <section className='mt-40 lg:mt-48'>
      <div className='container mx-auto '>
        <h1 className='section-header bg-gradient-to-tr from-[#fff] to-[#555]  inline-block text-transparent bg-clip-text'>
          Need help? Get in touch
        </h1>

        <p className='text-lg mt-4'>
          We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore
          investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation.
        </p>

        <div className='flex flex-col md:flex-row  items-center justify-between mt-32 gap-6'>
          <div className='flex flex-col gap-6 items-center bg-dark-100 px-6 py-10 rounded-xl w-full sm:w-1/2 relative'>
            <img
              src='/images/arrow-icon.png'
              className='absolute right-6 top-4'
              alt='arrow-icon'
            />
            <div>
              <IoMail className='w-10 h-10 text-purple-600' />{' '}
            </div>

            <div>
              <a
                href='mailto:u7eCt@example.com'
                target='_blank no-referrer'
                className='text-lg underline hover:no-underline duration-500'>
                Shikinimoni@gmail.com
              </a>
            </div>
          </div>

          <div className='flex flex-col gap-6 items-center bg-dark-100 px-6 py-10 rounded-xl w-full sm:w-1/2 relative'>
            <img
              src='/images/arrow-icon.png'
              className='absolute right-6 top-4'
              alt='arrow icon'
            />
            <div>
              <IoLocation className='w-10 h-10 text-purple-600' />
            </div>

            <div>
              <a
                href='https://maps.app.goo.gl/br9J5o7appgnZNgN8'
                target='_blank no-referrer'
                className='text-lg underline hover:no-underline duration-500'>
                Main office
              </a>
            </div>
          </div>

          <div className='flex flex-col gap-6 items-center bg-dark-100 px-6 py-10 rounded-xl w-full sm:w-1/2 relative'>
            <img
              src='/images/arrow-icon.png'
              className='absolute right-6 top-4'
              alt='arrow icon'
            />
            <div>
              <MdLocalPhone className='w-10 h-10 text-purple-600' />
            </div>

            <div>
              <a
                href='tel:+234909900'
                target='_blank no-referrer'
                className='text-lg underline hover:no-underline duration-500'>
                09029000000
              </a>
            </div>
          </div>
        </div>

        <div className='my-48'>
          <h2 className='section-header bg-gradient-to-tr from-[#fff] to-[#555]  inline-block text-transparent bg-clip-text'>Let's Connect</h2>

          <p className='text-lg my-4'>Connect with Shikinimoni. We are here to answer your questions and provide the assistance you need.</p>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
