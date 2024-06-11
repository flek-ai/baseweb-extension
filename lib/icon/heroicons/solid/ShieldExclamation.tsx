
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function ShieldExclamationIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "ShieldExclamation", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4843 2.16971C11.7735 1.89578 12.2265 1.89578 12.5157 2.16971C14.5325 4.07968 17.2538 5.25001 20.25 5.25001C20.2977 5.25001 20.3453 5.24972 20.3928 5.24913C20.7202 5.24506 21.0123 5.45381 21.1146 5.76482C21.5271 7.01958 21.75 8.35954 21.75 9.75006C21.75 15.6921 17.6859 20.683 12.1869 22.0983C12.0643 22.1299 11.9357 22.1299 11.8131 22.0983C6.31406 20.683 2.25 15.6921 2.25 9.75006C2.25 8.35954 2.47287 7.01958 2.88541 5.76482C2.98767 5.45381 3.27984 5.24506 3.60721 5.24913C3.65473 5.24972 3.70233 5.25001 3.75 5.25001C6.74624 5.25001 9.46752 4.07968 11.4843 2.16971ZM12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V12.75C12.75 13.1642 12.4142 13.5 12 13.5C11.5858 13.5 11.25 13.1642 11.25 12.75V9C11.25 8.58579 11.5858 8.25 12 8.25ZM12 15C11.5858 15 11.25 15.3358 11.25 15.75V15.7575C11.25 16.1717 11.5858 16.5075 12 16.5075H12.0075C12.4217 16.5075 12.7575 16.1717 12.7575 15.7575V15.75C12.7575 15.3358 12.4217 15 12.0075 15H12Z" />
    </Icon>
  );
}

const ShieldExclamation = React.forwardRef<SVGSVGElement, IconProps>(ShieldExclamationIcon);
export { ShieldExclamation };
