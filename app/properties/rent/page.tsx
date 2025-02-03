import Loading from '@/app/loading';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { Filter } from '@/components/filter';
import { Suspense } from 'react';
import { PropertiesList } from '../properties-list';
import { getPropertiesForRent } from '@/lib/actions';

async function RentPage(props) {
  const data = await getPropertiesForRent();
  const searchParams = await props.searchParams;
  const priceFilter = searchParams.price ?? 'all';

  return (
    <>
      <section className='pt-40 lg:pt-48 bg-dot-white/[0.2] h-[60vh] md:h-[50vh] relative'>
        <div className='container'>
          <div>
            <TextGenerateEffect
              className='section-header mb-6 inline-block bg-gradient-to-tr from-[#fff] to-[#555]   text-transparent bg-clip-text'
              words='Properties For Rent'
              duration={1.5}
            />
            <p className='text-lg'>Explore affordable and modern homes for rent tailored to your lifestyle and budget.</p>
          </div>
        </div>
      </section>

      <div className='container my-12'>
        <Filter />
      </div>

      <Suspense fallback={<Loading />}>
        <section className='container relative'>
          <PropertiesList
            data={data}
            priceFilter={priceFilter}
          />
        </section>
      </Suspense>
    </>
  );
}
export default RentPage;
