import EmailAliasses from "@/components/blogs/EmailAliasses";
import Section from "@/components/sections/Section";

export default function Home() {
  return (
    <Section
      id=""
      title="Why you should be using email address aliases"
      children={<EmailAliasses />}
    />
  );
}
