
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function HomeModernIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "HomeModern", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M19.0061 3.70484C19.3954 3.56329 19.5962 3.13297 19.4547 2.74369C19.3131 2.35442 18.8828 2.1536 18.4935 2.29515L6 6.83825V3C6 2.58579 5.66421 2.25 5.25 2.25H3.75C3.33579 2.25 3 2.58579 3 3V7.92916L1.99353 8.29515C1.60426 8.43671 1.40344 8.86703 1.54499 9.25631C1.68655 9.64558 2.11687 9.8464 2.50615 9.70484L19.0061 3.70484Z" fill="#0F172A"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.01896 11.1145L18 5.66687V9.08837L22.0061 10.5452C22.3954 10.6867 22.5962 11.117 22.4547 11.5063C22.3131 11.8956 21.8828 12.0964 21.4935 11.9548L20.9998 11.7753V20.25H21.75C22.1642 20.25 22.5 20.5858 22.5 21C22.5 21.4142 22.1642 21.75 21.75 21.75H2.25C1.83579 21.75 1.5 21.4142 1.5 21C1.5 20.5858 1.83579 20.25 2.25 20.25H3V11.1213L3.01896 11.1145ZM18 20.25V10.6845L19.4998 11.2299V20.25H18ZM9 14.25C8.58579 14.25 8.25 14.5858 8.25 15V19.5C8.25 19.9142 8.58579 20.25 9 20.25H12C12.4142 20.25 12.75 19.9142 12.75 19.5V15C12.75 14.5858 12.4142 14.25 12 14.25H9Z" fill="#0F172A"/>
    </Icon>
  );
}

const HomeModern = React.forwardRef<SVGSVGElement, IconProps>(HomeModernIcon);
export { HomeModern };
