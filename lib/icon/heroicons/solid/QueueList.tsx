
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function QueueListIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "QueueList", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M5.625 3.75C4.17525 3.75 3 4.92525 3 6.375C3 7.82475 4.17525 9 5.625 9H18.375C19.8247 9 21 7.82475 21 6.375C21 4.92525 19.8247 3.75 18.375 3.75H5.625Z" fill="#0F172A"/>
<path d="M3.75 11.25C3.33579 11.25 3 11.5858 3 12C3 12.4142 3.33579 12.75 3.75 12.75H20.25C20.6642 12.75 21 12.4142 21 12C21 11.5858 20.6642 11.25 20.25 11.25H3.75Z" fill="#0F172A"/>
<path d="M3 15.75C3 15.3358 3.33579 15 3.75 15H20.25C20.6642 15 21 15.3358 21 15.75C21 16.1642 20.6642 16.5 20.25 16.5H3.75C3.33579 16.5 3 16.1642 3 15.75Z" fill="#0F172A"/>
<path d="M3.75 18.75C3.33579 18.75 3 19.0858 3 19.5C3 19.9142 3.33579 20.25 3.75 20.25H20.25C20.6642 20.25 21 19.9142 21 19.5C21 19.0858 20.6642 18.75 20.25 18.75H3.75Z" fill="#0F172A"/>
    </Icon>
  );
}

const QueueList = React.forwardRef<SVGSVGElement, IconProps>(QueueListIcon);
export { QueueList };
