'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

export const Faq = () => {
  return (
    <section className='container my-40'>
      <h2 className='section-header mb-10'>FAQs</h2>

      <p className='text-xl'>Find answers to your most pressing questions about our real estate services and properties.</p>

      <div className='mt-10'>
        <Accordion
          type='single'
          collapsible
          className='w-full md:w-2/3 flex flex-col gap-6'>
          <AccordionItem value='item-1'>
            <AccordionTrigger className='text-2xl hover:no-underline'>What properties do you offer?</AccordionTrigger>

            <AccordionContent className='text-lg'>
              We offer a diverse range of properties, including residential, commercial, and rental options. Our listings cater to various budgets and
              preferences. Explore our website to find the perfect property for you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-2'>
            <AccordionTrigger className='text-2xl hover:no-underline'>Can I schedule a viewing?</AccordionTrigger>

            <AccordionContent className='text-lg'>
              Absolutely! You can schedule a viewing through our website or by contacting our team directly. We aim to accommodate your schedule to
              ensure you have ample time to explore the property. Let us know your preferred time.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger className='text-2xl hover:no-underline'>What properties do you offer?</AccordionTrigger>

            <AccordionContent className='text-lg'>
              We offer a diverse range of properties, including residential, commercial, and rental options. Our listings cater to various budgets and
              preferences. Explore our website to find the perfect property for you.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
