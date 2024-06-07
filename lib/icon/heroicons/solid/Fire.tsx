
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function FireIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "Fire", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9633 2.28579C12.8416 2.12249 12.6586 2.01575 12.4565 1.9901C12.2545 1.96446 12.0506 2.02211 11.8919 2.14981C10.0218 3.65463 8.7174 5.83776 8.35322 8.32637C7.69665 7.85041 7.11999 7.27052 6.6476 6.61081C6.51764 6.42933 6.3136 6.31516 6.09095 6.29934C5.8683 6.28353 5.65017 6.36771 5.49587 6.529C3.95047 8.14442 3 10.3368 3 12.7497C3 17.7202 7.02944 21.7497 12 21.7497C16.9706 21.7497 21 17.7202 21 12.7497C21 9.08876 18.8143 5.93999 15.6798 4.53406C14.5706 3.99256 13.6547 3.21284 12.9633 2.28579ZM15.75 14.25C15.75 16.3211 14.0711 18 12 18C9.92893 18 8.25 16.3211 8.25 14.25C8.25 13.8407 8.31559 13.4467 8.43682 13.0779C9.06529 13.5425 9.78769 13.8874 10.5703 14.0787C10.7862 12.6779 11.4866 11.437 12.4949 10.5324C14.3321 10.7746 15.75 12.3467 15.75 14.25Z" fill="#0F172A"/>
    </Icon>
  );
}

const Fire = React.forwardRef<SVGSVGElement, IconProps>(FireIcon);
export { Fire };
