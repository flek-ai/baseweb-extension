
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM7.5 4.5C7.08579 4.5 6.75 4.83579 6.75 5.25V16.5C6.75 16.7599 6.88459 17.0013 7.1057 17.138C7.32681 17.2746 7.60292 17.2871 7.83541 17.1708L12 15.0885L16.1646 17.1708C16.3971 17.2871 16.6732 17.2746 16.8943 17.138C17.1154 17.0013 17.25 16.7599 17.25 16.5V5.25C17.25 4.83579 16.9142 4.5 16.5 4.5H7.5Z" />
    </Icon>
  );
}

const BookmarkSquare = React.forwardRef<SVGSVGElement, IconProps>(BookmarkSquareIcon);
export { BookmarkSquare };
