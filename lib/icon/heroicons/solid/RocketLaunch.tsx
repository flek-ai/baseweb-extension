
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function RocketLaunchIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "RocketLaunch", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.315 7.58365C12.1956 3.88296 16.6946 1.50021 21.75 1.5C21.9489 1.49999 22.1397 1.57901 22.2803 1.71966C22.421 1.86031 22.5 2.05108 22.5 2.25C22.5 7.30564 20.1173 11.805 16.4165 14.6859C16.4715 15.0329 16.5 15.3883 16.5 15.75C16.5 19.4779 13.4779 22.5 9.75 22.5C9.33579 22.5 9 22.1642 9 21.75V17.6185C8.99075 17.6118 8.98163 17.6049 8.97264 17.5978C8.02063 16.8429 7.15799 15.9803 6.40312 15.0282C6.39577 15.019 6.38866 15.0096 6.38179 15H2.25C1.83579 15 1.5 14.6642 1.5 14.25C1.5 10.5221 4.52208 7.5 8.25 7.5C8.61198 7.5 8.96772 7.52856 9.315 7.58365ZM15 6.75C13.7574 6.75 12.75 7.75736 12.75 9C12.75 10.2426 13.7574 11.25 15 11.25C16.2426 11.25 17.25 10.2426 17.25 9C17.25 7.75736 16.2426 6.75 15 6.75Z" fill="#0F172A"/>
    </Icon>
  );
}

const RocketLaunch = React.forwardRef<SVGSVGElement, IconProps>(RocketLaunchIcon);
export { RocketLaunch };
