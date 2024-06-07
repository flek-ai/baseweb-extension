
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function BookmarkSquareIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "BookmarkSquare", size, color, overrides = {}, ...restProps } = props;
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
      <path fill="none" d="M16.5 3.75V16.5L12 14.25L7.5 16.5V3.75M16.5 3.75H18C19.2426 3.75 20.25 4.75736 20.25 6V18C20.25 19.2426 19.2426 20.25 18 20.25H6C4.75736 20.25 3.75 19.2426 3.75 18V6C3.75 4.75736 4.75736 3.75 6 3.75H7.5M16.5 3.75H7.5" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Icon>
  );
}

const BookmarkSquare = React.forwardRef<SVGSVGElement, IconProps>(BookmarkSquareIcon);
export { BookmarkSquare };
