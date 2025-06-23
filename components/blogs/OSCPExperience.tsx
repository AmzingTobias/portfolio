import React from "react";
import Code from "@/components/Code";
import Link from "next/link";

const OSCPExperience = () => {
  return (
    <>
  <p className='my-2'>It took me just under six months from starting my OSCP training to passing the exam. Through my work, I was fortunate to receive access to the 90-day PEN-200 course and an exam voucher. While the OSCP course content is solid, it's important to understand that it doesn’t fully represent what you might encounter during the actual exam.</p>
  <p className='my-2'>Once my lab access ended, I subscribed to OffSec’s Proving Grounds and other community-recommended platforms to keep practicing. That extra effort proved essential in helping me pass.</p>
  <h2 className="text-xl font-semibold my-3 text-secondary text-center md:text-start">Final Push Before the Exam</h2>
  <p className='my-2'>With less than a month to go before my scheduled exam date, I felt like I needed one final push. I decided to purchase the 30-day extension, mainly because I hadn't completed all of the Challenge Labs during my original 90 days.</p>
  <p className='my-2'>Frustratingly, OffSec doesn’t offer standalone access to the Challenge Labs, they’re bundled with the full PEN-200 course content. I understand the business reasoning, but from a consumer’s point of view, this felt restrictive.</p>
  <h2 className="text-xl font-semibold my-3 text-secondary text-center md:text-start">My Exam Strategy and Execution</h2>
  <p className='my-2'>I booked my exam for a 10:00 AM slot. I chose this time so I could sleep in, be well-rested, and have plenty of daylight hours to work. It also gave me a small buffer the next morning in case I needed extra time to finish any of the machines.</p>
  <h3 className="text-lg font-medium my-2 text-secondary text-center md:text-start">What I Achieved</h3>
  <p className='my-2'>Within 7.5 hours, I had gathered enough flags to pass. However, after that point I wasn't able to obtain another flag. Here’s what I accomplished:</p>
  <ul className="ml-6 my-2 list-disc space-y-1">

    <li>Fully compromised the Active Directory environment</li>
    <li>Fully compromised one standalone machine</li>
    <li>Retrieved the       <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">local.txt</code> flag on another standalone machine</li>

  </ul>
  <p className='my-2'>This left me with:</p>
  <ul className="ml-6 my-2 list-disc space-y-1">

    <li>One box where I couldn’t gain initial access</li>
    <li>One where I got access but failed to escalate privileges</li>

  </ul>
  <h2 className="text-xl font-semibold my-3 text-secondary text-center md:text-start">Lessons Learned the Hard Way</h2>
  <h3 className="text-lg font-medium my-2 text-secondary text-center md:text-start">Don’t Trust Your Tools Blindly</h3>
  <p className='my-2'>On the box where I failed to escalate privileges, I found a file that had piqued my interest. I opened it with a program I’ve used for years (even before getting into cybersecurity), and it appeared empty. Running     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">strings</code> returned barely anything useful.</p>
  <p className='my-2'>Only after the exam did I test it using an online viewer and it opened perfectly. I also realized that simply running     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">cat</code> on the file would have shown the information I needed.  </p>
  <p className='my-2'>Lesson: Even if a tool has always worked for you, don’t assume it’s infallible. Always double-check using alternative methods.</p>
  <h3 className="text-lg font-medium my-2 text-secondary text-center md:text-start">Don’t Tunnel Vision</h3>
  <p className='my-2'>On the box where I couldn’t get in at all, I ignored trying default credentials. I had been misled by a honeypot and focused too long on the wrong path.</p>
  <p className='my-2'>Lesson: If you're banging your head against a wall, take a step back. Make a checklist of things to try, sometimes the simplest techniques (like default creds) are the key.</p>
  <h2 className="text-xl font-semibold my-3 text-secondary text-center md:text-start">Tools &amp; Tips That Made a Difference</h2>
  <h3 className="text-lg font-medium my-2 text-secondary text-center md:text-start">Ligolo-ng</h3>
  <p className='my-2'>This isn’t covered in the PEN-200 course, but it’s incredibly useful for port tunnelling and pivoting into an Active Directory environment. I highly recommend learning it.</p>
  <h3 className="text-lg font-medium my-2 text-secondary text-center md:text-start">script</h3>
  <p className='my-2'>This handy tool logs your terminal session. I used it during the exam to track every command and output. After the exam, I could     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">cat</code> the script file to review everything which was super helpful for writing the report.</p>
  <p className='my-2'>Despite using     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">script</code>, I still made sure to take screenshots of every step, especially of flags and exploitation commands. Think of     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">script</code> as your backup, not your primary evidence.</p>
  <h2 className="text-xl font-semibold my-3 text-secondary text-center md:text-start">Reporting</h2>
  <p className='my-2'>As a professional penetration tester, I’m comfortable with report writing. But even if you’re not, you can set yourself up for success by collecting solid evidence throughout the exam.</p>
  <ul className="ml-6 my-2 list-disc space-y-1">

    <li>Take screenshots often, especially of critical moments.</li>
    <li>Use the       <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">script</code> tool to record terminal sessions.</li>
    <li>Create separate folders for each box to stay organized.</li>

  </ul>
  <p className='my-2'>Remember: if it’s not in the report, it didn’t happen.</p>
  <h2 className="text-xl font-semibold my-3 text-secondary text-center md:text-start">Passing and Looking Ahead</h2>
  <p className='my-2'>I submitted my exam report and heard back in just over 24 hours I had officially passed the OSCP!</p>
  <p className='my-2'>While I’m proud of the result, I’m still slightly disappointed I didn’t get all the flags. That’s why I’ve already started preparing for my next certification: Hack The Box’s CPTS. From what I’ve heard, CPTS is a harder exam technically, even if OSCP carries more industry weight.</p>
  <h2 className="text-xl font-semibold my-3 text-secondary text-center md:text-start">Final Thoughts &amp; Advice</h2>
  <p className='my-2'>Here are my closing tips for anyone on the OSCP journey:</p>
  <ul className="ml-6 my-2 list-disc space-y-1">

    <li>Think critically - don’t get stuck on one idea.</li>
    <li>Learn tools like Ligolo-ng, even if they aren’t in the syllabus, just make sure they adhere to the exam rules</li>
    <li>Document everything - screenshots +       <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">script</code> = strong report.</li>
    <li>Try the basics first - default creds, misconfigs, etc.</li>
    <li>Use checklists to stay on track during the exam.</li>

  </ul>
    </>
  );
};

export default OSCPExperience;
