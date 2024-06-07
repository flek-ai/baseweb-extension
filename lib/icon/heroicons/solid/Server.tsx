
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function ServerIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "Server", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M4.07993 5.22701C4.43013 3.91375 5.61948 3 6.97863 3H17.0214C18.3805 3 19.5699 3.91375 19.9201 5.22701L22.0338 13.1535C21.1346 12.4318 19.9927 12 18.75 12H5.25C4.00727 12 2.86538 12.4318 1.96619 13.1535L4.07993 5.22701Z" fill="#0F172A"/>
    </Icon>
  );
}

const Server = React.forwardRef<SVGSVGElement, IconProps>(ServerIcon);
export { Server };
