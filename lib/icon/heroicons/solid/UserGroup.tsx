
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function UserGroupIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "UserGroup", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 6.75C8.25 4.67893 9.92893 3 12 3C14.0711 3 15.75 4.67893 15.75 6.75C15.75 8.82107 14.0711 10.5 12 10.5C9.92893 10.5 8.25 8.82107 8.25 6.75Z" fill="#0F172A"/>
    </Icon>
  );
}

const UserGroup = React.forwardRef<SVGSVGElement, IconProps>(UserGroupIcon);
export { UserGroup };
