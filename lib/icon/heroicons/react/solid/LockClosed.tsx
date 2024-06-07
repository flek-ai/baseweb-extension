
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function LockClosedIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "LockClosed", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.5C9.10051 1.5 6.75 3.85051 6.75 6.75V9.75C5.09315 9.75 3.75 11.0931 3.75 12.75V19.5C3.75 21.1569 5.09315 22.5 6.75 22.5H17.25C18.9069 22.5 20.25 21.1569 20.25 19.5V12.75C20.25 11.0931 18.9069 9.75 17.25 9.75V6.75C17.25 3.85051 14.8995 1.5 12 1.5ZM15.75 9.75V6.75C15.75 4.67893 14.0711 3 12 3C9.92893 3 8.25 4.67893 8.25 6.75V9.75H15.75Z" fill="#0F172A"/>
    </Icon>
  );
}

const LockClosed = React.forwardRef<SVGSVGElement, IconProps>(LockClosedIcon);
export { LockClosed };
