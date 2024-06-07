
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function PaintBrushIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "PaintBrush", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5986 1.5C20.2232 1.5 19.8562 1.61111 19.5439 1.81934L14.4649 5.20533C13.1853 6.05835 12.0203 7.0624 10.993 8.19218C13.1064 9.18391 14.8161 10.8935 15.8078 13.007C16.9376 11.9797 17.9416 10.8146 18.7946 9.53508L22.1806 4.45609C22.3888 4.14375 22.5 3.77677 22.5 3.40139C22.5 2.35128 21.6487 1.5 20.5986 1.5ZM12.2995 15.5249C12.9568 15.1597 13.5898 14.7563 14.1954 14.3175C13.3836 12.258 11.742 10.6164 9.68246 9.80456C9.24361 10.4102 8.84023 11.0432 8.47506 11.7005L8.19653 12.2018C9.93302 12.6985 11.3015 14.0669 11.7981 15.8034L12.2995 15.5249ZM6.74995 13.5C4.67886 13.5 2.99995 15.1789 2.99995 17.25C2.99995 18.0784 2.32839 18.75 1.49995 18.75C1.46599 18.75 1.43219 18.7489 1.3986 18.7466C1.12245 18.7284 0.858681 18.8637 0.712418 19.0986C0.566154 19.3336 0.561166 19.63 0.699441 19.8697C1.60524 21.4402 3.30337 22.5 5.24995 22.5C8.14946 22.5 10.5 20.1495 10.5 17.25C10.5 15.1789 8.82104 13.5 6.74995 13.5Z" fill="#0F172A"/>
    </Icon>
  );
}

const PaintBrush = React.forwardRef<SVGSVGElement, IconProps>(PaintBrushIcon);
export { PaintBrush };
