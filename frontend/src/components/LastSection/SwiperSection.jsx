"use client";

import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import images from "./lastSectionData";

const SwiperSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    setTimeout(() => {
      if (currentIndex !== images.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 2000);
  }, [currentIndex]);

  return (
    <section className="relative w-full max-w-[80%] max-h-[222px] md:max-h-[494px] mx-auto md:my-10 my-6">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out max-h-[222px] md:max-h-[494px]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full flex-shrink-0">
              <Image
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-auto object-cover"
                width={100}
              />
            </div>
          ))}
        </div>
      </div>
      {currentIndex !== 0 && (
        <button
          onClick={prevSlide}
          className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-white text-secondary font-bold p-2 rounded-full focus:outline-none"
        >
          <IoIosArrowBack />
        </button>
      )}
      {currentIndex !== images.length - 1 && (
        <button
          onClick={nextSlide}
          className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-white text-secondary font-bold p-2 rounded-full focus:outline-none"
        >
          <IoIosArrowForward />
        </button>
      )}
    </section>
  );
};

export default SwiperSection;
