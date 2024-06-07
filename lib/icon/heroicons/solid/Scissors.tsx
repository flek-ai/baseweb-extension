
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function ScissorsIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "Scissors", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.12833 9.15468C6.98188 10.5304 4.97858 10.9237 3.37489 9.99776C1.5813 8.96223 0.966765 6.66877 2.0023 4.87517C3.03783 3.08157 5.3313 2.46704 7.12489 3.50257C8.66319 4.39071 9.33419 6.20415 8.84075 7.83395L9.97714 8.49004C10.1638 8.59778 10.295 8.78059 10.3374 8.99185C10.3799 9.20312 10.3294 9.42243 10.1989 9.59388L10.1933 9.60123C9.94809 9.92327 9.49126 9.99312 9.16144 9.75848C9.12519 9.73269 9.08749 9.70846 9.04842 9.68589L8.12833 9.15468ZM3.30134 5.62517C3.92266 4.54901 5.29874 4.18029 6.37489 4.80161C7.3896 5.38745 7.77536 6.64433 7.29525 7.68809C7.27427 7.71507 7.25489 7.7438 7.23732 7.77423C7.21056 7.8206 7.1893 7.86863 7.17336 7.91758C6.54071 8.96093 5.18679 9.31181 4.12489 8.69873C3.04874 8.0774 2.68002 6.70133 3.30134 5.62517Z" fill="#0F172A"/>
    </Icon>
  );
}

const Scissors = React.forwardRef<SVGSVGElement, IconProps>(ScissorsIcon);
export { Scissors };
