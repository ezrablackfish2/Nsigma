import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Slice4`.
 */
export type Slice4Props = SliceComponentProps<Content.Slice4Slice>;

/**
 * Component for "Slice4" Slices.
 */
const Slice4 = ({ slice }: Slice4Props): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for slice4 (variation: {slice.variation}) Slices
    </section>
  );
};

export default Slice4;
