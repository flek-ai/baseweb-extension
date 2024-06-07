
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function CurrencyBangladeshiIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "CurrencyBangladeshi", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75ZM10.5002 7.96345C10.5002 6.84838 9.3267 6.12314 8.32934 6.62181L7.91475 6.82911C7.54427 7.01435 7.3941 7.46485 7.57934 7.83534C7.76459 8.20582 8.21509 8.35599 8.58557 8.17075L9.00016 7.96345V9.74993H8.25016C7.83595 9.74993 7.50016 10.0857 7.50016 10.4999C7.50016 10.9141 7.83595 11.2499 8.25016 11.2499H9.00016V15.9382C9.00016 16.5014 9.25961 17.1356 9.8671 17.4631C10.5027 17.8058 11.2299 18 12.0002 18C14.1781 18 15.9932 16.4535 16.4102 14.3992C16.6086 13.4217 15.7739 12.75 14.9952 12.75H14.2502C13.836 12.75 13.5002 13.0857 13.5002 13.5C13.5002 13.9142 13.836 14.25 14.2502 14.25H14.9058C14.5731 15.544 13.3975 16.5 12.0002 16.5C11.4844 16.5 11.0012 16.3705 10.579 16.1428C10.5674 16.1366 10.5508 16.1239 10.5338 16.0916C10.5155 16.0567 10.5002 16.0036 10.5002 15.9382V11.2499H15.7502C16.1644 11.2499 16.5002 10.9141 16.5002 10.4999C16.5002 10.0857 16.1644 9.74993 15.7502 9.74993H10.5002V7.96345Z" fill="#0F172A"/>
    </Icon>
  );
}

const CurrencyBangladeshi = React.forwardRef<SVGSVGElement, IconProps>(CurrencyBangladeshiIcon);
export { CurrencyBangladeshi };
