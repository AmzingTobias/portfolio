import Timeline, { TTimelineEvent } from "@/components/Timeline/Timeline";

const experienceEvents: TTimelineEvent[] = [
  {
    role: "Associate Security Consultant",
    location: "LRQA",
    startdate: "September 2024",
    endDate: "Current",
    bulletpointLists: [],
  },
  {
    role: "Software Engineer Industrial placement",
    location: "BAE Systems",
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
    role: "Crew Trainer",
    location: "McDonald's",
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
  {
    role: "Work experience",
    location: "Accumulate Wealth Management Ltd",
    startdate: "2019",
    details:
      "This was a second job alongside McDonald's that allowed me to help save for a car, which gave me more flexibility in my working times at McDonald's",
    bulletpointLists: [
      { title: "Responsibilities:", points: ["General administration work"] },
    ],
  },
  {
    role: "Work experience",
    location: "ECS Digital, London",
    startdate: "2019",
    endDate: "Between GCSEs and Sixth form",
    bulletpointLists: [
      {
        title: "Highlights: ",
        points: [
          "Developing new skills",
          "Adjusting to a change of life working in London",
          "Communicating with a new team",
        ],
      },
    ],
  },
  {
    role: "Voluntary work",
    location: "People for Animal Care Trust (PACT)",
    startdate: "2017",
    bulletpointLists: [
      {
        title: "Responsibilities:",
        points: [
          "Caring for animals",
          "Cleaning pens",
          "Using my own initiative and dealing with members of the public",
          "Completing tasks in a set time and under pressure",
        ],
      },
    ],
  },
];

const Experience = () => {
  return (
    <div className="flex flex-col gap-4">
      <Timeline events={experienceEvents} />
    </div>
  );
};

export default Experience;
