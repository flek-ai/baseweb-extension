
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function LifebuoyIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "Lifebuoy", size, color, overrides = {}, ...restProps } = props;
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
      <path fill="none" d="M16.7124 4.3299C17.2999 4.69153 17.8548 5.12691 18.364 5.63604C18.8731 6.14517 19.3085 6.70012 19.6701 7.28763M16.7124 4.3299L13.2636 8.46838M16.7124 4.3299C13.8316 2.5567 10.1684 2.5567 7.28763 4.3299M19.6701 7.28763L15.5316 10.7364M19.6701 7.28763C21.4433 10.1684 21.4433 13.8316 19.6701 16.7124M15.5316 10.7364C15.3507 10.2297 15.0574 9.75408 14.6517 9.34835C14.2459 8.94262 13.7703 8.6493 13.2636 8.46838M15.5316 10.7364C15.8228 11.5519 15.8228 12.4481 15.5316 13.2636M13.2636 8.46838C12.4481 8.17721 11.5519 8.17721 10.7364 8.46838M15.5316 13.2636C15.3507 13.7703 15.0574 14.2459 14.6517 14.6517C14.2459 15.0574 13.7703 15.3507 13.2636 15.5316M15.5316 13.2636L19.6701 16.7124M19.6701 16.7124C19.3085 17.2999 18.8731 17.8548 18.364 18.364C17.8548 18.8731 17.2999 19.3085 16.7124 19.6701M16.7124 19.6701L13.2636 15.5316M16.7124 19.6701C13.8316 21.4433 10.1684 21.4433 7.28763 19.6701M13.2636 15.5316C12.4481 15.8228 11.5519 15.8228 10.7364 15.5316M10.7364 15.5316C10.2297 15.3507 9.75408 15.0574 9.34835 14.6517C8.94262 14.2459 8.6493 13.7703 8.46838 13.2636M10.7364 15.5316L7.28763 19.6701M7.28763 19.6701C6.70012 19.3085 6.14517 18.8731 5.63604 18.364C5.12691 17.8548 4.69153 17.2999 4.3299 16.7124M4.3299 16.7124L8.46838 13.2636M4.3299 16.7124C2.5567 13.8316 2.5567 10.1684 4.3299 7.28763M8.46838 13.2636C8.17721 12.4481 8.17721 11.5519 8.46838 10.7364M8.46838 10.7364C8.6493 10.2297 8.94262 9.75408 9.34835 9.34835C9.75408 8.94262 10.2297 8.6493 10.7364 8.46838M8.46838 10.7364L4.3299 7.28763M10.7364 8.46838L7.28763 4.3299M7.28763 4.3299C6.70012 4.69153 6.14517 5.12691 5.63604 5.63604C5.12691 6.14517 4.69153 6.70013 4.3299 7.28763" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Icon>
  );
}

const Lifebuoy = React.forwardRef<SVGSVGElement, IconProps>(LifebuoyIcon);
export { Lifebuoy };
