import React from "react";
import Code from "@/components/Code";
import Link from "next/link";
import Image from "next/image";
import image1 from "@/public/mdtotsx/ValleyWalkthrough/image1.png";
import image2 from "@/public/mdtotsx/ValleyWalkthrough/image2.png";
import image3 from "@/public/mdtotsx/ValleyWalkthrough/image3.png";
import image4 from "@/public/mdtotsx/ValleyWalkthrough/image4.png";
import image5 from "@/public/mdtotsx/ValleyWalkthrough/image5.png";
import image6 from "@/public/mdtotsx/ValleyWalkthrough/image6.png";
import image7 from "@/public/mdtotsx/ValleyWalkthrough/image7.png";
import image8 from "@/public/mdtotsx/ValleyWalkthrough/image8.png";
import image9 from "@/public/mdtotsx/ValleyWalkthrough/image9.png";
import image10 from "@/public/mdtotsx/ValleyWalkthrough/image10.png";
import image11 from "@/public/mdtotsx/ValleyWalkthrough/image11.png";
import image12 from "@/public/mdtotsx/ValleyWalkthrough/image12.png";
import image13 from "@/public/mdtotsx/ValleyWalkthrough/image13.png";
import image14 from "@/public/mdtotsx/ValleyWalkthrough/image14.png";
import image15 from "@/public/mdtotsx/ValleyWalkthrough/image15.png";
import image16 from "@/public/mdtotsx/ValleyWalkthrough/image16.png";
import image17 from "@/public/mdtotsx/ValleyWalkthrough/image17.png";
import image18 from "@/public/mdtotsx/ValleyWalkthrough/image18.png";
import image19 from "@/public/mdtotsx/ValleyWalkthrough/image19.png";
import image20 from "@/public/mdtotsx/ValleyWalkthrough/image20.png";
import image21 from "@/public/mdtotsx/ValleyWalkthrough/image21.png";
import image22 from "@/public/mdtotsx/ValleyWalkthrough/image22.png";
import image23 from "@/public/mdtotsx/ValleyWalkthrough/image23.png";
import image24 from "@/public/mdtotsx/ValleyWalkthrough/image24.png";
import image25 from "@/public/mdtotsx/ValleyWalkthrough/image25.png";
import image26 from "@/public/mdtotsx/ValleyWalkthrough/image26.png";
import image27 from "@/public/mdtotsx/ValleyWalkthrough/image27.png";
import image28 from "@/public/mdtotsx/ValleyWalkthrough/image28.png";
import image29 from "@/public/mdtotsx/ValleyWalkthrough/image29.png";

