import { SearchInput } from '@/components/search-input';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { PropertiesList } from './properties-list';
import { Suspense } from 'react';
import { Filter } from '@/components/filter';
import { use } from 'react';
import Loading from '../loading';

async function PropertiesPage(props) {
  const searchParams = await props.searchParams;
  const priceFilter = searchParams.price ?? 'all';
  const typeFilter = searchParams.type ?? 'all';
  const modeFilter = searchParams.mode ?? 'all';

  console.log('search', searchParams);

  //
  return (
    <>
      <section className='pt-40 lg:pt-48 bg-dot-white/[0.2] h-[60vh] md:h-[50vh] relative'>
        <div className='container'>
          <div className=''>
            {/* <div className='absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div> */}

            <TextGenerateEffect
              className='section-header mb-6 inline-block bg-gradient-to-tr from-[#fff] to-[#555]   text-transparent bg-clip-text'
              words='Find Your Dream Property'
              duration={1.5}
            />
            <p className='text-lg'>Explore affordable and modern homes tailored to your lifestyle and budget.</p>
          </div>
        </div>
      </section>

      <div className='container my-12'>
        {/* <SearchInput /> */}
        <Filter />
      </div>

      {/* <div></div> */}

      <Suspense fallback={<Loading />}>
        <section className='container relative'>
          <PropertiesList
            priceFilter={priceFilter}
            modeFilter={modeFilter}
            typeFilter={typeFilter}
          />
        </section>
      </Suspense>
    </>
  );
}

export default PropertiesPage;
