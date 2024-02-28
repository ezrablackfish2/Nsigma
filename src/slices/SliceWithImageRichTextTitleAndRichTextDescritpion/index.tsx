import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `Slice3`.
 */
export type Slice3Props = SliceComponentProps<Content.Slice3Slice>;

/**
 * Component for "Slice3" Slices.
 */
const Slice3 = ({ slice }: Slice3Props): JSX.Element => {
	const { title, image, rich_text } = slice.primary;
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
	<div className="richtext" style={{ color: "#ffffff" }}>
          <PrismicRichText field={rich_text} />
        </div>
      </div>

    </section>
  );
};

export default Slice3;
