
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function ChevronDoubleDownIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "ChevronDoubleDown", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 13.2803C11.7626 13.5732 12.2374 13.5732 12.5303 13.2803L20.0303 5.78033C20.3232 5.48744 20.3232 5.01256 20.0303 4.71967C19.7374 4.42678 19.2626 4.42678 18.9697 4.71967L12 11.6893L5.03033 4.71967C4.73744 4.42678 4.26256 4.42678 3.96967 4.71967C3.67678 5.01256 3.67678 5.48744 3.96967 5.78033L11.4697 13.2803Z" fill="#0F172A"/>
    </Icon>
  );
}

const ChevronDoubleDown = React.forwardRef<SVGSVGElement, IconProps>(ChevronDoubleDownIcon);
export { ChevronDoubleDown };
