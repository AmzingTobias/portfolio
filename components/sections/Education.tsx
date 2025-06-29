import Timeline, { TTimelineEvent } from "@/components/Timeline/Timeline";

const educationEvents: TTimelineEvent[] = [
  {
    title:
      "First Class Honours B.Sc Computer Science - Loughborough university",
    startdate: "October 2020",
    endDate: "June 2024",
    bulletpointLists: [
      {
        title: "",
        points: [
          "With Diploma in Professional Studies.",
          "Modules including: Cyber Security, Robotics, Data Mining & Machine Learning, Cloud Computing, Advanced Networking, Web Programming, Embedded Systems Programming, Object Oriented Programming.",
        ],
      },
    ],
  },
  {
    title: "Wymondham High Sixth Form",
    startdate: "September 2018",
    endDate: "June 2020",
    bulletpointLists: [
      {
        title: "A Level Grades",
        points: ["Computing – A", "Economics – B", "Mathematics – B"],
      },
    ],
  },
  {
    title: "Wymondham High Academy",
    startdate: "September 2013",
    endDate: "June 2018",
    bulletpointLists: [
      {
        title: "GCSE Grades",
        points: [
          "Computing – 9",
          "Mathematics – 8",
          "Science – 9 | 8",
          "History – 7",
          "Graphics – B",
          "English Literature – 6",
          "English Language – 5",
          "Sociology – C",
        ],
      },
    ],
  },
];

const Education = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="sm:px-2 md:px-4 md:py-2 lg:px-6 lg:py-4">
        <Timeline events={educationEvents} />
      </div>
    </div>
  );
};

export default Education;
