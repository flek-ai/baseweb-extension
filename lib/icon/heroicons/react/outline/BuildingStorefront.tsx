
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
      <path fill="none" d="M13.5 21V13.5C13.5 13.0858 13.8358 12.75 14.25 12.75H17.25C17.6642 12.75 18 13.0858 18 13.5V21M13.5 21H2.36088M13.5 21H18M18 21H21.6391M20.25 21V9.34876M3.75 21V9.349M3.75 9.349C4.89729 10.0121 6.38977 9.85293 7.37132 8.87139C7.41594 8.82677 7.45886 8.78109 7.50008 8.73444C8.04979 9.3572 8.85402 9.74998 9.75 9.74998C10.646 9.74998 11.4503 9.35717 12 8.73435C12.5497 9.35717 13.354 9.74998 14.25 9.74998C15.1459 9.74998 15.9501 9.35725 16.4998 8.73456C16.541 8.78114 16.5838 8.82675 16.6284 8.8713C17.61 9.85293 19.1027 10.0121 20.25 9.34876M3.75 9.349C3.52788 9.22062 3.31871 9.06142 3.12868 8.87139C1.95711 7.69982 1.95711 5.80032 3.12868 4.62875L4.31797 3.43946C4.59927 3.15816 4.9808 3.00012 5.37863 3.00012H18.6212C19.019 3.00012 19.4005 3.15816 19.6818 3.43946L20.871 4.62866C22.0426 5.80023 22.0426 7.69973 20.871 8.8713C20.6811 9.06125 20.472 9.2204 20.25 9.34876M6.75 18H10.5C10.9142 18 11.25 17.6642 11.25 17.25V13.5C11.25 13.0858 10.9142 12.75 10.5 12.75H6.75C6.33579 12.75 6 13.0858 6 13.5V17.25C6 17.6642 6.33579 18 6.75 18Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Icon>
  );
}

const BuildingStorefront = React.forwardRef<SVGSVGElement, IconProps>(BuildingStorefrontIcon);
export { BuildingStorefront };
