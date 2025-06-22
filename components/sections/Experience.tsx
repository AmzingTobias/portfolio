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
          "System types tested: Web Apps & External Infrastructure.",
          "Managing multiple clients to ensure a seamless delivery of back-to-back penetration tests.",
          "My first ever penetration test I conducted received a report of the month award.",
          "Creating tools to automate mine and my colleagues workflow.",
          "Continuous research in my spare time to keep up to date with emerging threats.",
        ],
      },
    ],
  },
  {
    title: "Software Engineer - Industrial placement",
    role: "BAE Systems",
    startdate: "2022",
    endDate: "2023",
    bulletpointLists: [
      {
        title: "Subset of tasks completed during my placement:",
        points: [
          "Presenting methods to my team of how we can integrate automated testing and building with continuous integration, showcasing a working example of a Jenkins setup",
          "Extracting components of an existing product into a separate development library to increase productivity and maintainability",
          "Using SCADE to create head down display pages that have then been integrated into an existing demo application my team shows off to potential customers",
          "Using Enterprise Architect to create class diagrams",
          "Using DOORs to write high level requirements",
          "Conforming to specialised coding standards, and using code verifiers, like Polyspace to check this",
        ],
      },
    ],
  },
  {
    title: "Crew Trainer",
    role: "McDonald's",
    startdate: "2018",
    endDate: "2022",
    bulletpointLists: [
      {
        title: "Highlights:",
        points: [
          "Within the first year I received the employee of the month award and subsequently the employee of the quarter award (out of approx. 100 employees)",
        ],
      },
      {
        title: "Responsibilities:",
        points: [
          "Keeping the store clean and to a high standard",
          "Meeting time deadlines under pressure",
          "Communicating with the public",
          "Dealing with complaints and resolving issues",
          "Working within a team whilst still using my own initiative where appropriate",
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
