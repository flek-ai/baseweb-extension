
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function BuildingOffice2Icon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "BuildingOffice2", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3C2.25 3.41421 2.58579 3.75 3 3.75V20.25H2.25C1.83579 20.25 1.5 20.5858 1.5 21C1.5 21.4142 1.83579 21.75 2.25 21.75H15V3.75C15.4142 3.75 15.75 3.41421 15.75 3C15.75 2.58579 15.4142 2.25 15 2.25H3ZM6.75 19.5V17.25C6.75 16.8358 7.08579 16.5 7.5 16.5H10.5C10.9142 16.5 11.25 16.8358 11.25 17.25V19.5C11.25 19.9142 10.9142 20.25 10.5 20.25H7.5C7.08579 20.25 6.75 19.9142 6.75 19.5ZM6 6.75C6 6.33579 6.33579 6 6.75 6H7.5C7.91421 6 8.25 6.33579 8.25 6.75C8.25 7.16421 7.91421 7.5 7.5 7.5H6.75C6.33579 7.5 6 7.16421 6 6.75ZM6.75 9C6.33579 9 6 9.33579 6 9.75C6 10.1642 6.33579 10.5 6.75 10.5H7.5C7.91421 10.5 8.25 10.1642 8.25 9.75C8.25 9.33579 7.91421 9 7.5 9H6.75ZM6 12.75C6 12.3358 6.33579 12 6.75 12H7.5C7.91421 12 8.25 12.3358 8.25 12.75C8.25 13.1642 7.91421 13.5 7.5 13.5H6.75C6.33579 13.5 6 13.1642 6 12.75ZM10.5 6C10.0858 6 9.75 6.33579 9.75 6.75C9.75 7.16421 10.0858 7.5 10.5 7.5H11.25C11.6642 7.5 12 7.16421 12 6.75C12 6.33579 11.6642 6 11.25 6H10.5ZM9.75 9.75C9.75 9.33579 10.0858 9 10.5 9H11.25C11.6642 9 12 9.33579 12 9.75C12 10.1642 11.6642 10.5 11.25 10.5H10.5C10.0858 10.5 9.75 10.1642 9.75 9.75ZM10.5 12C10.0858 12 9.75 12.3358 9.75 12.75C9.75 13.1642 10.0858 13.5 10.5 13.5H11.25C11.6642 13.5 12 13.1642 12 12.75C12 12.3358 11.6642 12 11.25 12H10.5Z" fill="#0F172A"/>
    </Icon>
  );
}

const BuildingOffice2 = React.forwardRef<SVGSVGElement, IconProps>(BuildingOffice2Icon);
export { BuildingOffice2 };
