import { cn } from "@/lib/utils";
import Image from "next/image";

export type ObtainedCert = {
  image: { src: any; alt: string };
  name: string;
  dateObtained?: Date;
  expires?: Date;
  abbreviation: string;
};

const CertificationSpotlight: React.FC<{
  cert: ObtainedCert;
  index: number;
}> = ({ cert, index }) => {
  return (
    <div
      className={cn(
        "flex gap-2 md:gap-8 items-center w-full flex-col",
        index % 2 ? "lg:flex-row" : "lg:flex-row-reverse"
      )}
    >
      <Image
        src={cert.image.src}
        width={180}
        height={180}
        alt={cert.image.alt}
      />
      <div className="flex flex-col p-4 gap-2 font-medium items-center lg:items-baseline lg:text-start text-center">
        <h3 className="text-2xl">
          {cert.name} <span className="font-semibold">{cert.abbreviation}</span>
        </h3>
        {cert.dateObtained === undefined ? (
          <p className="text-lg font-bold text-secondary-foreground">
            *Working Towards
          </p>
        ) : (
          <p className="text-base text-secondary-foreground flex flex-col gap-1 lg:gap-2 items-center-safe lg:items-start justify-between">
            Obtained: {cert.dateObtained.toLocaleDateString("en-GB")}
            {cert.expires !== undefined &&
            cert.expires.valueOf() < Date.now() ? (
              <span className="text-secondary">
                Expired: {cert.expires.toLocaleDateString("en-GB")}
              </span>
            ) : (
              ""
            )}
          </p>
        )}
      </div>
    </div>
  );
};

export default CertificationSpotlight;
