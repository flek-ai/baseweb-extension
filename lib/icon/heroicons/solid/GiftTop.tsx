
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function GiftTopIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "GiftTop", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M11.25 3V7.04639C10.0748 5.9271 8.21463 5.94444 7.06066 7.09841C5.91897 8.2401 5.88985 10.073 6.9733 11.25H1.5V5.25C1.5 4.00736 2.50736 3 3.75 3H11.25Z" />
<path d="M12.75 3V7.01102C13.927 5.92757 15.7599 5.95669 16.9016 7.09838C18.0433 8.24008 18.0724 10.073 16.9889 11.25H22.5V5.25C22.5 4.00736 21.4926 3 20.25 3H12.75Z" />
<path d="M22.5 12.75H13.5168C13.7063 14.8524 15.4732 16.5 17.625 16.5C18.0392 16.5 18.375 16.8358 18.375 17.25C18.375 17.6642 18.0392 18 17.625 18C15.5412 18 13.722 16.8669 12.75 15.1831V21H20.25C21.4926 21 22.5 19.9926 22.5 18.75V12.75Z" />
<path d="M11.25 21V15.1831C10.278 16.8669 8.45885 18 6.375 18C5.96079 18 5.625 17.6642 5.625 17.25C5.625 16.8358 5.96079 16.5 6.375 16.5C8.52677 16.5 10.2937 14.8524 10.4832 12.75H1.5V18.75C1.5 19.9926 2.50736 21 3.75 21H11.25Z" />
<path d="M11.0855 10.3536C11.1154 10.6514 11.1234 10.9286 11.1215 11.1592C10.8908 11.1611 10.6136 11.1532 10.3158 11.1232C9.48292 11.0394 8.63902 10.7981 8.12132 10.2804C7.53553 9.6946 7.53553 8.74485 8.12132 8.15907C8.70711 7.57328 9.65685 7.57328 10.2426 8.15907C10.7603 8.67677 11.0016 9.52067 11.0855 10.3536Z" />
<path d="M12.8768 10.3535C12.8468 10.6513 12.8389 10.9286 12.8408 11.1592C13.0714 11.1611 13.3486 11.1531 13.6464 11.1232C14.4793 11.0393 15.3232 10.7981 15.8409 10.2804C16.4267 9.69457 16.4267 8.74483 15.8409 8.15904C15.2551 7.57325 14.3054 7.57325 13.7196 8.15904C13.2019 8.67674 12.9606 9.52064 12.8768 10.3535Z" />
    </Icon>
  );
}

const GiftTop = React.forwardRef<SVGSVGElement, IconProps>(GiftTopIcon);
export { GiftTop };
