
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function ChartBarSquareIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "ChartBarSquare", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM7.5 13.5C7.91421 13.5 8.25 13.8358 8.25 14.25V16.5C8.25 16.9142 7.91421 17.25 7.5 17.25C7.08579 17.25 6.75 16.9142 6.75 16.5V14.25C6.75 13.8358 7.08579 13.5 7.5 13.5ZM11.25 12C11.25 11.5858 10.9142 11.25 10.5 11.25C10.0858 11.25 9.75 11.5858 9.75 12V16.5C9.75 16.9142 10.0858 17.25 10.5 17.25C10.9142 17.25 11.25 16.9142 11.25 16.5V12ZM13.5 9C13.9142 9 14.25 9.33579 14.25 9.75V16.5C14.25 16.9142 13.9142 17.25 13.5 17.25C13.0858 17.25 12.75 16.9142 12.75 16.5V9.75C12.75 9.33579 13.0858 9 13.5 9ZM17.25 7.5C17.25 7.08579 16.9142 6.75 16.5 6.75C16.0858 6.75 15.75 7.08579 15.75 7.5V16.5C15.75 16.9142 16.0858 17.25 16.5 17.25C16.9142 17.25 17.25 16.9142 17.25 16.5V7.5Z" fill="#0F172A"/>
    </Icon>
  );
}

const ChartBarSquare = React.forwardRef<SVGSVGElement, IconProps>(ChartBarSquareIcon);
export { ChartBarSquare };
