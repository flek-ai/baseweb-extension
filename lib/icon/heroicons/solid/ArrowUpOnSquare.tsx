
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function ArrowUpOnSquareIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "ArrowUpOnSquare", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M11.4697 1.71967C11.7626 1.42678 12.2374 1.42678 12.5303 1.71967L15.5303 4.71967C15.8232 5.01256 15.8232 5.48744 15.5303 5.78033C15.2374 6.07322 14.7626 6.07322 14.4697 5.78033L12.75 4.06066L12.75 7.5H11.25V4.06066L9.53033 5.78033C9.23744 6.07322 8.76256 6.07322 8.46967 5.78033C8.17678 5.48744 8.17678 5.01256 8.46967 4.71967L11.4697 1.71967Z" />
<path d="M11.25 7.5L11.25 15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15V7.5H16.5C18.1569 7.5 19.5 8.84315 19.5 10.5V19.5C19.5 21.1569 18.1569 22.5 16.5 22.5H7.5C5.84315 22.5 4.5 21.1569 4.5 19.5V10.5C4.5 8.84315 5.84315 7.5 7.5 7.5H11.25Z" />
    </Icon>
  );
}

const ArrowUpOnSquare = React.forwardRef<SVGSVGElement, IconProps>(ArrowUpOnSquareIcon);
export { ArrowUpOnSquare };
