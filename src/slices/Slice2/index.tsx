import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Slice2`.
 */
export type Slice2Props = SliceComponentProps<Content.Slice2Slice>;

/**
 * Component for "Slice2" Slices.
 */
const Slice2 = ({ slice }: Slice2Props): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for slice2 (variation: {slice.variation}) Slices
    </section>
  );
};

export default Slice2;
