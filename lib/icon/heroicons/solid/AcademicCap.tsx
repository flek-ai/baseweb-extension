
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function AcademicCapIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "AcademicCap", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M11.6998 2.80529C11.8912 2.72164 12.1089 2.72164 12.3003 2.80529C16.0192 4.43011 19.5437 6.41637 22.8295 8.71956C23.0673 8.88623 23.1875 9.1752 23.1381 9.46135C23.0887 9.7475 22.8785 9.97941 22.5986 10.0567C21.9137 10.2457 21.2347 10.4494 20.5618 10.6663C17.8307 11.5471 15.2018 12.6554 12.6972 13.9688L12.6939 13.9705C12.5803 14.0301 12.467 14.09 12.354 14.1504C12.1331 14.2684 11.8679 14.2684 11.6471 14.1504C11.533 14.0895 11.4186 14.0289 11.3039 13.9688C10.0655 13.3193 8.79658 12.7201 7.5 12.1736V11.95C7.5 11.8186 7.56742 11.702 7.67173 11.6389C9.17685 10.727 10.7294 9.88565 12.3247 9.11936C12.6981 8.94002 12.8554 8.49195 12.6761 8.11858C12.4967 7.7452 12.0486 7.58791 11.6753 7.76725C10.036 8.55463 8.44086 9.41909 6.89449 10.3559C6.44111 10.6306 6.13632 11.0801 6.03607 11.5838C5.18115 11.2549 4.31499 10.9486 3.43829 10.6659C2.76546 10.4489 2.08644 10.2457 1.40154 10.0567C1.12162 9.9794 0.911461 9.74749 0.86204 9.46134C0.812619 9.17519 0.932824 8.88622 1.17061 8.71955C4.45645 6.41636 7.98097 4.43011 11.6998 2.80529Z" fill="#0F172A"/>
    </Icon>
  );
}

const AcademicCap = React.forwardRef<SVGSVGElement, IconProps>(AcademicCapIcon);
export { AcademicCap };
