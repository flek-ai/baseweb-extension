
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function DocumentChartBarIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "DocumentChartBar", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.625 1.5H9C11.0711 1.5 12.75 3.17893 12.75 5.25V7.125C12.75 8.16053 13.5895 9 14.625 9H16.5C18.5711 9 20.25 10.6789 20.25 12.75V20.625C20.25 21.6605 19.4105 22.5 18.375 22.5H5.625C4.58947 22.5 3.75 21.6605 3.75 20.625V3.375C3.75 2.33947 4.58947 1.5 5.625 1.5ZM9.75 17.25C9.75 16.8358 9.41421 16.5 9 16.5C8.58579 16.5 8.25 16.8358 8.25 17.25V18C8.25 18.4142 8.58579 18.75 9 18.75C9.41421 18.75 9.75 18.4142 9.75 18V17.25ZM12 14.25C12.4142 14.25 12.75 14.5858 12.75 15V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V15C11.25 14.5858 11.5858 14.25 12 14.25ZM15.75 12.75C15.75 12.3358 15.4142 12 15 12C14.5858 12 14.25 12.3358 14.25 12.75V18C14.25 18.4142 14.5858 18.75 15 18.75C15.4142 18.75 15.75 18.4142 15.75 18V12.75Z" fill="#0F172A"/>
    </Icon>
  );
}

const DocumentChartBar = React.forwardRef<SVGSVGElement, IconProps>(DocumentChartBarIcon);
export { DocumentChartBar };
