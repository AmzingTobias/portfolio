import ValleyWalkthrough from "@/components/ctf-walkthroughs/Valley";
import Section from "@/components/sections/Section";

export default function Home() {
  return (
    <Section
      id=""
      title="Valley Walkthrough (TryHackMe)"
      children={<ValleyWalkthrough />}
      datePosted={new Date("2025-06-26")}
    />
  );
}
