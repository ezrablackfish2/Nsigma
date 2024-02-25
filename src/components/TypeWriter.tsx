import React, { MutableRefObject, useState, useEffect, useRef } from "react";
import styles from "./TypeWriter.module.css";
import Typed from 'typed.js';
import { gsap, Linear, TimelineMax } from "gsap";

const TYPED_STRINGS: string[] = ["Driven ", "Informed ", "Dependent ", "Powered ", "Enhanced "];

const HERO_STYLES = {
  SECTION:
    "w-full flex md:items-center py-8 section-container min-h-screen relative mb-24",
  CONTENT: "font-medium flex flex-col pt-32 md:pt-0 select-none",
  SOCIAL_LINK: "link hover:opacity-80 duration-300 md:mr-4 mr-2",
  BG_WRAPPER:
    "absolute hero-bg right-0 md:bottom-0 bottom-8 -z-1 md:w-3/4 w-full scale-125 sm:scale-100 transform-gpu flex items-end",
  TYPED_SPAN: styles.textXl,
};

const WordDisplay = React.memo(() => {
  const typedSpanElement = useRef<HTMLSpanElement>(null);
  const targetSection = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [currentWord, setCurrentWord] = useState<string>("");
  const [isPause, setIsPause] = useState<boolean>(false);
  const [animationClass, setAnimationClass] = useState<string>("fade-in");
  const words: string[] = ["Driven ", "Informed ", "Dependent ", "Powered ", "Enhanced "];

  const initTypeAnimation = (
    typedSpanElement: MutableRefObject<HTMLSpanElement | null>
  ): Typed => {
    return new Typed(typedSpanElement.current!, {
      strings: TYPED_STRINGS,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 8000,
      loop: true,
    });
  };

  const initRevealAnimation = (
    targetSection: MutableRefObject<HTMLDivElement | null>
  ): TimelineMax => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    if (targetSection.current) {
      revealTl
        .to(targetSection.current, { opacity: 1, duration: 2 })
        .from(
          targetSection.current.querySelectorAll(".seq"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );
    }
    return revealTl;
  };

  useEffect(() => {
    const typed = initTypeAnimation(typedSpanElement);
    initRevealAnimation(targetSection);

    return () => {
      typed.destroy();
    };
  }, [typedSpanElement, targetSection]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPause) {
        setCurrentWord((prevWord) => {
          if (charIndex < words[index].length) {
            setCharIndex((prevCharIndex) => prevCharIndex + 1);
            return prevWord + words[index][charIndex];
          } else {
            setCharIndex(0);
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
            setIsPause(true);
            setAnimationClass("fade-out");
            return "";
          }
        });
      }
    }, 170); // Adjust speed as needed

    const pauseIntervalId = setInterval(() => {
      setIsPause(false);
      setAnimationClass("fade-in");
    }, 0); // Adjust pause duration as needed

    return () => {
      clearInterval(intervalId); // Clean up on unmount
      clearInterval(pauseIntervalId); // Clean up on unmount
    };
  }, [index, charIndex, isPause, words]);

  return (
    <>
      <p className="inline-block grad">
        <span className={HERO_STYLES.TYPED_SPAN} ref={typedSpanElement}></span>
      </p>
    </>
  );
});

export default WordDisplay;

