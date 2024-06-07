
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function SunIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "Sun", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V5.25C12.75 5.66421 12.4142 6 12 6C11.5858 6 11.25 5.66421 11.25 5.25V3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill="#0F172A"/>
    </Icon>
  );
}

const Sun = React.forwardRef<SVGSVGElement, IconProps>(SunIcon);
export { Sun };
