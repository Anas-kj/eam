'use client';

import 'react-vertical-timeline-component/style.min.css';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import { SectionHeading } from './section-heading';
import { useSectionInView } from './use-section-in-view';
import { experiencesData } from './data';
import { Leaf, Sprout } from 'lucide-react';

export const Experience = () => {
  const { ref: sectionRef } = useSectionInView('Experience');

  return (
    <section ref={sectionRef} id="experience" className="my-10 scroll-mt-28">
      <SectionHeading
        heading="Our Experience"
        content="Professional experience that We have accumulated over several years."
      />
      <VerticalTimeline lineColor="hsl(var(--muted))">
        {experiencesData.map(({ title, description, location, date }) =>{
          const { ref, inView } = useInView({ triggerOnce: true });
          return (
          
          <VerticalTimelineElement
            key={title}
            visible={inView}
            contentStyle={{
              background: 'hsl(var(--secondary))',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              padding: '30px',
              borderRadius: '15px',
            }}
            contentArrowStyle={{ display: 'none' }}
            date={date}
            dateClassName="!font-medium text-muted-foreground"
            icon={<Sprout />}
            iconStyle={{
              boxShadow: 'none',
              border: '2px solid hsl(var(--foreground)',
            }}
          >
            <h3 ref={ref} className="font-medium">
              {title}
            </h3>
            <p className="!mt-0 !font-normal">{location}</p>
            <p className="text-muted-foreground !mt-1 !font-normal">
              {description}
            </p>
          </VerticalTimelineElement>
        )})}
      </VerticalTimeline>
    </section>
  );
};
