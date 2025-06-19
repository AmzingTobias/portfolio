import RoadWalkthrough from "@/components/ctf-walkthroughs/Road";
import Section from "@/components/sections/Section";

export default function Home() {
  return (
    <Section
      id=""
      title="Road Walkthrough (TryHackMe)"
      children={<RoadWalkthrough />}
    />
  );
}
