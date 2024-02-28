import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from '@prismicio/next'




/**
 * Props for `Slice1`.
 */
export type Slice1Props = SliceComponentProps<Content.Slice1Slice>;

/**
 * Component for "Slice1" Slices.
 */
const Slice1 = ({ slice }: Slice1Props): JSX.Element => {
	const { image } = slice.primary;
  return (
    <section className="w-full py-20">
      <div className="text-white gap-4 text-center flex-col w-full bg-customNeutral px-4 flex items-center justify-center py-20">
        <img
              src={(image as { url: string | undefined })?.url}
            />

      </div>
    </section>
  );
};

export default Slice1;
