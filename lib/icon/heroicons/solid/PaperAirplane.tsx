
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function PaperAirplaneIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "PaperAirplane", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M3.47804 2.4043C3.2133 2.3274 2.92771 2.40193 2.73432 2.5984C2.54093 2.79487 2.47091 3.0816 2.55198 3.3451L4.98426 11.25H13.5C13.9142 11.25 14.25 11.5858 14.25 12C14.25 12.4142 13.9142 12.75 13.5 12.75H4.98427L2.55207 20.6546C2.471 20.9181 2.54102 21.2049 2.73441 21.4013C2.92781 21.5978 3.2134 21.6723 3.47814 21.5954C10.1767 19.6494 16.3974 16.5814 21.9233 12.6087C22.1193 12.4678 22.2355 12.2412 22.2355 11.9998C22.2355 11.7583 22.1193 11.5317 21.9233 11.3908C16.3974 7.41817 10.1767 4.35021 3.47804 2.4043Z" fill="#0F172A"/>
    </Icon>
  );
}

const PaperAirplane = React.forwardRef<SVGSVGElement, IconProps>(PaperAirplaneIcon);
export { PaperAirplane };
