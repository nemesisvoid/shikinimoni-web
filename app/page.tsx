import { Hero } from '../components/sections/hero';
import { Solutions } from '@/components/sections/solutions';
import { Cta } from '@/components/sections/cta';
import { Testimonials } from '@/components/sections/testimonials';
import { Faq } from '@/components/sections/faq';
import { Choose } from '@/components/sections/choose';

function Home() {
  return (
    <>
      <main className='relative '>
        <Hero />
        <Solutions />
        <Choose />
        <Testimonials />
        <Cta />
        <Faq />
      </main>
    </>
  );
}

export default Home;
