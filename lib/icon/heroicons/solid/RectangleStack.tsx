
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function RectangleStackIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "RectangleStack", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M5.56641 4.65724C5.9435 4.55472 6.34029 4.5 6.74986 4.5H17.2499C17.6594 4.5 18.0562 4.55472 18.4333 4.65724C17.9406 3.67454 16.924 3 15.7499 3H8.24986C7.0757 3 6.0591 3.67454 5.56641 4.65724Z" fill="#0F172A"/>
    </Icon>
  );
}

const RectangleStack = React.forwardRef<SVGSVGElement, IconProps>(RectangleStackIcon);
export { RectangleStack };
