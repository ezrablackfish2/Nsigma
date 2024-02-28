import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";


/**
 * Props for `Slice2`.
 */
export type Slice2Props = SliceComponentProps<Content.Slice2Slice>;

/**
 * Component for "Slice2" Slices.
 */
const Slice2 = ({ slice }: Slice2Props): JSX.Element => {
	const { title, image } = slice.primary;
	const Id = title?.[0]?.type === "paragraph" ? title[0].text : " ";
  return (
    <section id={Id} className="w-full py-20">
      <div className="text-white gap-4 text-center flex-col w-full bg-customNeutral px-4 flex items-center justify-center py-20">
        <div className="text-4xl md:text-6xl pb-4 font-bold title">
          <PrismicRichText field={title} />
        </div>
        <img
              src={(image as { url: string | undefined })?.url}
            />

      </div>
    </section>
  );
};

export default Slice2;
