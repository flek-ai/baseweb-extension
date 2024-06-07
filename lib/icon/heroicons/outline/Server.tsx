
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
      <path fill="none" d="M21.75 17.25V17.0223C21.75 16.6753 21.7099 16.3294 21.6304 15.9916L19.3622 6.35199C19.0035 4.82745 17.6431 3.75 16.077 3.75H7.92305C6.35688 3.75 4.99648 4.82745 4.63777 6.35199L2.36962 15.9916C2.29014 16.3294 2.25 16.6753 2.25 17.0223V17.25M21.75 17.25C21.75 18.9069 20.4069 20.25 18.75 20.25H5.25C3.59315 20.25 2.25 18.9069 2.25 17.25M21.75 17.25C21.75 15.5931 20.4069 14.25 18.75 14.25H5.25C3.59315 14.25 2.25 15.5931 2.25 17.25M18.75 17.25H18.7575V17.2575H18.75V17.25ZM15.75 17.25H15.7575V17.2575H15.75V17.25Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Icon>
  );
}

const Server = React.forwardRef<SVGSVGElement, IconProps>(ServerIcon);
export { Server };
