
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function CloudArrowDownIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "CloudArrowDown", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 3.75C7.18629 3.75 4.5 6.43629 4.5 9.75C4.5 9.91685 4.50683 10.0822 4.52024 10.2459C2.73627 11.084 1.5 12.8968 1.5 15C1.5 17.8995 3.85051 20.25 6.75 20.25H18C20.4853 20.25 22.5 18.2353 22.5 15.75C22.5 14.0653 21.5744 12.5981 20.2058 11.827C20.2349 11.6386 20.25 11.4459 20.25 11.25C20.25 9.17893 18.5711 7.5 16.5 7.5C16.3559 7.5 16.2135 7.50816 16.0733 7.52408C15.1893 5.31282 13.028 3.75 10.5 3.75ZM12.75 9.75C12.75 9.33579 12.4142 9 12 9C11.5858 9 11.25 9.33579 11.25 9.75V14.6893L9.53033 12.9697C9.23744 12.6768 8.76256 12.6768 8.46967 12.9697C8.17678 13.2626 8.17678 13.7374 8.46967 14.0303L11.4697 17.0303C11.7626 17.3232 12.2374 17.3232 12.5303 17.0303L15.5303 14.0303C15.8232 13.7374 15.8232 13.2626 15.5303 12.9697C15.2374 12.6768 14.7626 12.6768 14.4697 12.9697L12.75 14.6893V9.75Z" fill="#0F172A"/>
    </Icon>
  );
}

const CloudArrowDown = React.forwardRef<SVGSVGElement, IconProps>(CloudArrowDownIcon);
export { CloudArrowDown };
