const getMyAge = (): number => {
  const currentDate = new Date();
  const birthdayDate = new Date("2002-06-27");
  const timeDifference = currentDate.getTime() - birthdayDate.getTime();
  // Calculate the number of years by dividing milliseconds by milliseconds per year
  const yearsPassed = Math.floor(timeDifference / 31536000000);
  return yearsPassed;
};

const AboutMe = () => {
  return (
    <div className="flex flex-col gap-4">
      <p>
        Hi, my name is Tobias. I'm {getMyAge()} years old and am currently
        working full time as a Security Consultant delivering penetration
        testing services. I have experience testing web applications and
        external infrastructure. Recently I obtained my OSCP qualification and
        will soon begin conducting internal infrastructure work for clients.
      </p>
      <p>
        I'm hard working, dedicated and focused, my manager during my placement
        year described my work ethic as "exceptional". I've always had a passion
        for technology. When I was 5-years-old, I bought a trampoline with my
        parents' eBay account (I didn't get to keep it). I've known since
        starting high school that I wanted a career that had strong ties to
        technology.
      </p>
      <p>
        In my spare time I enjoy working through CTFs and writing up
        walkthroughs to help others. I also have a passion for programming and
        will often create applications designed to help me with mundane tasks,
        such as my PriceScraper application which notifies me about price
        changes for video games.
      </p>
      <p>
        Although my passion is technology, I also have a strong interest in
        economics and business. I keep up-to-date with the stock market and
        follow the news regularly to stay informed with what's happening around
        the world.
      </p>
      <p>
        My hobbies include gaming, watching films, working out and hanging out
        with my friends and family. I'm passionate about F1 (Mercedes), I watch
        on average about 85%+ of the races at their air time across a season,
        including the early morning races. I will occasionally play golf and
        have an interest in Football, supporting my home team Norwich City.
      </p>
    </div>
  );
};

export default AboutMe;
