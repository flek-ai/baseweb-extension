
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function ArrowDownIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "ArrowDown", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3L12.75 19.1893L18.9697 12.9697C19.2626 12.6768 19.7374 12.6768 20.0303 12.9697C20.3232 13.2626 20.3232 13.7374 20.0303 14.0303L12.5303 21.5303C12.2374 21.8232 11.7626 21.8232 11.4697 21.5303L3.96967 14.0303C3.67678 13.7374 3.67678 13.2626 3.96967 12.9697C4.26256 12.6768 4.73744 12.6768 5.03033 12.9697L11.25 19.1893L11.25 3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill="#0F172A"/>
    </Icon>
  );
}

const ArrowDown = React.forwardRef<SVGSVGElement, IconProps>(ArrowDownIcon);
export { ArrowDown };
