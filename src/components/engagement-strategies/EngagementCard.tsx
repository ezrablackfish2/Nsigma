import { useState, useEffect } from 'react';

type EngagementCardProps = {
  image: { url: string };
  info: string;
  title: string;
};

const EngagementCard = ({ image, info, title }: EngagementCardProps) => {
  const [loading, setLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Check if window is defined to avoid server-side rendering issues
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  useEffect(() => {
    // Simulate data fetching delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000); // Adjust the delay time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`w-full sm:h-[400px] xl:w-[400px] bg-transparent cursor-pointer group  lg:perspective-1000 ${
        loading ? 'blur' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {loading ? (
        <div className="w-full h-full flex items-center justify-center text-neutral-300">
  	<img
            src={image?.url}
            alt={title}
            className="hidden lg:block p-1 rounded-2xl absolute w-full h-full top-0 left-0 right-0 bottom-0"
          />
        </div>
      ) : (
        <div
          className={`relative w-full h-full lg:preserve-3d duration-1000 ${
            isHovered && (windowWidth > 1023) ? 'rotate-y-180' : ''
          }`}
        >
          <img
            src={image?.url}
            alt={title}
            className="hidden lg:block p-1 rounded-2xl absolute w-full h-full top-0 left-0 right-0 bottom-0"
          />
          <div className="font-bold px-4 text-3xl bottom-4 hidden lg:block absolute text-neutral-300">
            {title}
          </div>
          <div className="sm:absolute rounded-2xl lg:rotate-y-180 w-full h-full flex flex-col items-center justify-center gap-4 py-4 bg-[#272932]  overflow-hidden p-4 xl:p-10 text-neutral-300 lg:backface-hidden">
            <div className="font-bold text-3xl block lg:hidden text-center">
              {title}
            </div>
            <div className="flex flex-col space-y-5">{info}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EngagementCard;

