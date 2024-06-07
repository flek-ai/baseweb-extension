
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
      <path d="M9.19475 18.4394C10.4447 19.1536 12 18.2511 12 16.8114V14.4709L18.9447 18.4394C20.1947 19.1536 21.75 18.2511 21.75 16.8114L21.75 8.68856C21.75 7.24889 20.1947 6.34633 18.9447 7.06061L12 11.029V8.68856C12 7.24889 10.4447 6.34633 9.19475 7.06061L2.08726 11.122C0.827605 11.8418 0.827603 13.6581 2.08726 14.3779L9.19475 18.4394Z" fill="#0F172A"/>
    </Icon>
  );
}

const Backward = React.forwardRef<SVGSVGElement, IconProps>(BackwardIcon);
export { Backward };
