
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function CheckBadgeIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "CheckBadge", size, color, overrides = {}, ...restProps } = props;
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
      <path fill="none" d="M9 12.75L11.25 15L15 9.75M21 12C21 13.2683 20.3704 14.3895 19.4067 15.0682C19.6081 16.2294 19.2604 17.4672 18.3637 18.3639C17.467 19.2606 16.2292 19.6083 15.068 19.4069C14.3893 20.3705 13.2682 21 12 21C10.7319 21 9.61072 20.3705 8.93204 19.407C7.77066 19.6086 6.53256 19.261 5.6357 18.3641C4.73886 17.4673 4.39125 16.2292 4.59286 15.0678C3.62941 14.3891 3 13.2681 3 12C3 10.7319 3.62946 9.61077 4.59298 8.93208C4.39147 7.77079 4.7391 6.53284 5.63587 5.63607C6.53265 4.73929 7.77063 4.39166 8.93194 4.59319C9.61061 3.62955 10.7318 3 12 3C13.2682 3 14.3893 3.6295 15.068 4.59307C16.2294 4.39145 17.4674 4.73906 18.3643 5.6359C19.2611 6.53274 19.6087 7.77081 19.4071 8.93218C20.3706 9.61087 21 10.7319 21 12Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Icon>
  );
}

const CheckBadge = React.forwardRef<SVGSVGElement, IconProps>(CheckBadgeIcon);
export { CheckBadge };