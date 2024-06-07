
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function Battery0Icon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "Battery0", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 9.75C0.75 8.09315 2.09315 6.75 3.75 6.75H18.75C20.4069 6.75 21.75 8.09315 21.75 9.75V9.78751C22.6058 9.96123 23.25 10.7179 23.25 11.625V13.875C23.25 14.7821 22.6058 15.5388 21.75 15.7125V15.75C21.75 17.4069 20.4069 18.75 18.75 18.75H3.75C2.09315 18.75 0.75 17.4069 0.75 15.75V9.75ZM20.25 9.75C20.25 8.92157 19.5784 8.25 18.75 8.25H3.75C2.92157 8.25 2.25 8.92157 2.25 9.75V15.75C2.25 16.5784 2.92157 17.25 3.75 17.25H18.75C19.5784 17.25 20.25 16.5784 20.25 15.75V9.75Z" fill="#0F172A"/>
    </Icon>
  );
}

const Battery0 = React.forwardRef<SVGSVGElement, IconProps>(Battery0Icon);
export { Battery0 };
