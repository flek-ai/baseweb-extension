
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function GiftTopIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "GiftTop", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M11.25 3V7.04639C10.0748 5.9271 8.21463 5.94444 7.06066 7.09841C5.91897 8.2401 5.88985 10.073 6.9733 11.25H1.5V5.25C1.5 4.00736 2.50736 3 3.75 3H11.25Z" fill="#0F172A"/>
    </Icon>
  );
}

const GiftTop = React.forwardRef<SVGSVGElement, IconProps>(GiftTopIcon);
export { GiftTop };
