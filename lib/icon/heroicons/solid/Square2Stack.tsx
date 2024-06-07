
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function Square2StackIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "Square2Stack", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M16.5 6C16.5 4.34315 15.1569 3 13.5 3H6C4.34315 3 3 4.34315 3 6V13.5C3 15.1569 4.34315 16.5 6 16.5V10.5C6 8.01472 8.01472 6 10.5 6H16.5Z" fill="#0F172A"/>
<path d="M18 7.5C19.6569 7.5 21 8.84315 21 10.5V18C21 19.6569 19.6569 21 18 21H10.5C8.84315 21 7.5 19.6569 7.5 18V10.5C7.5 8.84315 8.84315 7.5 10.5 7.5H18Z" fill="#0F172A"/>
    </Icon>
  );
}

const Square2Stack = React.forwardRef<SVGSVGElement, IconProps>(Square2StackIcon);
export { Square2Stack };
