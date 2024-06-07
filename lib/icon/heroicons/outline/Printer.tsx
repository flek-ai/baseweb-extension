
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function PrinterIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "Printer", size, color, overrides = {}, ...restProps } = props;
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
      <path fill="none" d="M6.72012 13.8287C6.47944 13.8589 6.23939 13.8911 6 13.9253M6.72012 13.8287C8.44957 13.6118 10.2117 13.5 12 13.5C13.7883 13.5 15.5504 13.6118 17.2799 13.8287M6.72012 13.8287L6.34091 18M17.2799 13.8287C17.5206 13.8589 17.7606 13.8911 18 13.9253M17.2799 13.8287L17.6591 18M17.6591 18L17.8885 20.5231C17.9484 21.182 17.4296 21.75 16.7681 21.75H7.23191C6.57038 21.75 6.05164 21.182 6.11153 20.5231L6.34091 18M17.6591 18H18.75C19.9926 18 21 16.9926 21 15.75V9.45569C21 8.37475 20.2321 7.44082 19.1631 7.28086C18.5293 7.18604 17.8916 7.10361 17.25 7.03381M6.34091 18H5.25C4.00736 18 3 16.9926 3 15.75V9.45569C3 8.37475 3.7679 7.44082 4.83694 7.28086C5.47066 7.18604 6.10843 7.10361 6.75 7.03381M17.25 7.03381C15.5258 6.84625 13.7741 6.75 12 6.75C10.2259 6.75 8.47423 6.84625 6.75 7.03381M17.25 7.03381V3.375C17.25 2.75368 16.7463 2.25 16.125 2.25H7.875C7.25368 2.25 6.75 2.75368 6.75 3.375V7.03381M18 10.5H18.0075V10.5075H18V10.5ZM15 10.5H15.0075V10.5075H15V10.5Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Icon>
  );
}

const Printer = React.forwardRef<SVGSVGElement, IconProps>(PrinterIcon);
export { Printer };
