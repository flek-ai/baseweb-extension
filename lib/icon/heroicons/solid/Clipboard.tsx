
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function ClipboardIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "Clipboard", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 3C9.81411 3 9.23394 3.46099 9.0561 4.09149C9.01971 4.2205 9 4.35733 9 4.5H15C15 4.35733 14.9803 4.2205 14.9439 4.09149C14.7661 3.46099 14.1859 3 13.5 3H10.5ZM7.80654 3.17789C8.29511 2.18436 9.31692 1.5 10.5 1.5H13.5C14.6831 1.5 15.7049 2.18436 16.1935 3.17789C16.6911 3.22029 17.1865 3.27017 17.6798 3.32741C19.1772 3.50119 20.25 4.78722 20.25 6.25699V19.5C20.25 21.1569 18.9069 22.5 17.25 22.5H6.75C5.09315 22.5 3.75 21.1569 3.75 19.5V6.25699C3.75 4.78722 4.82283 3.50119 6.32022 3.32741C6.81347 3.27017 7.30894 3.22029 7.80654 3.17789Z" fill="#0F172A"/>
    </Icon>
  );
}

const Clipboard = React.forwardRef<SVGSVGElement, IconProps>(ClipboardIcon);
export { Clipboard };