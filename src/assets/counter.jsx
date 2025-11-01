import { useEffect, useRef, useState } from 'react';

const CounterItem = ({ target, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer;
    if (count < target) {
      timer = setInterval(() => {
        setCount((prev) => {
          if (prev >= target) {
            clearInterval(timer);
            return target;
          }
          return prev + 1;
        });
      }, 10); 
    }
    return () => clearInterval(timer);
  }, [count, target]);

  return (
    <div className="flex flex-col items-center justify-around p-4">
      <div className="lg:text-7xl md:text-5xl sm:text-3xl  font-bold text-white">{count}+</div>
      <div className="lg:text-2xl md:text-xl text-orange-300 font-bold">{label}</div>
    </div>
  );
};

const Counters = () => {
  const [start, setStart] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section ref={ref} className="py-36 flex items-center justify-around bg-[linear-gradient(rgba(21,20,51,0.8),rgba(21,20,51,0.8)),url('/src/assets/images/mai15.jpg')] bg-cover bg-center bg-fixed">
      {start && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <CounterItem target={560} label="Total Area Sq" />
          <CounterItem target={100} label="Security" />
          <CounterItem target={340} label="Apartio Rooms" />
          <CounterItem target={268} label="Total Constructions" />
        </div>
      )}
    </section>
  );
};

export default Counters;
