
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function BuildingStorefrontIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "BuildingStorefront", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M5.22335 2.25C4.72607 2.25 4.24916 2.44754 3.89752 2.79917L2.59835 4.09835C1.13388 5.56282 1.13388 7.93718 2.59835 9.40165C3.93551 10.7388 6.03124 10.8551 7.50029 9.75038C8.12669 10.2206 8.90598 10.5 9.75 10.5C10.5941 10.5 11.3736 10.2205 12 9.75016C12.6264 10.2205 13.4059 10.5 14.25 10.5C15.094 10.5 15.8733 10.2206 16.4997 9.75038C17.9688 10.8551 20.0645 10.7388 21.4016 9.40165C22.8661 7.93718 22.8661 5.56282 21.4016 4.09835L20.1025 2.79918C19.7508 2.44755 19.2739 2.25 18.7767 2.25L5.22335 2.25Z" fill="#0F172A"/>
    </Icon>
  );
}

const BuildingStorefront = React.forwardRef<SVGSVGElement, IconProps>(BuildingStorefrontIcon);
export { BuildingStorefront };
