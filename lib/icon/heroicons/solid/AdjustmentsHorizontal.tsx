
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function AdjustmentsHorizontalIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "AdjustmentsHorizontal", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M18.75 12.75L20.25 12.75C20.6642 12.75 21 12.4142 21 12C21 11.5858 20.6642 11.25 20.25 11.25L18.75 11.25C18.3358 11.25 18 11.5858 18 12C18 12.4142 18.3358 12.75 18.75 12.75Z" fill="#0F172A"/>
    </Icon>
  );
}

const AdjustmentsHorizontal = React.forwardRef<SVGSVGElement, IconProps>(AdjustmentsHorizontalIcon);
export { AdjustmentsHorizontal };
