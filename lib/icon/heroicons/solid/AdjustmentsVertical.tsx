
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function AdjustmentsVerticalIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "AdjustmentsVertical", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M6 12C5.58579 12 5.25 11.6642 5.25 11.25L5.25002 3.75C5.25002 3.33578 5.5858 3 6.00002 3C6.41423 3 6.75002 3.33579 6.75002 3.75L6.75 11.25C6.75 11.6642 6.41421 12 6 12Z" fill="#0F172A"/>
    </Icon>
  );
}

const AdjustmentsVertical = React.forwardRef<SVGSVGElement, IconProps>(AdjustmentsVerticalIcon);
export { AdjustmentsVertical };
