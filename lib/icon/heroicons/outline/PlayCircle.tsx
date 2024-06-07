
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function PlayCircleIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "PlayCircle", size, color, overrides = {}, ...restProps } = props;
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
      <path fill="none" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill="none" d="M15.9099 11.6722C16.1671 11.8151 16.1671 12.1849 15.9099 12.3278L10.3071 15.4405C10.0572 15.5794 9.75 15.3986 9.75 15.1127V8.88732C9.75 8.60139 10.0572 8.42065 10.3071 8.55951L15.9099 11.6722Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Icon>
  );
}

const PlayCircle = React.forwardRef<SVGSVGElement, IconProps>(PlayCircleIcon);
export { PlayCircle };
