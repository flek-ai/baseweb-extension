
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function UserPlusIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "UserPlus", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M5.25 6.375C5.25 4.09683 7.09683 2.25 9.375 2.25C11.6532 2.25 13.5 4.09683 13.5 6.375C13.5 8.65317 11.6532 10.5 9.375 10.5C7.09683 10.5 5.25 8.65317 5.25 6.375Z" fill="#0F172A"/>
    </Icon>
  );
}

const UserPlus = React.forwardRef<SVGSVGElement, IconProps>(UserPlusIcon);
export { UserPlus };
