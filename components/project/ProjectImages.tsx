"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { RiArrowLeftSLine, RiArrowRightSLine, RiCloseLine } from "react-icons/ri";

export interface IProjectImageProps {
  srcs: { alt: string; img: StaticImageData }[];
  width: number;
  height: number;
}

const ProjectImages: React.FC<IProjectImageProps> = ({ srcs, width, height }) => {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [dragStart, setDragStart] = useState<{ x: number; dragged: boolean } | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const goTo = (index: number) => {
    if (index === current) return;
    setCurrent(index);
  };

  const prev = () => goTo((current - 1 + srcs.length) % srcs.length);
  const next = () => goTo((current + 1) % srcs.length);

  // Keyboard navigation for both the carousel and lightbox
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxOpen && e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, current]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxOpen]);

  if (srcs.length === 1) {
    return (
      <Image src={srcs[0].img} alt={srcs[0].alt} width={width} height={height} />
    );
  }

  const handleTouchStart = (clientX: number) => setTouchStart(clientX);

  const handleTouchEnd = (clientX: number) => {
    if (touchStart === null) return;
    const delta = touchStart - clientX;
    if (Math.abs(delta) > 50) delta > 0 ? next() : prev();
    setTouchStart(null);
  };

  return (
    <>
      <div
        className="flex flex-col gap-3 outline-none"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") prev();
          if (e.key === "ArrowRight") next();
        }}
      >
        <div
          className="relative group cursor-grab active:cursor-grabbing select-none"
          style={{ aspectRatio: `${width}/${height}` }}
          onMouseDown={(e) => setDragStart({ x: e.clientX, dragged: false })}
          onMouseMove={(e) => {
            if (dragStart && Math.abs(e.clientX - dragStart.x) > 5)
              setDragStart({ ...dragStart, dragged: true });
          }}
          onMouseUp={(e) => {
            if (!dragStart) return;
            const delta = dragStart.x - e.clientX;
            if (!dragStart.dragged) setLightboxOpen(true);
            else if (Math.abs(delta) > 50) delta > 0 ? next() : prev();
            setDragStart(null);
          }}
          onMouseLeave={() => setDragStart(null)}
          onTouchStart={(e) => handleTouchStart(e.touches[0].clientX)}
          onTouchEnd={(e) => handleTouchEnd(e.changedTouches[0].clientX)}
        >
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
            onMouseDown={(e) => e.stopPropagation()}
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-background/75 hover:bg-background text-secondary border border-secondary/40 hover:border-secondary rounded-full p-1.5 transition-all duration-150 opacity-0 group-hover:opacity-100 cursor-pointer"
            aria-label="Previous image"
          >
            <RiArrowLeftSLine size={22} />
          </button>

          {/* Next button */}
          <button
            onMouseDown={(e) => e.stopPropagation()}
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-background/75 hover:bg-background text-secondary border border-secondary/40 hover:border-secondary rounded-full p-1.5 transition-all duration-150 opacity-0 group-hover:opacity-100 cursor-pointer"
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

      {/* Lightbox — portalled to document.body to escape any stacking context */}
      {lightboxOpen && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center animate-in fade-in duration-200"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all duration-150 cursor-pointer"
            aria-label="Close"
          >
            <RiCloseLine size={24} />
          </button>

          {/* Image */}
          <div
            className="relative flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={srcs[current].img}
              alt={srcs[current].alt}
              width={width}
              height={height}
              style={{ maxWidth: "90vw", maxHeight: "90vh", width: "auto", height: "auto" }}
              className="object-contain"
            />
          </div>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all duration-150 cursor-pointer"
            aria-label="Previous image"
          >
            <RiArrowLeftSLine size={28} />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all duration-150 cursor-pointer"
            aria-label="Next image"
          >
            <RiArrowRightSLine size={28} />
          </button>

          {/* Caption + counter */}
          <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-1 pointer-events-none">
            <p className="text-secondary-foreground text-sm italic">{srcs[current].alt}</p>
            <p className="text-secondary-foreground/50 text-xs font-mono">{current + 1} / {srcs.length}</p>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default ProjectImages;
