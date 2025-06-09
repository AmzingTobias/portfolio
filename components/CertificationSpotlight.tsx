import { cn } from "@/lib/utils";
import Image from "next/image";

export type ObtainedCert = {
  image: { src: any; alt: string };
  name: string;
  dateObtained?: Date;
  description: string;
};

const CertificationSpotlight: React.FC<{
  cert: ObtainedCert;
  index: number;
}> = ({ cert, index }) => {
  return (
    <div
      className={cn(
        "flex gap-8 items-center w-full",
        index % 2 ? "flex-row" : "flex-row-reverse"
      )}
    >
      <Image
        src={cert.image.src}
        width={180}
        height={180}
        alt={cert.image.alt}
      />
      <div className="flex flex-col p-4 font-medium">
        <h3 className="text-2xl">
          {cert.name} - {cert.description}
        </h3>
        {cert.dateObtained === undefined ? (
          <p className="text-lg font-bold text-secondary">*Working Towards</p>
        ) : (
          <p className="text-base text-secondary">
            Obtained: {cert.dateObtained.toLocaleDateString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default CertificationSpotlight;
