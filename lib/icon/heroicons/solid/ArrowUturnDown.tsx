
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function ArrowUturnDownIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "ArrowUturnDown", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15 3.75C12.1005 3.75 9.75 6.10051 9.75 9L9.75 19.1893L14.4697 14.4697C14.7626 14.1768 15.2374 14.1768 15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303L9.53033 21.5303C9.38968 21.671 9.19891 21.75 9 21.75C8.80109 21.75 8.61032 21.671 8.46967 21.5303L2.46967 15.5303C2.17678 15.2374 2.17678 14.7626 2.46967 14.4697C2.76256 14.1768 3.23744 14.1768 3.53033 14.4697L8.25 19.1893V9C8.25 5.27208 11.2721 2.25 15 2.25C18.7279 2.25 21.75 5.27208 21.75 9V12C21.75 12.4142 21.4142 12.75 21 12.75C20.5858 12.75 20.25 12.4142 20.25 12V9C20.25 6.10051 17.8995 3.75 15 3.75Z" fill="#0F172A"/>
    </Icon>
  );
}

const ArrowUturnDown = React.forwardRef<SVGSVGElement, IconProps>(ArrowUturnDownIcon);
export { ArrowUturnDown };
