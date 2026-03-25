"use client";

import { useEffect, useState, useRef } from 'react';

interface StatProps {
  number: string;
  label: string;
  subtext: string;
}

function AnimatedStat({ stat }: { stat: StatProps }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  // Extract numeric value from stat.number
  const targetNumber = parseInt(stat.number.replace(/[^0-9]/g, ''));
  const prefix = stat.number.match(/[^0-9]*/)?.[0] || '';
  const suffix = stat.number.match(/[^0-9]+$/)?.[0] || '';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !targetNumber) return;

    const duration = 2000;
    const steps = 50;
    const increment = targetNumber / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, targetNumber]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-black text-blue-700">
        {prefix}{count || targetNumber}{suffix}
      </div>
      <div className="text-gray-900 font-semibold">{stat.label}</div>
      <div className="text-sm text-gray-500">{stat.subtext}</div>
    </div>
  );
}

export default function AnimatedStats({ stats }: { stats: StatProps[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
      {stats.map((stat, index) => (
        <AnimatedStat key={index} stat={stat} />
      ))}
    </div>
  );
}