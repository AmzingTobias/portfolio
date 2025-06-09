export type TTimelineEvent = {
  role: string;
  location?: string;
  startdate: string;
  endDate?: string;
  details?: string;
  bulletpointLists: { title: string; points: string[] }[];
};

interface ITimelineProps {
  events: TTimelineEvent[];
}

const Timeline: React.FC<ITimelineProps> = ({ events }) => {
  return (
    <section className="timeline ">
      <ol className="flex flex-col gap-8">
        {events.map((event, index) => (
          <li key={index}>
            <div className="item-inner">
              <div className="time-wrapper">
                <time className="text-2xl">{event.role}</time>
              </div>
              <div className="details">
                <h3 className="text-xl">{event.location}</h3>
                <p className="text-sm sm:text-base details-inner italic font-semibold text-secondary">
                  {event.endDate
                    ? `${event.startdate} - ${event.endDate}`
                    : event.startdate}
                </p>
                <p className="details-inner">{event.details}</p>
                {event.bulletpointLists.map((bulletpoint, index) => (
                  <div key={index} className="details-inner">
                    <p className="details-inner">{bulletpoint.title}</p>
                    <ul className="list-disc ml-8 details-inner">
                      {bulletpoint.points.map((point, index) => (
                        <li key={index} className="details-inner">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Timeline;
