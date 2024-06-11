
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
      <path d="M10.5 18C10.0858 18 9.75 18.3358 9.75 18.75C9.75 19.1642 10.0858 19.5 10.5 19.5H13.5C13.9142 19.5 14.25 19.1642 14.25 18.75C14.25 18.3358 13.9142 18 13.5 18H10.5Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.125 1.5C5.26104 1.5 3.75 3.01104 3.75 4.875V19.125C3.75 20.989 5.26104 22.5 7.125 22.5H16.875C18.739 22.5 20.25 20.989 20.25 19.125V4.875C20.25 3.01104 18.739 1.5 16.875 1.5H7.125ZM6 4.875C6 4.25368 6.50368 3.75 7.125 3.75H16.875C17.4963 3.75 18 4.25368 18 4.875V19.125C18 19.7463 17.4963 20.25 16.875 20.25H7.125C6.50368 20.25 6 19.7463 6 19.125V4.875Z" />
    </Icon>
  );
}

const DeviceTablet = React.forwardRef<SVGSVGElement, IconProps>(DeviceTabletIcon);
export { DeviceTablet };
