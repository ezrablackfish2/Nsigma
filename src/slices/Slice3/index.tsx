import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Slice3`.
 */
export type Slice3Props = SliceComponentProps<Content.Slice3Slice>;

/**
 * Component for "Slice3" Slices.
 */
const Slice3 = ({ slice }: Slice3Props): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for slice3 (variation: {slice.variation}) Slices
    </section>
  );
};

export default Slice3;
