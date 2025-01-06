import { cn } from '@/lib/utils';

type ReviewCardProps = {
  name: string;
  text: string;
  title: string;
};

export const ReviewCard = ({ name, text }: ReviewCardProps) => {
  return (
    <figure className={cn('relative h-full w-full md:h-60 md:w-52 cursor-pointer overflow-hidden rounded-xl p-4')}>
      <div className='flex flex-col gap-4 shadow-md py-4 px-4 hover:bg-dark-100  rounded-sm [background:linear-gradient(45deg,#191919,theme(colors.slate.800)_50%,#191919)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.gray.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box]  border border-transparent animate-border'>
        <div>
          <img
            src='/images/stars.png'
            alt='stars icon'
          />
        </div>
        <blockquote className='mt-2 text-md'>"{text}"</blockquote>
        <div className='flex flex-col'>
          <figcaption className='font-semibold text-white'>-{name}</figcaption>
        </div>
      </div>
    </figure>
  );
};
//
