import { useEffect, useRef, useState } from 'react';

type CarouselProps = {
  images: string[];
  interval?: number; // time between slides
  transitionSpeed?: number; // fade duration
};

export default function Carousel({
  images,
  interval = 3000,
  transitionSpeed = 500,
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Preload all images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      triggerFade(() => {
        setIndex((i) => (i + 1) % images.length);
      });
    }, interval);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, [images.length, interval]);

  const triggerFade = (updateIndex: () => void) => {
    setFade(true);
    setTimeout(() => {
      updateIndex();
      setFade(false);
    }, transitionSpeed);
  };

  const prevImage = () => {
    stopAutoSlide();
    triggerFade(() => {
      setIndex((index - 1 + images.length) % images.length);
    });
    startAutoSlide();
  };

  const nextImage = () => {
    stopAutoSlide();
    triggerFade(() => {
      setIndex((index + 1) % images.length);
    });
    startAutoSlide();
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto my-12 overflow-hidden">
      <div className="w-full h-auto">
        <img
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className={`rounded-lg shadow-lg w-full transition-opacity ease-in-out ${
            fade ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            transitionDuration: `${transitionSpeed}ms`,
            maxHeight: '80vh',  // limits height so it fits in viewport on landscape phones
            width: '100%',      // max width fills container
            height: 'auto',     // keep aspect ratio
            objectFit: 'contain', // no cropping, letterbox if needed
          }}
        />
      </div>

      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2">
        <button
          onClick={prevImage}
          className="bg-black bg-opacity-50 text-white px-3 py-1 rounded"
        >
          &larr;
        </button>
        <button
          onClick={nextImage}
          className="bg-black bg-opacity-50 text-white px-3 py-1 rounded"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}
