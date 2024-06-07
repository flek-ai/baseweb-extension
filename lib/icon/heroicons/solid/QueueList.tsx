
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
    </Icon>
  );
}

const QueueList = React.forwardRef<SVGSVGElement, IconProps>(QueueListIcon);
export { QueueList };
