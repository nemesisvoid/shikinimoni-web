import { getProperties } from '@/lib/actions';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { PropertyCard } from '../property-card.';
import Link from 'next/link';

export const RecentProperties = async () => {
  const data = await getProperties();
  return (
    <section className='container my-60 relative overflow-hidden'>
      <h2 className='section-header mb-10'>Recent Properties</h2>
      <Carousel
        opts={{
          align: 'start',
        }}
        className='w-full'>
        <CarouselContent>
          {data?.map((property, index) => (
            <CarouselItem
              key={`${property.id}-${index}`}
              className='md:basis-1/2 lg:basis-1/3'>
              <PropertyCard data={property} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='hidden md:flex' />
        <CarouselNext className='hidden md:flex' />
      </Carousel>

      <div className='text-center mt-20'>
        <Link
          href='/properties'
          className='bg-purple-500 hover:bg-purple-400 duration-500 text-white text-xl py-4 px-4'>
          View All
        </Link>
      </div>
    </section>
  );
};
