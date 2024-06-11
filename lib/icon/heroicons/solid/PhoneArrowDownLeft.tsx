
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function PhoneArrowDownLeftIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "PhoneArrowDownLeft", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 9.75C19.5 10.1642 19.1642 10.5 18.75 10.5L14.25 10.5C13.8358 10.5 13.5 10.1642 13.5 9.75V5.25C13.5 4.83579 13.8358 4.5 14.25 4.5C14.6642 4.5 15 4.83579 15 5.25V7.93934L19.7197 3.21967C20.0126 2.92678 20.4874 2.92678 20.7803 3.21967C21.0732 3.51256 21.0732 3.98744 20.7803 4.28033L16.0607 9L18.75 9C19.1642 9 19.5 9.33579 19.5 9.75Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 4.5C1.5 2.84315 2.84315 1.5 4.5 1.5H5.87163C6.732 1.5 7.48197 2.08556 7.69064 2.92025L8.79644 7.34343C8.97941 8.0753 8.70594 8.84555 8.10242 9.29818L6.8088 10.2684C6.67447 10.3691 6.64527 10.5167 6.683 10.6197C7.81851 13.7195 10.2805 16.1815 13.3803 17.317C13.4833 17.3547 13.6309 17.3255 13.7316 17.1912L14.7018 15.8976C15.1545 15.2941 15.9247 15.0206 16.6566 15.2036L21.0798 16.3094C21.9144 16.518 22.5 17.268 22.5 18.1284V19.5C22.5 21.1569 21.1569 22.5 19.5 22.5H17.25C8.55151 22.5 1.5 15.4485 1.5 6.75V4.5Z" />
    </Icon>
  );
}

const PhoneArrowDownLeft = React.forwardRef<SVGSVGElement, IconProps>(PhoneArrowDownLeftIcon);
export { PhoneArrowDownLeft };
