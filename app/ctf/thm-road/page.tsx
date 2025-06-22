import RoadWalkthrough from "@/components/ctf-walkthroughs/Road";
import Section from "@/components/sections/Section";

export default function Home() {
  return (
    <Section
      id=""
      title="Road Walkthrough (TryHackMe)"
      children={<RoadWalkthrough />}
      datePosted={new Date("2025-06-17")}
    />
  );
}
