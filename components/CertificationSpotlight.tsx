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
          {cert.name} <span className="font-semibold">{cert.abbreviation}</span>
        </h3>
        {cert.dateObtained === undefined ? (
          <p className="text-lg font-bold text-secondary-foreground">
            *Working Towards
          </p>
        ) : (
          <p className="text-base text-secondary-foreground flex flex-row gap-4 items-center-safe justify-between">
            Obtained: {cert.dateObtained.toLocaleDateString()}
            {cert.expires !== undefined &&
            cert.expires.valueOf() < Date.now() ? (
              <span className="text-secondary">
                Expired: {cert.expires.toLocaleDateString()}
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
