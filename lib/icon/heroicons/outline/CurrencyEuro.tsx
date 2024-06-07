
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function CurrencyEuroIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "CurrencyEuro", size, color, overrides = {}, ...restProps } = props;
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
      <path fill="none" d="M14.25 7.75625C12.667 7.19798 10.8341 7.5519 9.56802 8.81802C7.81066 10.5754 7.81066 13.4246 9.56802 15.182C10.8341 16.4481 12.667 16.802 14.25 16.2437M7.5 10.5H12.75M7.5 13.5H12.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Icon>
  );
}

const CurrencyEuro = React.forwardRef<SVGSVGElement, IconProps>(CurrencyEuroIcon);
export { CurrencyEuro };
