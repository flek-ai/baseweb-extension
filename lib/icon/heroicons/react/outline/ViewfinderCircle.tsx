
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function ViewfinderCircleIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "ViewfinderCircle", size, color, overrides = {}, ...restProps } = props;
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
      <path fill="none" d="M7.5 3.75H6C4.75736 3.75 3.75 4.75736 3.75 6V7.5M16.5 3.75H18C19.2426 3.75 20.25 4.75736 20.25 6V7.5M20.25 16.5V18C20.25 19.2426 19.2426 20.25 18 20.25H16.5M7.5 20.25H6C4.75736 20.25 3.75 19.2426 3.75 18V16.5M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Icon>
  );
}

const ViewfinderCircle = React.forwardRef<SVGSVGElement, IconProps>(ViewfinderCircleIcon);
export { ViewfinderCircle };
