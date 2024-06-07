
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function FilmIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "Film", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 5.625C1.5 4.58947 2.33947 3.75 3.375 3.75H20.625C21.6605 3.75 22.5 4.58947 22.5 5.625V18.375C22.5 19.4105 21.6605 20.25 20.625 20.25H3.375C2.33947 20.25 1.5 19.4105 1.5 18.375V5.625ZM3 5.625V7.125C3 7.33211 3.16789 7.5 3.375 7.5H4.875C5.08211 7.5 5.25 7.33211 5.25 7.125V5.625C5.25 5.41789 5.08211 5.25 4.875 5.25H3.375C3.16789 5.25 3 5.41789 3 5.625ZM19.125 5.25C18.9179 5.25 18.75 5.41789 18.75 5.625V7.125C18.75 7.33211 18.9179 7.5 19.125 7.5H20.625C20.8321 7.5 21 7.33211 21 7.125V5.625C21 5.41789 20.8321 5.25 20.625 5.25H19.125ZM21 9.375C21 9.16789 20.8321 9 20.625 9H19.125C18.9179 9 18.75 9.16789 18.75 9.375V10.875C18.75 11.0821 18.9179 11.25 19.125 11.25H20.625C20.8321 11.25 21 11.0821 21 10.875V9.375ZM21 13.125C21 12.9179 20.8321 12.75 20.625 12.75H19.125C18.9179 12.75 18.75 12.9179 18.75 13.125V14.625C18.75 14.8321 18.9179 15 19.125 15H20.625C20.8321 15 21 14.8321 21 14.625V13.125ZM21 16.875C21 16.6679 20.8321 16.5 20.625 16.5H19.125C18.9179 16.5 18.75 16.6679 18.75 16.875V18.375C18.75 18.5821 18.9179 18.75 19.125 18.75H20.625C20.8321 18.75 21 18.5821 21 18.375V16.875ZM4.875 18.75C5.08211 18.75 5.25 18.5821 5.25 18.375V16.875C5.25 16.6679 5.08211 16.5 4.875 16.5H3.375C3.16789 16.5 3 16.6679 3 16.875V18.375C3 18.5821 3.16789 18.75 3.375 18.75H4.875ZM3.375 15H4.875C5.08211 15 5.25 14.8321 5.25 14.625V13.125C5.25 12.9179 5.08211 12.75 4.875 12.75H3.375C3.16789 12.75 3 12.9179 3 13.125V14.625C3 14.8321 3.16789 15 3.375 15ZM3.375 11.25H4.875C5.08211 11.25 5.25 11.0821 5.25 10.875V9.375C5.25 9.16789 5.08211 9 4.875 9H3.375C3.16789 9 3 9.16789 3 9.375V10.875C3 11.0821 3.16789 11.25 3.375 11.25ZM7.5 11.25C7.08579 11.25 6.75 11.5858 6.75 12C6.75 12.4142 7.08579 12.75 7.5 12.75H16.5C16.9142 12.75 17.25 12.4142 17.25 12C17.25 11.5858 16.9142 11.25 16.5 11.25H7.5Z" fill="#0F172A"/>
    </Icon>
  );
}

const Film = React.forwardRef<SVGSVGElement, IconProps>(FilmIcon);
export { Film };
