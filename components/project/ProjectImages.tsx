"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export interface IProjectImageProps {
  srcs: { alt: string; img: StaticImageData }[];
  width: number;
  height: number;
}

const ProjectImages: React.FC<IProjectImageProps> = ({ srcs, width, height }) => {
  const [current, setCurrent] = useState(0);
  const [dragStart, setDragStart] = useState<number | null>(null);

  if (srcs.length === 1) {
    return (
      <Image src={srcs[0].img} alt={srcs[0].alt} width={width} height={height} />
    );
  }

  const goTo = (index: number) => {
    if (index === current) return;
    setCurrent(index);
  };

  const prev = () => goTo((current - 1 + srcs.length) % srcs.length);
  const next = () => goTo((current + 1) % srcs.length);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  const handleDragStart = (clientX: number) => setDragStart(clientX);

  const handleDragEnd = (clientX: number) => {
    if (dragStart === null) return;
    const delta = dragStart - clientX;
    if (Math.abs(delta) > 50) delta > 0 ? next() : prev();
    setDragStart(null);
  };

  return (
    <div
      className="flex flex-col gap-3 outline-none"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div
        className="relative group cursor-grab active:cursor-grabbing select-none"
        style={{ aspectRatio: `${width}/${height}` }}
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseUp={(e) => handleDragEnd(e.clientX)}
        onMouseLeave={() => setDragStart(null)}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
      >
        {/*
          All images are rendered from mount so the browser fetches them all
          upfront. Navigation is then just an opacity toggle on already-loaded
          images — no loading gap, no blink.
        */}
        {srcs.map((src, i) => (
          <div
            key={i}
            className={cn(
              "absolute inset-0 transition-opacity duration-500",
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <Image
              src={src.img}
              alt={src.alt}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-contain"
              priority={i === 0}
              draggable={false}
            />
          </div>
        ))}

        {/* Prev button */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-background/75 hover:bg-background text-secondary border border-secondary/40 hover:border-secondary rounded-full p-1.5 transition-all duration-150 opacity-0 group-hover:opacity-100"
          aria-label="Previous image"
        >
          <RiArrowLeftSLine size={22} />
        </button>

        {/* Next button */}
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-background/75 hover:bg-background text-secondary border border-secondary/40 hover:border-secondary rounded-full p-1.5 transition-all duration-150 opacity-0 group-hover:opacity-100"
          aria-label="Next image"
        >
          <RiArrowRightSLine size={22} />
        </button>

        {/* Counter badge */}
        <div className="absolute bottom-2 right-2 z-20 bg-background/75 text-secondary text-xs px-2 py-0.5 rounded-full font-mono pointer-events-none">
          {current + 1} / {srcs.length}
        </div>
      </div>

      {/* Caption */}
      <p className="text-center text-sm text-secondary-foreground italic">
        {srcs[current].alt}
      </p>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2">
        {srcs.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={cn(
              "rounded-full transition-all duration-200",
              i === current
                ? "bg-secondary w-4 h-2"
                : "bg-secondary/30 hover:bg-secondary/60 w-2 h-2"
            )}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectImages;
