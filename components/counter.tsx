import CountUp from 'react-countup';

export const Counter = ({ num }: { num: number }) => {
  return (
    <h4 className='font-semibold text-4xl'>
      <CountUp
        start={0}
        end={num}
        delay={0}
        duration={1}
      />
      +
    </h4>
  );
};
