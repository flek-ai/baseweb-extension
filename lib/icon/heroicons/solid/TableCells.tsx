
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function TableCellsIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "TableCells", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 5.625C1.5 4.58947 2.33947 3.75 3.375 3.75H20.625C21.6605 3.75 22.5 4.58947 22.5 5.625V18.375C22.5 19.4105 21.6605 20.25 20.625 20.25H3.375C2.33947 20.25 1.5 19.4105 1.5 18.375V5.625ZM21 9.375C21 9.16789 20.8321 9 20.625 9H13.125C12.9179 9 12.75 9.16789 12.75 9.375V10.875C12.75 11.0821 12.9179 11.25 13.125 11.25H20.625C20.8321 11.25 21 11.0821 21 10.875V9.375ZM21 13.125C21 12.9179 20.8321 12.75 20.625 12.75H13.125C12.9179 12.75 12.75 12.9179 12.75 13.125V14.625C12.75 14.8321 12.9179 15 13.125 15H20.625C20.8321 15 21 14.8321 21 14.625V13.125ZM21 16.875C21 16.6679 20.8321 16.5 20.625 16.5H13.125C12.9179 16.5 12.75 16.6679 12.75 16.875V18.375C12.75 18.5821 12.9179 18.75 13.125 18.75H20.625C20.8321 18.75 21 18.5821 21 18.375V16.875ZM10.875 18.75C11.0821 18.75 11.25 18.5821 11.25 18.375V16.875C11.25 16.6679 11.0821 16.5 10.875 16.5H3.375C3.16789 16.5 3 16.6679 3 16.875V18.375C3 18.5821 3.16789 18.75 3.375 18.75H10.875ZM3.375 15H10.875C11.0821 15 11.25 14.8321 11.25 14.625V13.125C11.25 12.9179 11.0821 12.75 10.875 12.75H3.375C3.16789 12.75 3 12.9179 3 13.125V14.625C3 14.8321 3.16789 15 3.375 15ZM3.375 11.25H10.875C11.0821 11.25 11.25 11.0821 11.25 10.875V9.375C11.25 9.16789 11.0821 9 10.875 9H3.375C3.16789 9 3 9.16789 3 9.375V10.875C3 11.0821 3.16789 11.25 3.375 11.25Z" fill="#0F172A"/>
    </Icon>
  );
}

const TableCells = React.forwardRef<SVGSVGElement, IconProps>(TableCellsIcon);
export { TableCells };