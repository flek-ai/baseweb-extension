
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function GlobeAmericasIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "GlobeAmericas", size, color, overrides = {}, ...restProps } = props;
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
      <path fill="none" d="M6.11507 5.19043L6.4339 7.10337C6.63948 8.33689 7.22535 9.47535 8.10962 10.3596L9.75 12L9.36262 12.7747C9.14607 13.2079 9.23096 13.731 9.57336 14.0734L10.9205 15.4205C11.1315 15.6315 11.25 15.9176 11.25 16.216V17.3047C11.25 17.7308 11.4908 18.1204 11.8719 18.3109L12.0247 18.3874C12.4579 18.6039 12.981 18.519 13.3234 18.1766L14.0461 17.4539C15.161 16.339 15.952 14.9419 16.3344 13.4122C16.4357 13.0073 16.2962 12.5802 15.9756 12.313L14.6463 11.2053C14.3947 10.9956 14.0642 10.906 13.7411 10.9598L12.5711 11.1548C12.2127 11.2146 11.8475 11.0975 11.5906 10.8406L11.2955 10.5455C10.8562 10.1062 10.8562 9.39384 11.2955 8.9545L11.4266 8.82336C11.769 8.48095 12.2921 8.39607 12.7253 8.61263L13.3292 8.91459C13.4415 8.97076 13.5654 9 13.691 9C14.2924 9 14.6835 8.3671 14.4146 7.82918L14.25 7.5L15.5057 6.66289C16.1573 6.22849 16.6842 5.63157 17.0344 4.93112L17.1803 4.63942M6.11507 5.19043C4.20716 6.84073 3 9.27939 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 8.95801 19.4908 6.26851 17.1803 4.63942M6.11507 5.19043C7.69292 3.82562 9.75004 3 12 3C13.9286 3 15.7155 3.6066 17.1803 4.63942" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Icon>
  );
}

const GlobeAmericas = React.forwardRef<SVGSVGElement, IconProps>(GlobeAmericasIcon);
export { GlobeAmericas };
