
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function BoltIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "Bolt", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6152 1.59492C14.9164 1.76287 15.0643 2.1146 14.9736 2.44734L12.9819 9.75H20.25C20.5486 9.75 20.8188 9.92718 20.9378 10.2011C21.0569 10.475 21.0021 10.7934 20.7983 11.0117L10.2983 22.2617C10.063 22.5139 9.68601 22.573 9.38478 22.4051C9.08354 22.2371 8.93567 21.8854 9.02641 21.5527L11.018 14.25H3.74999C3.45134 14.25 3.18115 14.0728 3.06213 13.7989C2.9431 13.525 2.99792 13.2066 3.20169 12.9883L13.7017 1.73826C13.937 1.48613 14.314 1.42698 14.6152 1.59492Z" fill="#0F172A"/>
    </Icon>
  );
}

const Bolt = React.forwardRef<SVGSVGElement, IconProps>(BoltIcon);
export { Bolt };
