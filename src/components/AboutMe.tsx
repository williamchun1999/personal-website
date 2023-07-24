import { SetStateAction, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import {
  BiLogoTypescript,
  BiLogoNodejs,
  BiLogoAws,
  BiLogoReact,
  BiLogoPython,
} from "react-icons/bi";

import { LogoItem } from "./LogoItem"

export const AboutMe = () => {
  const slides = [
    {
      url: "https://source.unsplash.com/XEB8y0nRRP4",
    },
    {
      url: "https://source.unsplash.com/NYrVisodQ2M",
    },
    // {
    //   url: "https://source.unsplash.com/xzUnX1k-tq4",
    // },
  ];
  const text = [
    <div className="text-white">
      <h3 className="text-center sm:text-left mb-4 text-xl font-bold ">
        Programming
      </h3>
      <p>
        There are two main reasons for why I love coding: The continuous
        learning, and a stream of new problems. Coding satisfies my itch in
        constantly challenging myself to improve as in individual and to be in
        an industry with those of the same mindset.
      </p>
      <h4 className="text-center sm:text-left text-lg font-bold mt-8">
        Skills
      </h4>
      <ul className="flex gap-4  flex-wrap mt-4 text-xl w-full self-center text-white">
        <LogoItem LogoImage={BiLogoTypescript} text="TypeScript" />
        <LogoItem LogoImage={BiLogoReact} text="React" />
        <LogoItem LogoImage={BiLogoNodejs} text="NodeJS" />
        <LogoItem LogoImage={BiLogoAws} text="AWS" />
        <LogoItem LogoImage={BiLogoPython} text="Python" />
      </ul>
    </div>,
    <>
      <h3 className="text-center sm:text-left mb-4 text-xl font-bold ">
        Music
      </h3>
      <p>
        I always enjoyed music since I was young. Self-taught myself drums for
        my local church, joined my highschool choir, and always went karaoking
        with friends! Mostly listening to Western or Korean music, but always
        open to explore music from other countries. Follow my chill music
        playlist :)
      </p>
      <iframe
        src="https://open.spotify.com/embed/playlist/64Z0JvZXE8leOrPb8oQVCK?utm_source=generator&theme=0"
        className="w-full mt-8"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </>,
    <>
      <h3 className="text-center mb-4 text-xl font-bold">Mixology</h3>
    </>,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <section
      id="about"
      className="mt-32 flex w-full flex-col items-center justify-center bg-neutral-800 sm:border-2 sm:border-black sm:rounded-lg"
    >
      <h2 className="text-center text-3xl font-bold mt-4">About Me</h2>
      <div className="max-w-[1024px] h-[800px] w-full m-auto py-16 px-4 relative">
        <div className="relative w-full h-full">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-700 flex justify-center brightness-25"
          ></div>

          <div className="absolute top-[15%] sm:top-[10%] lg:top-1/4 mx-4 sm:mx-32 my-4 sm:my-8 flex flex-col z-10">
            {text[currentIndex]}
          </div>
        </div>

        {/* Left Arrow */}
        <div className="z-20 group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-light-blue/50 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="z-20 group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-light-blue/50 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
