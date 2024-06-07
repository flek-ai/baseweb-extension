
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function PhoneXMarkIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "PhoneXMark", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2197 3.21967C15.5126 2.92678 15.9874 2.92678 16.2803 3.21967L18 4.93934L19.7197 3.21967C20.0126 2.92678 20.4874 2.92678 20.7803 3.21967C21.0732 3.51256 21.0732 3.98744 20.7803 4.28033L19.0607 6L20.7803 7.71967C21.0732 8.01256 21.0732 8.48744 20.7803 8.78033C20.4874 9.07322 20.0126 9.07322 19.7197 8.78033L18 7.06066L16.2803 8.78033C15.9874 9.07322 15.5126 9.07322 15.2197 8.78033C14.9268 8.48744 14.9268 8.01256 15.2197 7.71967L16.9393 6L15.2197 4.28033C14.9268 3.98744 14.9268 3.51256 15.2197 3.21967Z" fill="#0F172A"/>
    </Icon>
  );
}

const PhoneXMark = React.forwardRef<SVGSVGElement, IconProps>(PhoneXMarkIcon);
export { PhoneXMark };
