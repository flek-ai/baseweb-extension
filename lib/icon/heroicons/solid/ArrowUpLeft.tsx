
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function ArrowUpLeftIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "ArrowUpLeft", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 6.31066L5.25 15.75C5.25 16.1642 4.91421 16.5 4.5 16.5C4.08579 16.5 3.75 16.1642 3.75 15.75L3.75 4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75L15.75 3.75C16.1642 3.75 16.5 4.08579 16.5 4.5C16.5 4.91421 16.1642 5.25 15.75 5.25L6.31066 5.25L20.0303 18.9697C20.3232 19.2626 20.3232 19.7374 20.0303 20.0303C19.7374 20.3232 19.2626 20.3232 18.9697 20.0303L5.25 6.31066Z" />
    </Icon>
  );
}

const ArrowUpLeft = React.forwardRef<SVGSVGElement, IconProps>(ArrowUpLeftIcon);
export { ArrowUpLeft };
