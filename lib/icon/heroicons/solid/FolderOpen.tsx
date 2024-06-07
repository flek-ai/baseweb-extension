
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function FolderOpenIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "FolderOpen", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M19.9057 9C20.2877 9 20.6549 9.05664 21 9.16156V9C21 7.34315 19.6569 6 18 6H14.1213C13.9224 6 13.7316 5.92098 13.591 5.78033L11.4697 3.65901C11.0477 3.23705 10.4754 3 9.87868 3H6C4.34315 3 3 4.34315 3 6V9.16152C3.34508 9.05663 3.71223 9 4.09421 9H19.9057Z" fill="#0F172A"/>
    </Icon>
  );
}

const FolderOpen = React.forwardRef<SVGSVGElement, IconProps>(FolderOpenIcon);
export { FolderOpen };
