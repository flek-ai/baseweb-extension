
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function VideoCameraSlashIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "VideoCameraSlash", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M0.96967 3.96967C1.26256 3.67678 1.73744 3.67678 2.03033 3.96967L17.0303 18.9697C17.3232 19.2626 17.3232 19.7374 17.0303 20.0303C16.7374 20.3232 16.2626 20.3232 15.9697 20.0303L0.96967 5.03033C0.676777 4.73744 0.676777 4.26256 0.96967 3.96967Z" fill="black"/>
    </Icon>
  );
}

const VideoCameraSlash = React.forwardRef<SVGSVGElement, IconProps>(VideoCameraSlashIcon);
export { VideoCameraSlash };
