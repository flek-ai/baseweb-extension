
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function ChevronUpDownIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "ChevronUpDown", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 4.71967C11.7626 4.42678 12.2374 4.42678 12.5303 4.71967L16.2803 8.46967C16.5732 8.76256 16.5732 9.23744 16.2803 9.53033C15.9874 9.82322 15.5126 9.82322 15.2197 9.53033L12 6.31066L8.78033 9.53033C8.48744 9.82322 8.01256 9.82322 7.71967 9.53033C7.42678 9.23744 7.42678 8.76256 7.71967 8.46967L11.4697 4.71967ZM7.71967 14.4697C8.01256 14.1768 8.48744 14.1768 8.78033 14.4697L12 17.6893L15.2197 14.4697C15.5126 14.1768 15.9874 14.1768 16.2803 14.4697C16.5732 14.7626 16.5732 15.2374 16.2803 15.5303L12.5303 19.2803C12.2374 19.5732 11.7626 19.5732 11.4697 19.2803L7.71967 15.5303C7.42678 15.2374 7.42678 14.7626 7.71967 14.4697Z" />
    </Icon>
  );
}

const ChevronUpDown = React.forwardRef<SVGSVGElement, IconProps>(ChevronUpDownIcon);
export { ChevronUpDown };
