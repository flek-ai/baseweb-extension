
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function WindowIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "Window", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 6C2.25 4.34315 3.59315 3 5.25 3H18.75C20.4069 3 21.75 4.34315 21.75 6V18C21.75 19.6569 20.4069 21 18.75 21H5.25C3.59315 21 2.25 19.6569 2.25 18V6ZM20.25 9H3.75V18C3.75 18.8284 4.42157 19.5 5.25 19.5H18.75C19.5784 19.5 20.25 18.8284 20.25 18V9ZM5.25 5.25C4.83579 5.25 4.5 5.58579 4.5 6V6.0075C4.5 6.42171 4.83579 6.7575 5.25 6.7575H5.2575C5.67171 6.7575 6.0075 6.42171 6.0075 6.0075V6C6.0075 5.58579 5.67171 5.25 5.2575 5.25H5.25ZM6.75 6C6.75 5.58579 7.08579 5.25 7.5 5.25H7.5075C7.92171 5.25 8.2575 5.58579 8.2575 6V6.0075C8.2575 6.42171 7.92171 6.7575 7.5075 6.7575H7.5C7.08579 6.7575 6.75 6.42171 6.75 6.0075V6ZM9.75 5.25C9.33579 5.25 9 5.58579 9 6V6.0075C9 6.42171 9.33579 6.7575 9.75 6.7575H9.7575C10.1717 6.7575 10.5075 6.42171 10.5075 6.0075V6C10.5075 5.58579 10.1717 5.25 9.7575 5.25H9.75Z" fill="#0F172A"/>
    </Icon>
  );
}

const Window = React.forwardRef<SVGSVGElement, IconProps>(WindowIcon);
export { Window };
