
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function DocumentArrowUpIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "DocumentArrowUp", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.625 1.5H9C11.0711 1.5 12.75 3.17893 12.75 5.25V7.125C12.75 8.16053 13.5895 9 14.625 9H16.5C18.5711 9 20.25 10.6789 20.25 12.75V20.625C20.25 21.6605 19.4105 22.5 18.375 22.5H5.625C4.58947 22.5 3.75 21.6605 3.75 20.625V3.375C3.75 2.33947 4.58947 1.5 5.625 1.5ZM12.5303 11.4697C12.3897 11.329 12.1989 11.25 12 11.25C11.8011 11.25 11.6103 11.329 11.4697 11.4697L8.46967 14.4697C8.17678 14.7626 8.17678 15.2374 8.46967 15.5303C8.76256 15.8232 9.23744 15.8232 9.53033 15.5303L11.25 13.8107L11.25 18C11.25 18.4142 11.5858 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18L12.75 13.8107L14.4697 15.5303C14.7626 15.8232 15.2374 15.8232 15.5303 15.5303C15.8232 15.2374 15.8232 14.7626 15.5303 14.4697L12.5303 11.4697Z" fill="#0F172A"/>
    </Icon>
  );
}

const DocumentArrowUp = React.forwardRef<SVGSVGElement, IconProps>(DocumentArrowUpIcon);
export { DocumentArrowUp };
