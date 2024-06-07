
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function ArrowSmallLeftIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "ArrowSmallLeft", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.25 12C20.25 12.4142 19.9142 12.75 19.5 12.75L6.31066 12.75L11.7803 18.2197C12.0732 18.5126 12.0732 18.9874 11.7803 19.2803C11.4874 19.5732 11.0126 19.5732 10.7197 19.2803L3.96967 12.5303C3.67678 12.2374 3.67678 11.7626 3.96967 11.4697L10.7197 4.71967C11.0126 4.42678 11.4874 4.42678 11.7803 4.71967C12.0732 5.01256 12.0732 5.48744 11.7803 5.78033L6.31066 11.25L19.5 11.25C19.9142 11.25 20.25 11.5858 20.25 12Z" fill="#0F172A"/>
    </Icon>
  );
}

const ArrowSmallLeft = React.forwardRef<SVGSVGElement, IconProps>(ArrowSmallLeftIcon);
export { ArrowSmallLeft };
