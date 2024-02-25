import Link from "next/link";
import { useState, useEffect } from 'react';
import { twMerge } from "tailwind-merge";

type ExpertiseProps = {
  data: Array<{
    icon: {
      url: string;
    };
    url?: string;
    title: string;
    info: string;
  }>;
};

export default function Expertise({ data }: ExpertiseProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust the delay time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`py-16 relative ${loading ? 'blur' : ''}`} id="expertise">
      {loading ? (
        <div className="w-full h-full flex items-center justify-center text-white">
		{data?.map((item, idx: number) => {
              	return (
	
          	<img
                        src={item.icon.url}
                        alt="experty/1"
                        width={26}
                        height={26}
                      />
		      )})}
        </div>
      ) : (
        <div className="container mx-auto px-4 relative z-10">
          <div>
            <h2 className="md:text-[42px] text-2xl md:leading-[50px] font-bold text-white text-center mb-5">
              Our <span className="grad"> Expertise</span>
            </h2>
          </div>
          <div className="bg-Gray rounded-[20px] mt-10 grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 overflow-hidden">
            {data?.map((item, idx: number) => {
              return (
                <Link
                  href={`${item?.url ?? "#"}`}
                  key={idx}
                  className={twMerge(
                    `relative flex flex-col md:flex-col-reverse group gap-4 py-6 px-8 md:py-14 md:px-16`,
                    idx % 2 === 0 && "bg-black/20"
                  )}
                >
                  <div className="w-full flex items-center justify-start">
                    <div className="w-[61px] h-[61px] bg-black flex items-center justify-center rounded-full">
                      <img
                        src={item.icon.url}
                        alt="experty/1"
                        width={26}
                        height={26}
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-base font-medium text-lightGray md:absolute md:opacity-0 group-hover:opacity-100 transition-opacity md:h-full md:w-full md:bg-transparent duration-300 md:top-0 md:left-0 md:p-4 md:grid md:place-items-center backdrop-blur-lg">
                    {item.info}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}

