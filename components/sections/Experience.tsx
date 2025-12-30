import Timeline, { TTimelineEvent } from "@/components/Timeline/Timeline";

const experienceEvents: TTimelineEvent[] = [
  {
    title: "Associate Security Consultant (Penetration Testing)",
    role: "LRQA",
    startdate: "September 2024",
    endDate: "Current",
    bulletpointLists: [
      {
        title: "Responsibilities:",
        points: [
          "System types tested: Web Apps, APIs, External & Internal Infrastructure.",
          "Managing multiple clients to ensure a seamless delivery of back-to-back penetration tests.",
          "Presenting at department wide meetings and events.",
          "Received a report of the month award for my first ever penetration test delivered.",
        ],
      },
    ],
  },
  {
    title: "Software Engineer - Industrial placement",
    role: "BAE Systems",
    startdate: "June 2022",
    endDate: "June 2023",
    bulletpointLists: [
      {
        title: "Subset of tasks completed during my placement:",
        points: [
          "Further developing my team’s core product and improving our demonstration platform.",
          "Creating tools to automate mine and my colleagues workflow.",
          "Organising and hosting Year 10 students for on-site apprenticeship sessions.",
          "Conforming to specialised coding standards (DO178-C), and using code verifiers, like Polyspace.",
        ],
      },
    ],
  },
  {
    title: "Crew Trainer",
    role: "McDonald's",
    startdate: "September 2018",
    endDate: "April 2022",
    bulletpointLists: [
      {
        title: "Highlights:",
        points: [
          "Within the first year I received the employee of the month award and subsequently the employee of the quarter award (out of approx. 100 employees).",
        ],
      },
      {
        title: "Responsibilities:",
        points: [
          "Communicating with the public and resolving conflicts.",
          "Working within a team whilst still using my own initiative where appropriate.",
          "Meeting time deadlines whilst under pressure.",
        ],
      },
    ],
  },
];

const Experience = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="sm:px-2 md:px-4 md:py-2 lg:px-6 lg:py-4">
        <Timeline events={experienceEvents} />
      </div>
    </div>
  );
};

export default Experience;
