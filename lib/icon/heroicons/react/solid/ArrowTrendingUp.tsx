
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function ArrowTrendingUpIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "ArrowTrendingUp", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2194 6.26793C15.3679 5.88122 15.8017 5.68808 16.1884 5.83652L22.1297 8.11716C22.3154 8.18844 22.4651 8.33057 22.546 8.51229C22.627 8.694 22.6324 8.90042 22.5611 9.08612L20.2804 15.0274C20.132 15.4141 19.6982 15.6072 19.3115 15.4588C18.9248 15.3104 18.7316 14.8765 18.8801 14.4898L20.5118 10.239L19.4253 10.7227C16.9721 11.815 15.1036 13.6758 13.975 15.8962C13.8662 16.1104 13.6614 16.2594 13.4241 16.2971C13.1869 16.3348 12.946 16.2566 12.7761 16.0868L9 12.3107L2.78033 18.5303C2.48744 18.8232 2.01256 18.8232 1.71967 18.5303C1.42678 18.2374 1.42678 17.7626 1.71967 17.4697L8.46967 10.7197C8.61032 10.579 8.80109 10.5 9 10.5C9.19891 10.5 9.38968 10.579 9.53033 10.7197L13.1363 14.3257C14.4369 12.2046 16.3711 10.4406 18.8152 9.35239L19.9017 8.86864L15.6508 7.23689C15.2641 7.08845 15.071 6.65463 15.2194 6.26793Z" fill="#0F172A"/>
    </Icon>
  );
}

const ArrowTrendingUp = React.forwardRef<SVGSVGElement, IconProps>(ArrowTrendingUpIcon);
export { ArrowTrendingUp };
