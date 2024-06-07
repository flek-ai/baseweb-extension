
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function BellAlertIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "BellAlert", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M5.85036 3.50019C6.1266 3.19155 6.10034 2.7174 5.79169 2.44116C5.48305 2.16491 5.0089 2.19118 4.73266 2.49982C3.5317 3.84163 2.69605 5.51948 2.3846 7.37592C2.31607 7.78442 2.59167 8.17114 3.00017 8.23967C3.40868 8.3082 3.79539 8.0326 3.86393 7.6241C4.12704 6.05581 4.83301 4.63686 5.85036 3.50019Z" fill="#0F172A"/>
    </Icon>
  );
}

const BellAlert = React.forwardRef<SVGSVGElement, IconProps>(BellAlertIcon);
export { BellAlert };
