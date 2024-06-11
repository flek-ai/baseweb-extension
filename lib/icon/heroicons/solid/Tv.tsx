
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function TvIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "Tv", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M19.5 6H4.5V15H19.5V6Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.375 3C2.33947 3 1.5 3.83947 1.5 4.875V16.125C1.5 17.1605 2.33947 18 3.375 18H9.75V19.5H6C5.58579 19.5 5.25 19.8358 5.25 20.25C5.25 20.6642 5.58579 21 6 21H18C18.4142 21 18.75 20.6642 18.75 20.25C18.75 19.8358 18.4142 19.5 18 19.5H14.25V18H20.625C21.6605 18 22.5 17.1605 22.5 16.125V4.875C22.5 3.83947 21.6605 3 20.625 3H3.375ZM3.375 16.5H20.625C20.8321 16.5 21 16.3321 21 16.125V4.875C21 4.66789 20.8321 4.5 20.625 4.5H3.375C3.16789 4.5 3 4.66789 3 4.875V16.125C3 16.3321 3.16789 16.5 3.375 16.5Z" />
    </Icon>
  );
}

const Tv = React.forwardRef<SVGSVGElement, IconProps>(TvIcon);
export { Tv };
