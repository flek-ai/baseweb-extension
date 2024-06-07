
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function BackwardIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "Backward", size, color, overrides = {}, ...restProps } = props;
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
      <path fill="none" d="M21 16.8115C21 17.6753 20.0668 18.2169 19.3169 17.7883L12.2094 13.7269C11.4536 13.295 11.4536 12.2052 12.2094 11.7733L19.3169 7.7119C20.0668 7.28334 21 7.82487 21 8.68867V16.8115Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Icon>
  );
}

const Backward = React.forwardRef<SVGSVGElement, IconProps>(BackwardIcon);
export { Backward };
