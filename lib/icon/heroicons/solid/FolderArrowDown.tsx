
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function FolderArrowDownIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "FolderArrowDown", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 21C21.1569 21 22.5 19.6569 22.5 18V9C22.5 7.34315 21.1569 6 19.5 6H14.1213C13.9224 6 13.7316 5.92098 13.591 5.78033L11.4697 3.65901C11.0477 3.23705 10.4754 3 9.87868 3H4.5C2.84315 3 1.5 4.34315 1.5 6V18C1.5 19.6569 2.84315 21 4.5 21H19.5ZM12.75 10.5C12.75 10.0858 12.4142 9.75 12 9.75C11.5858 9.75 11.25 10.0858 11.25 10.5L11.25 14.6893L9.53033 12.9697C9.23744 12.6768 8.76256 12.6768 8.46967 12.9697C8.17678 13.2626 8.17678 13.7374 8.46967 14.0303L11.4697 17.0303C11.6103 17.171 11.8011 17.25 12 17.25C12.1989 17.25 12.3897 17.171 12.5303 17.0303L15.5303 14.0303C15.8232 13.7374 15.8232 13.2626 15.5303 12.9697C15.2374 12.6768 14.7626 12.6768 14.4697 12.9697L12.75 14.6893L12.75 10.5Z" fill="#0F172A"/>
    </Icon>
  );
}

const FolderArrowDown = React.forwardRef<SVGSVGElement, IconProps>(FolderArrowDownIcon);
export { FolderArrowDown };