const ValleyWalkthrough = () => {
  return (
    <>
  <p className='my-2'>Link: <Link href="https://tryhackme.com/room/valleype" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground underline hover:text-secondary-foreground/80 transition-colors duration-100">https://tryhackme.com/room/valleype</Link></p>
  <h1 className="text-2xl font-bold my-4 text-secondary text-center md:text-start">Port Scan</h1>
  <p className='my-2'>For port scanning, I'm going to conduct the initial scan with     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">rustscan</code>, and after the ports have been discovered,     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">rustscan</code> will past the discovered ports into     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">nmap</code> for server identification and to run the default scripts against these ports.</p>
  <Code language="bash" code={`rustscan -a 10.10.15.175 -- -A -sC -sV`} />
  <div className="flex justify-center my-4"><Image src={image1} alt="" unoptimized loading="eager" className="max-w-full h-auto" /></div>
  <p className='my-2'>The scan revealed 3 open ports:</p>
  <div className="overflow-x-auto my-4">
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">

      <thead>

        <tr>

          <th className="border px-4 py-2 bg-secondary-foreground/40 font-semibold">Port</th>
          <th className="border px-4 py-2 bg-secondary-foreground/40 font-semibold">Service</th>
          <th className="border px-4 py-2 bg-secondary-foreground/40 font-semibold">Version</th>

        </tr>

      </thead>
      <tbody>

        <tr>

          <td className="border px-4 py-2">22</td>
          <td className="border px-4 py-2">SSH</td>
          <td className="border px-4 py-2">OpenSSH 8.2p1 Ubuntu</td>

        </tr>
        <tr>

          <td className="border px-4 py-2">80</td>
          <td className="border px-4 py-2">HTTP</td>
          <td className="border px-4 py-2">Apache httpd 2.4.41</td>

        </tr>
        <tr>

          <td className="border px-4 py-2">37370</td>
          <td className="border px-4 py-2">FTP</td>
          <td className="border px-4 py-2">vsftpd 3.0.3</td>

        </tr>

      </tbody>

    </table>
  </div>
  <h1 className="text-2xl font-bold my-4 text-secondary text-center md:text-start">FTP Server</h1>
  <p className='my-2'>The first thing to check is the FTP server that's on a non default port, 37370. We can check this for anonymous access with the following command:</p>
  <Code language="" code={`ftp -P 37370 -a 10.10.15.175`} />
  <div className="flex justify-center my-4"><Image src={image2} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>However, the FTP Server doesn't seem to allow anonymous authentication.</p>
  <h1 className="text-2xl font-bold my-4 text-secondary text-center md:text-start">Web App</h1>
  <p className='my-2'>A web application exists on port 80 that we should turn our attention to next.</p>
  <div className="flex justify-center my-4"><Image src={image3} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>The site is very basic with no obvious places for user input. Therefore, we can start a content discovery scan while exploring the few areas of the site that are accessible.</p>
  <Code language="" code={`ffuf -ic -c -w /usr/share/wordlists/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt -e .php,.txt,.html -r -u http://10.10.15.175/FUZZ`} />
  <div className="flex justify-center my-4"><Image src={image4} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>    <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">static</code> is the path where images from the gallery are stored. We can start another scan at this directory with the following command:</p>
  <Code language="" code={`ffuf -ic -c -w /usr/share/wordlists/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt -e .php,.txt,.html -r -u http://10.10.15.175/static/FUZZ`} />
  <div className="flex justify-center my-4"><Image src={image5} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>From manual enumeration we should know that all the images are ranged from     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">1-18</code>. Therefore, the     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">00</code> is an outlier. Another way to identify this is because of the drastic difference in the content length of the response.</p>
  <p className='my-2'>We can navigate to this page to see what's stored there.</p>
  <Code language="" code={`curl http://10.10.15.175/static/00`} />
  <div className="flex justify-center my-4"><Image src={image6} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>The response of this points us to another path, that being     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">/dev1243224123123</code></p>
  <p className='my-2'><Link href="http://10.10.15.175/dev1243224123123" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground underline hover:text-secondary-foreground/80 transition-colors duration-100">http://10.10.15.175/dev1243224123123</Link></p>
  <div className="flex justify-center my-4"><Image src={image7} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>This dev link points to a login portal.</p>
  <p className='my-2'>Trying some default credentials here doesn't yield any results. However, when we inspect the page source we can see a JavaScript dependency called     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">dev.js</code>.</p>
  <div className="flex justify-center my-4"><Image src={image8} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>Inspecting this file (<Link href="http://10.10.15.175/dev1243224123123/dev.js" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground underline hover:text-secondary-foreground/80 transition-colors duration-100">http://10.10.15.175/dev1243224123123/dev.js</Link>) shows two pieces of information, those being some credentials and a link to a text file.</p>
  <div className="flex justify-center my-4"><Image src={image9} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>Accessing the text file mentioned yields the following information:</p>
  <Code language="bash" code={`curl http://10.10.15.175/dev1243224123123/devNotes37370.txt`} />
  <div className="flex justify-center my-4"><Image src={image10} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>The text file mentions that credentials are being re-used. Therefore, it's likely the discovered credentials can be used to access the FTP server on the non-default port.</p>
  <h1 className="text-2xl font-bold my-4 text-secondary text-center md:text-start">FTP Server</h1>
  <Code language="" code={`ftp -P 37370 siemDev@10.10.15.175`} />
  <div className="flex justify-center my-4"><Image src={image11} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>As expected, the discovered credentials allow access to the FTP Server.</p>
  <div className="flex justify-center my-4"><Image src={image12} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>The files inside of this FTP share are     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">pcapng</code> files which we can use Wireshark to inspect.</p>
  <p className='my-2'>To download these files we can use     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">prompt off</code> to stop the FTP server asking for confirmation, and then     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">mget *</code> to download all the files.</p>
  <h1 className="text-2xl font-bold my-4 text-secondary text-center md:text-start">Wireshark</h1>
  <p className='my-2'>Inside the     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">siemHTTP2.pcapng</code> file is a set of credentials that have been used inside of a HTTP POST request</p>
  <div className="flex justify-center my-4"><Image src={image13} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>We can test these credentials our on the SSH server.</p>
  <h1 className="text-2xl font-bold my-4 text-secondary text-center md:text-start">user.txt</h1>
  <Code language="bash" code={`ssh -o "UserKnownHostsFile=/dev/null" -o "StrictHostKeyChecking=no" valleyDev@10.10.15.175`} />
  <div className="flex justify-center my-4"><Image src={image14} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>Inside this current directory is the     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">user.txt</code> filag.</p>
  <Code language="bash" code={`cat user.txt`} />
  <div className="flex justify-center my-4"><Image src={image15} alt="" unoptimized className="max-w-full h-auto" /></div>
  <h1 className="text-2xl font-bold my-4 text-secondary text-center md:text-start">Privilege Escalation</h1>
  <p className='my-2'>Inspecting the contents of     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">/home</code> reveals a file called     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">valleyAuthenticator</code></p>
  <div className="flex justify-center my-4"><Image src={image16} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>To download this to our local machine to inspect it properly:</p>
  <Code language="" code={`scp -o "UserKnownHostsFile=/dev/null" -o "StrictHostKeyChecking=no" valleyDev@10.10.15.175:/home/valleyAuthenticator valleyAuthenticator `} />
  <div className="flex justify-center my-4"><Image src={image17} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>We can then run strings against this file to see if anything has been left inside</p>
  <Code language="" code={`strings valleyAuthenticator | head`} />
  <div className="flex justify-center my-4"><Image src={image18} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>The     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">UPX!</code> flag implies that the file has been obfuscated. To deobfuscate the file, we need to use the tool     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">upx</code></p>
  <Code language="bash" code={`upx -d valleyAuthenticator -o valleyAuthenticator-decompress`} />
  <div className="flex justify-center my-4"><Image src={image19} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>Running strings against this file</p>
  <Code language="" code={`strings valleyAuthenticator-decompress`} />
  <p className='my-2'>    <em>Note I saved the output to a file and then opened it in an editor</em></p>
  <div className="flex justify-center my-4"><Image src={image20} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>Above the area where it asks for your username and password are two MD5 hashes.</p>
  <Code language="" code={`e6722920bab2326f8217e4bf6b1b58ac
dd2921cc76ee3abfd2beb60709056cfb`} />
  <p className='my-2'>These can be decoded at <Link href="https://crackstation.net/" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground underline hover:text-secondary-foreground/80 transition-colors duration-100">https://crackstation.net/</Link></p>
  <div className="flex justify-center my-4"><Image src={image21} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>We know from the     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">/home</code> folder that     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">valley</code> is a user on the system.</p>
  <hr className="bg-secondary/50 my-8 h-0.5" />
  <p className='my-2'>We can try to access the     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">valley</code> account with SSH:</p>
  <Code language="" code={`ssh -o "UserKnownHostsFile=/dev/null" -o "StrictHostKeyChecking=no" valley@10.10.15.175`} />
  <div className="flex justify-center my-4"><Image src={image22} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>If we check for cronjobs with:</p>
  <Code language="bash" code={`cat /etc/crontab`} />
  <div className="flex justify-center my-4"><Image src={image23} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>We can see a cronjob that executes a python script every minute as root.</p>
  <div className="flex justify-center my-4"><Image src={image24} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>Checking the permissions of this file file shows that we don't have write permissions.</p>
  <div className="flex justify-center my-4"><Image src={image25} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>However, it's possible we may be able to tamper with the base64 library that is being imported.</p>
  <div className="flex justify-center my-4"><Image src={image26} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>The file to tamper can be found at     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">/usr/lib/python3.8/base64.py</code></p>
  <p className='my-2'>Since we have write permissions on this file, we have a path to root.</p>
  <p className='my-2'>To tamper with this file we can insert the following commands:</p>
  <Code language="python" code={`import os
os.system('chmod u+s /bin/bash')`} />
  <p className='my-2'>This will add the SUID bit to     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">/bin/bash</code>, which we can then use to gain access to a root shell.</p>
  <div className="flex justify-center my-4"><Image src={image27} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>    <em>I used       <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">nano</code> to edit the file.</em></p>
  <p className='my-2'>We then wait a minute for the cron job to run. After which we can run the following command to obtain the root shell:</p>
  <Code language="bash" code={`/bin/bash -p`} />
  <div className="flex justify-center my-4"><Image src={image28} alt="" unoptimized className="max-w-full h-auto" /></div>
  <h1 className="text-2xl font-bold my-4 text-secondary text-center md:text-start">root.txt</h1>
  <Code language="" code={`cat /root/root.txt`} />
  <div className="flex justify-center my-4"><Image src={image29} alt="" unoptimized className="max-w-full h-auto" /></div>
    </>
  );
};

export default ValleyWalkthrough;
