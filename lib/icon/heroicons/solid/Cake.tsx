
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function CakeIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "Cake", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M15 1.784L14.2045 2.5795C13.7652 3.01884 13.7652 3.73115 14.2045 4.17049C14.6438 4.60983 15.3562 4.60983 15.7955 4.17049C16.2348 3.73115 16.2348 3.01884 15.7955 2.5795L15 1.784Z" fill="#0F172A"/>
    </Icon>
  );
}

const Cake = React.forwardRef<SVGSVGElement, IconProps>(CakeIcon);
export { Cake };
