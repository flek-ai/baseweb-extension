
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function CpuChipIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "CpuChip", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M16.5 7.5H7.5V16.5H16.5V7.5Z" fill="#0F172A"/>
    </Icon>
  );
}

const CpuChip = React.forwardRef<SVGSVGElement, IconProps>(CpuChipIcon);
export { CpuChip };
