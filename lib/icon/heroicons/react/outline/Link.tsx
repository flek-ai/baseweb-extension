
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function LinkIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "Link", size, color, overrides = {}, ...restProps } = props;
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
      <path fill="none" d="M13.1903 8.68842C13.6393 8.90291 14.0601 9.19611 14.432 9.56802C16.1893 11.3254 16.1893 14.1746 14.432 15.932L9.93198 20.432C8.17462 22.1893 5.32538 22.1893 3.56802 20.432C1.81066 18.6746 1.81066 15.8254 3.56802 14.068L5.32499 12.311M18.675 11.689L20.432 9.93198C22.1893 8.17462 22.1893 5.32538 20.432 3.56802C18.6746 1.81066 15.8254 1.81066 14.068 3.56802L9.56802 8.06802C7.81066 9.82538 7.81066 12.6746 9.56802 14.432C9.93992 14.8039 10.3607 15.0971 10.8097 15.3116" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Icon>
  );
}

const Link = React.forwardRef<SVGSVGElement, IconProps>(LinkIcon);
export { Link };
