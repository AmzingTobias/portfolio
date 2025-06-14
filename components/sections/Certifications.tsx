import CertificationSpotlight, {
  ObtainedCert,
} from "@/components/CertificationSpotlight";
import oscp from "@/public/certifications/oscp.png";
import oscpPlus from "@/public/certifications/oscp-plus.png";
import htbPenTesting from "@/public/certifications/HTB-Certified-Penetration-Testing-Specialist.webp";
import burpsuiteCertifiedPractioner from "@/public/certifications/BurpSuite-Certified-Practioner.svg";

const obtainedCertifications: ObtainedCert[] = [
  {
    image: { src: oscpPlus, alt: "OSCP+ Badge" },
    name: "OffSec Certified Professional+",
    dateObtained: new Date("2025-05-13"),
    description: "(OSCP+)",
  },
  {
    image: { src: oscp, alt: "OSCP Badge" },
    name: "Offensive Security Certified Professional",
    dateObtained: new Date("2025-05-13"),
    description: "(OSCP)",
  },
  // {
  //   image: { src: htbPenTesting, alt: "HTB CPTS Badge" },
  //   name: "HTB Certified Penetration Testing Specialist",
  //   dateObtained: undefined,
  //   description: "(HTB CPTS)",
  // },
  // {
  //   image: {
  //     src: burpsuiteCertifiedPractioner,
  //     alt: "Burp Suite Certified Practitioner Badge",
  //   },
  //   name: "Burp Suite Certified Practitioner",
  //   dateObtained: undefined,
  //   description: "(BSCP)",
  // },
];

const Certifications = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex w-full items-center">
        <div className="flex flex-col w-full max-w-10/12 mx-auto">
          {obtainedCertifications.map((cert, index) => (
            <div className="flex flex-col items-center" key={index}>
              <CertificationSpotlight cert={cert} index={index} />
              {index !== obtainedCertifications.length - 1 ? (
                <hr className="bg-secondary/50 my-8 h-0.5 w-3/4"></hr>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
