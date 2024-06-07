
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function BuildingLibraryIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "BuildingLibrary", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M11.5841 2.37596C11.836 2.20801 12.1642 2.20801 12.4161 2.37596L21.4161 8.37596C21.7608 8.60573 21.8539 9.07138 21.6241 9.41603C21.3944 9.76067 20.9287 9.8538 20.5841 9.62404L12.0001 3.90139L3.4161 9.62404C3.07146 9.8538 2.60581 9.76067 2.37604 9.41603C2.14628 9.07138 2.23941 8.60573 2.58405 8.37596L11.5841 2.37596Z" fill="#0F172A"/>
    </Icon>
  );
}

const BuildingLibrary = React.forwardRef<SVGSVGElement, IconProps>(BuildingLibraryIcon);
export { BuildingLibrary };
