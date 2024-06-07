
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function ArchiveBoxXMarkIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "ArchiveBoxXMark", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M3.375 3C2.33947 3 1.5 3.83947 1.5 4.875V5.625C1.5 6.66053 2.33947 7.5 3.375 7.5H20.625C21.6605 7.5 22.5 6.66053 22.5 5.625V4.875C22.5 3.83947 21.6605 3 20.625 3H3.375Z" fill="#0F172A"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.08679 9L3.62657 18.1762C3.71984 19.7619 5.03296 21 6.62139 21H17.3783C18.9667 21 20.2799 19.7619 20.3731 18.1762L20.9129 9H3.08679ZM9.21967 11.8447C9.51256 11.5518 9.98744 11.5518 10.2803 11.8447L12 13.5643L13.7197 11.8447C14.0126 11.5518 14.4874 11.5518 14.7803 11.8447C15.0732 12.1376 15.0732 12.6124 14.7803 12.9053L13.0607 14.625L14.7803 16.3447C15.0732 16.6376 15.0732 17.1124 14.7803 17.4053C14.4874 17.6982 14.0126 17.6982 13.7197 17.4053L12 15.6857L10.2803 17.4053C9.98744 17.6982 9.51256 17.6982 9.21967 17.4053C8.92678 17.1124 8.92678 16.6376 9.21967 16.3447L10.9393 14.625L9.21967 12.9053C8.92678 12.6124 8.92678 12.1376 9.21967 11.8447Z" fill="#0F172A"/>
    </Icon>
  );
}

const ArchiveBoxXMark = React.forwardRef<SVGSVGElement, IconProps>(ArchiveBoxXMarkIcon);
export { ArchiveBoxXMark };
