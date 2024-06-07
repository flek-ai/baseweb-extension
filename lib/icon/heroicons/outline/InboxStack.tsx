
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function InboxStackIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "InboxStack", size, color, overrides = {}, ...restProps } = props;
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
      <path fill="none" d="M7.875 14.25L9.08906 16.1925C9.50022 16.8504 10.2213 17.25 10.9971 17.25H13.0029C13.7787 17.25 14.4998 16.8504 14.9109 16.1925L16.125 14.25M2.40961 9H7.04584C7.79813 9 8.50065 9.37598 8.91795 10.0019L9.08205 10.2481C9.49935 10.874 10.2019 11.25 10.9542 11.25H13.0458C13.7981 11.25 14.5007 10.874 14.9179 10.2481L15.0821 10.0019C15.4993 9.37598 16.2019 9 16.9542 9H21.5904M2.40961 9C2.30498 9.2628 2.25 9.54503 2.25 9.83233V12C2.25 13.2426 3.25736 14.25 4.5 14.25H19.5C20.7426 14.25 21.75 13.2426 21.75 12V9.83233C21.75 9.54503 21.695 9.2628 21.5904 9M2.40961 9C2.50059 8.77151 2.62911 8.55771 2.79167 8.36805L6.07653 4.53572C6.50399 4.03702 7.12802 3.75 7.78485 3.75H16.2151C16.872 3.75 17.496 4.03702 17.9235 4.53572L21.2083 8.36805C21.3709 8.55771 21.4994 8.77151 21.5904 9M4.5 20.25H19.5C20.7426 20.25 21.75 19.2426 21.75 18V15.375C21.75 14.7537 21.2463 14.25 20.625 14.25H3.375C2.75368 14.25 2.25 14.7537 2.25 15.375V18C2.25 19.2426 3.25736 20.25 4.5 20.25Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Icon>
  );
}

const InboxStack = React.forwardRef<SVGSVGElement, IconProps>(InboxStackIcon);
export { InboxStack };
