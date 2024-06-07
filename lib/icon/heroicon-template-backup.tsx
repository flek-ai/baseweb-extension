import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../helpers/overrides";

import Icon from "./icon";
import type { IconProps } from "./types";

// @ts-ignore
function AlertIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "Alert", size, color, overrides = {}, ...restProps } = props;
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
      <path fillRule="evenodd" clipRule="evenodd" fill="none" d="" />
    </Icon>
  );
}

const Alert = React.forwardRef<SVGSVGElement, IconProps>(AlertIcon);

export { Alert };
