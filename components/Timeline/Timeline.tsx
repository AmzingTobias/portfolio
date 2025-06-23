"use client";
import { useRef, useEffect } from "react";
import List, { ListProperties } from "@/components/Timeline/List";

export type TTimelineEvent = {
  title: string;
  role?: string;
  startdate: string;
  endDate?: string;
  details?: string;
  bulletpointLists?: ListProperties[];
};

interface ITimelineProps {
  events: TTimelineEvent[];
}

const Timeline: React.FC<ITimelineProps> = ({ events }) => {
  const timelineEventsRefs = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    // Initialize Intersection Observer
    const observer = new IntersectionObserver(
      (timelineEvents) => {
        timelineEvents.forEach((event) => {
          const FADED_FLAG = "faded-in";
          if (event.isIntersecting) {
            // If in view, remove the opacity 0 flag if it exists
            event.target.classList.remove("opacity-0");
            event.target.classList.add(FADED_FLAG);
          } else {
            // Don't make elements that have already faded in, fade back out
            if (!event.target.classList.contains(FADED_FLAG)) {
              // If not in view, set to 0 opacity
              event.target.classList.add("opacity-0");
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    // Add timeline events to Intersection Observer
    timelineEventsRefs.current.forEach((pointRef) => {
      observer.observe(pointRef);
    });

    // Clean up the observer when component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section>
      <ol className="border-l-2 border-secondary">
        {events.map((event, index) => (
          <li
            key={index}
            className="transition-opacity duration-500 ease-in transform"
            ref={(liRef) => {
              if (liRef) {
                timelineEventsRefs.current[index] = liRef;
              }
            }}
          >
            <div className="flex-start flex items-center">
              <div className="-ml-[0.560rem] -mt-2 mr-[1.05rem] flex h-4 w-4 items-center justify-center rounded-full min-w-4 min-h-4 bg-secondary"></div>
              <h4 className="-mt-2 text-md sm:text-xl font-semibold">
                {event.title}
              </h4>
            </div>
            <div
              className={`mb-1 ml-6 ${
                index + 1 === events.length ? "pb-0" : "pb-6"
              }`}
            >
              <h4 className="text-md sm:text-lg font-semibold">{event.role}</h4>
              <p className="text-sm sm:text-base transition italic font-semibold text-secondary-foreground">
                {event.endDate
                  ? `${event.startdate} - ${event.endDate}`
                  : event.startdate}
              </p>
              <div
                className={`mt-2 text-md sm:text-lg ${
                  index + 1 === events.length ? "mb-0" : "mb-4"
                }`}
              >
                <p>{event.details}</p>
                <div className="mt-2">
                  {event.bulletpointLists &&
                    event.bulletpointLists.map((bulletPointList, index) => (
                      <List
                        key={index}
                        list={{
                          title: bulletPointList.title,
                          points: bulletPointList.points,
                        }}
                      />
                    ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Timeline;
