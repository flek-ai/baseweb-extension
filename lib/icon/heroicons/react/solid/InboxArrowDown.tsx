
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function InboxArrowDownIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "InboxArrowDown", size, color, overrides = {}, ...restProps } = props;
  const SvgOverride = mergeOverride(
    // Icons from the theme target the SVG override in the underlying Icon component
    {
      // @ts-ignore
      component: theme.icons ? theme.icons : null,
    },
    overrides && overrides.Svg ? toObjectOverride(overrides.Svg) : {}
  );
  return (
    <Icon
      viewBox="0 0 24 24"
      ref={ref}
      title={title}
      size={size}
      color={color}
      overrides={{ Svg: SvgOverride }}
      {...restProps}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.47812 5.55887C5.67178 4.92948 6.25329 4.5 6.91179 4.5H9C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3H6.91179C5.59478 3 4.43177 3.85897 4.04446 5.11774L1.63266 12.9561C1.54472 13.2419 1.5 13.5393 1.5 13.8383V18C1.5 19.6569 2.84315 21 4.5 21H19.5C21.1569 21 22.5 19.6569 22.5 18V13.8383C22.5 13.5393 22.4553 13.2419 22.3673 12.9561L19.9555 5.11774C19.5682 3.85897 18.4052 3 17.0882 3H15C14.5858 3 14.25 3.33579 14.25 3.75C14.25 4.16421 14.5858 4.5 15 4.5H17.0882C17.7467 4.5 18.3282 4.92948 18.5219 5.55887L20.7345 12.75H17.8906C16.7543 12.75 15.7155 13.392 15.2073 14.4084L14.9511 14.9208C14.697 15.429 14.1776 15.75 13.6094 15.75H10.3906C9.82242 15.75 9.30302 15.429 9.04894 14.9208L8.79271 14.4084C8.28453 13.392 7.24574 12.75 6.10942 12.75H3.26547L5.47812 5.55887Z" fill="#0F172A"/>
    </Icon>
  );
}

const InboxArrowDown = React.forwardRef<SVGSVGElement, IconProps>(InboxArrowDownIcon);
export { InboxArrowDown };
