import { useEffect, useState } from "react";
import { Variants, motion, useAnimation } from "framer-motion";
import CustomLink from "./CustomLink";
import Link from "next/link"

const variantsLeft: Variants = {
  initial: {
    opacity: 0,
    y: 0,
    x: "-100%",
    transition: {
      duration: 0,
    },
  },
  slide: {
    opacity: 1,
    x: "0%",
    transition: {
      duration: 3.5,
    },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: { duration: 1.5 },
  },
};

const variantsRight: Variants = {
  initial: {
    opacity: 0,
    y: 0,
    x: "100%",
    transition: {
      duration: 0,
    },
  },
  slide: {
    opacity: 1,
    x: "0%",
    transition: {
      duration: 3.5,
    },
  },
  stay: {
	opacity: 1,
	x: "0%",
	transition : {
	   duration: 2,
	},
  },

  exit: {
    opacity: 0,
    y: 100,
    transition: { duration: 1.5 },
  },
};

type QuestionsProps = {
  data: Array<{
    title: string;
    answer: string;
  }>;
};

function Questions({ data }: QuestionsProps) {
  const [offset, setOffset] = useState(0);
  const controls = useAnimation();
  const repeatDelay = 12000;

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const show = () => {
      interval = setInterval(async () => {
        setOffset((prev) => (prev + 1) % data.length);
	try {
        await controls.start("initial");
        await controls.start("slide");
	await controls.start("stay");
	setTimeout(async () => {
          await controls.start("exit");
        }, 3000);
	}
	catch (error) {
	}
      }, repeatDelay);

      
    };
    show();

	

    return () => clearInterval(interval);
  }, [controls, repeatDelay, data.length]);

  return (
    <div className="w-full gap-4 flex items-center justify-center flex-col">
    <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/44973111.js"></script>
      <h2 className="text-white mt-5 text-lg md:text-3xl font-normal">
        <img
          src="/images/logo.png"
          alt="logo"
          width={187}
          height={57}
          className="z-50 -mt-1 inline-block max-w-28 md:max-w-none"
        />
        : Elevate Your Business With Custom Data and AI solutions
      </h2>
      <Link href="/contact-us" 
      	      className="text-white bg-custm_pink min-w-[165px] text-center rounded-xl hover:scale-105 transition-transform duration-200 p-2 font-normal"
	      style={{fontWeight: '999', padding: '20px', fontSize: '25px'}}>
        Get Started
      </Link>
      <div className="overflow-hidden relative">
        <span className="opacity-0">{data[offset].title}</span>
        <motion.div
          variants={variantsLeft}
          initial="slide"
          animate={controls}
          className="absolute top-0"
        >
          {data[offset].title}
        </motion.div>
      </div>
      <div className="overflow-hidden relative">
        <span className="opacity-0">{data[offset].answer}</span>
        <motion.div
          variants={variantsRight}
          initial="slide"
          animate={controls}
          className="absolute top-0"
        >
          {data[offset].answer}
        </motion.div>
      </div>
    </div>
  );
}
export default Questions;
