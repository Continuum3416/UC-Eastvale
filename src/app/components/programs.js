import { useState } from "react";
import { programImages } from "../data/programs";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function ProgramSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % programImages.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? programImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="mt-12 w-full flex flex-col items-center px-1">
      {/* Maintain 16:9 Aspect Ratio using padding-top hack */}
      <div className="relative w-full max-w-4xl aspect-video overflow-hidden rounded shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{
            width: `${programImages.length * 100}%`,
            transform: `translateX(-${(100 / programImages.length) * current}%)`,
          }}
        >
          {programImages.map((img, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 flex items-center justify-center bg-white"
              style={{ width: `${100 / programImages.length}%` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 shadow hover:bg-gray-100 z-10"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 shadow hover:bg-gray-100 z-10"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Caption */}
      <div className="mt-4 text-center text-lg text-gray-700 max-w-xl">
        {programImages[current].caption}
      </div>
    </div>
  );
}
