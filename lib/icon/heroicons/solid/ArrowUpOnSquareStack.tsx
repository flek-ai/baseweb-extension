
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function ArrowUpOnSquareStackIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "ArrowUpOnSquareStack", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M9.96967 0.96967C10.2626 0.676777 10.7374 0.676777 11.0303 0.96967L14.0303 3.96967C14.3232 4.26256 14.3232 4.73744 14.0303 5.03033C13.7374 5.32322 13.2626 5.32322 12.9697 5.03033L11.25 3.31066V6.75H9.75V3.31066L8.03033 5.03033C7.73744 5.32322 7.26256 5.32322 6.96967 5.03033C6.67678 4.73744 6.67678 4.26256 6.96967 3.96967L9.96967 0.96967Z" fill="#0F172A"/>
    </Icon>
  );
}

const ArrowUpOnSquareStack = React.forwardRef<SVGSVGElement, IconProps>(ArrowUpOnSquareStackIcon);
export { ArrowUpOnSquareStack };
