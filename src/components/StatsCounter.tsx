'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}

interface StatsCounterProps {
  stats: StatItem[];
}

export function StatsCounter({ stats }: StatsCounterProps) {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      const increment = stat.value / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const currentValue = Math.min(Math.floor(increment * currentStep), stat.value);

        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = currentValue;
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [stats]);

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
      {stats.map((stat, index) => (
        <Card key={stat.label}>
          <CardContent className='pt-6 text-center'>
            <div className='text-3xl font-bold text-primary mb-2'>
              {counts[index]}
              {stat.suffix}
            </div>
            <p className='text-sm text-muted-foreground'>{stat.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
