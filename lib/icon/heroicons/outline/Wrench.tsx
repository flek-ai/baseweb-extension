
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function WrenchIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "Wrench", size, color, overrides = {}, ...restProps } = props;
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
      <path fill="none" d="M21.75 6.75C21.75 9.23528 19.7353 11.25 17.25 11.25C17.1206 11.25 16.9925 11.2445 16.8659 11.2338C15.7904 11.1429 14.6016 11.3052 13.9155 12.1383L6.76432 20.8219C6.28037 21.4096 5.55897 21.75 4.79769 21.75C3.39064 21.75 2.25 20.6094 2.25 19.2023C2.25 18.441 2.59044 17.7196 3.1781 17.2357L11.8617 10.0845C12.6948 9.39841 12.8571 8.20956 12.7662 7.13411C12.7555 7.00749 12.75 6.87938 12.75 6.75C12.75 4.26472 14.7647 2.25 17.25 2.25C17.9103 2.25 18.5375 2.39223 19.1024 2.64774L15.8262 5.92397C16.0823 7.03963 16.9605 7.91785 18.0762 8.17397L21.3524 4.89779C21.6078 5.46268 21.75 6.08973 21.75 6.75Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Icon>
  );
}

const Wrench = React.forwardRef<SVGSVGElement, IconProps>(WrenchIcon);
export { Wrench };
