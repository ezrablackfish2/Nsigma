import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MultipleSlice`.
 */
export type MultipleSliceProps =
  SliceComponentProps<Content.MultipleSliceSlice>;

/**
 * Component for "MultipleSlice" Slices.
 */
const MultipleSlice = ({ slice }: MultipleSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for multiple_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default MultipleSlice;
