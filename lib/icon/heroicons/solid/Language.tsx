
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function LanguageIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "Language", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99997 2.25C9.41419 2.25 9.74997 2.58579 9.74997 3V4.50565C10.6344 4.519 11.5131 4.55589 12.3856 4.61576C13.295 4.67816 14.1976 4.7655 15.0928 4.87713C15.5038 4.92838 15.7955 5.30314 15.7442 5.71417C15.693 6.1252 15.3182 6.41685 14.9072 6.3656C14.2477 6.28336 13.5839 6.21471 12.9162 6.15993C12.3254 8.46971 11.306 10.6074 9.94791 12.4834C10.2648 12.8666 10.5979 13.236 10.9462 13.5905C11.2365 13.8859 11.2324 14.3607 10.937 14.6511C10.6415 14.9414 10.1667 14.9373 9.87633 14.6419C9.57346 14.3337 9.28114 14.015 8.99997 13.6866C7.42884 15.522 5.50938 17.0501 3.3442 18.1686C2.97619 18.3587 2.52375 18.2145 2.33363 17.8465C2.14352 17.4785 2.28774 17.026 2.65575 16.8359C4.73754 15.7605 6.5721 14.2737 8.05205 12.4834C7.18596 11.2869 6.45754 9.984 5.89018 8.59774C5.73329 8.21439 5.91687 7.77643 6.30022 7.61954C6.68357 7.46265 7.12152 7.64622 7.27841 8.02957C7.74073 9.15919 8.31954 10.229 8.99997 11.2242C10.0649 9.66674 10.881 7.92604 11.3912 6.05944C10.5992 6.01997 9.80193 6 8.99997 6C6.99911 6 5.02763 6.12433 3.09278 6.3656C2.68175 6.41685 2.30699 6.1252 2.25574 5.71417C2.20448 5.30314 2.49614 4.92838 2.90717 4.87713C4.66111 4.65841 6.44376 4.5329 8.24997 4.50565V3C8.24997 2.58579 8.58576 2.25 8.99997 2.25ZM15.75 9C16.0414 9 16.3064 9.16878 16.4296 9.43284L21.6796 20.6828C21.8548 21.0582 21.6925 21.5045 21.3171 21.6796C20.9418 21.8548 20.4955 21.6925 20.3203 21.3172L19.1223 18.75H12.3776L11.1796 21.3172C11.0044 21.6925 10.5582 21.8548 10.1828 21.6796C9.80746 21.5045 9.64517 21.0582 9.82034 20.6828L15.0703 9.43284C15.1936 9.16878 15.4586 9 15.75 9ZM13.0776 17.25H18.4223L15.75 11.5235L13.0776 17.25Z" />
    </Icon>
  );
}

const Language = React.forwardRef<SVGSVGElement, IconProps>(LanguageIcon);
export { Language };
