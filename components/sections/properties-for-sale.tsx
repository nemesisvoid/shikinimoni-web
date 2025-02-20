import { getPropertiesForSale } from '@/lib/actions';
import { PropertyCard } from '../property-card.';

const PropertiesForSale = async () => {
  const data = await getPropertiesForSale();
  return (
    <section className='container my-60 relative overflow-hidden'>
      <h2 className='section-header mb-10'>Properties for Sale</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {data
          ?.map((property, index) => (
            <div
              key={`${property.$id}-${index}`}
              className='md:basis-1/2 lg:basis-1/3'>
              <PropertyCard data={property} />
            </div>
          ))
          .slice(0, 6)}
      </div>
    </section>
  );
};

export default PropertiesForSale;
