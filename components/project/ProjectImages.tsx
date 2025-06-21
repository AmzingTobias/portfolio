"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

export interface IProjectImageProps {
  srcs: { alt: string; img: StaticImageData }[];
  width: number;
  height: number;
}

const ProjectImages: React.FC<IProjectImageProps> = ({
  srcs,
  width,
  height,
}) => {
  const [api, setApi] = useState<CarouselApi>();

  if (srcs.length === 1) {
    return (
      <Image
        src={srcs[0].img}
        alt={srcs[0].alt}
        width={width}
        height={height}
      />
    );
  }

  return (
    <Carousel opts={{ loop: true }} setApi={setApi}>
      <CarouselContent>
        {srcs.map((img_to_display, index) => (
          <CarouselItem key={index}>
            <Image
              loading="eager"
              priority
              src={img_to_display.img}
              alt={img_to_display.alt}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden sm:block">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};
export default ProjectImages;
