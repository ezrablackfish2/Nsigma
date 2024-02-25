import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Slice1`.
 */
export type Slice1Props = SliceComponentProps<Content.Slice1Slice>;

/**
 * Component for "Slice1" Slices.
 */
const Slice1 = ({ slice }: Slice1Props): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for slice1 (variation: {slice.variation}) Slices
    </section>
  );
};

export default Slice1;
