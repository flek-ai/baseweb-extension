
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
    </Icon>
  );
}

const HomeModern = React.forwardRef<SVGSVGElement, IconProps>(HomeModernIcon);
export { HomeModern };
