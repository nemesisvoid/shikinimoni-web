import { Achievements } from '@/components/sections/achievements';
import { Cta } from '@/components/sections/cta';
import { Solutions } from '@/components/sections/solutions';
import { Team } from '@/components/sections/team';
import { Values } from '@/components/sections/values';
import { StatCard } from '@/components/ui/stat-card';

export default function AboutPage() {
  return (
    <>
      <section className='mt-44'>
        <div className='container flex flex-col lg:flex-row gap-10'>
          <div>
            <h1 className='section-header mb-6'>Our Journey</h1>
            <p className='text-lg mt-3'>
              Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of
              countless clients.
            </p>
            <StatCard />
          </div>

          <div className='md:w-full'>
            <img
              src='/images/about-img.jpg'
              className='md:h-full object-cover rounded-xl'
              alt='about image'
            />
          </div>
        </div>
      </section>

      <Solutions />
      <Values />
      <Achievements />
      <Team />
      <Cta />
    </>
  );
}
