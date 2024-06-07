
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function DeviceTabletIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "DeviceTablet", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M10.5 18C10.0858 18 9.75 18.3358 9.75 18.75C9.75 19.1642 10.0858 19.5 10.5 19.5H13.5C13.9142 19.5 14.25 19.1642 14.25 18.75C14.25 18.3358 13.9142 18 13.5 18H10.5Z" fill="#0F172A"/>
    </Icon>
  );
}

const DeviceTablet = React.forwardRef<SVGSVGElement, IconProps>(DeviceTabletIcon);
export { DeviceTablet };
