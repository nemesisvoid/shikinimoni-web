import { Hero } from '../components/sections/hero';
import { Solutions } from '@/components/sections/solutions';
import { Cta } from '@/components/sections/cta';
import { Testimonials } from '@/components/sections/testimonials';
import { Faq } from '@/components/sections/faq';
import { RecentProperties } from '@/components/sections/recent-properties';
import { Suspense } from 'react';
import Loading from './loading';

function Home() {
  return (
    <>
      <main className='relative '>
        <Hero />
        <Suspense fallback={<Loading />}>
          <RecentProperties />
        </Suspense>
        <Solutions />
        {/* <Choose /> */}
        <Testimonials />
        <Cta />
        <Faq />
      </main>
    </>
  );
}

export default Home;
