
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function ChevronDoubleLeftIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "ChevronDoubleLeft", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7197 11.4697C10.4268 11.7626 10.4268 12.2374 10.7197 12.5303L18.2197 20.0303C18.5126 20.3232 18.9874 20.3232 19.2803 20.0303C19.5732 19.7374 19.5732 19.2626 19.2803 18.9697L12.3107 12L19.2803 5.03033C19.5732 4.73744 19.5732 4.26256 19.2803 3.96967C18.9874 3.67678 18.5126 3.67678 18.2197 3.96967L10.7197 11.4697Z" fill="#0F172A"/>
    </Icon>
  );
}

const ChevronDoubleLeft = React.forwardRef<SVGSVGElement, IconProps>(ChevronDoubleLeftIcon);
export { ChevronDoubleLeft };
