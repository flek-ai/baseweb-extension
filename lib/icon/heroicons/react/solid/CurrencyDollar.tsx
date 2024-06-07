
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function CurrencyDollarIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "CurrencyDollar", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M10.4636 8.74626C10.6908 8.56577 10.9607 8.43451 11.25 8.35249V11.1474C10.9552 11.0637 10.686 10.9304 10.4636 10.7537C10.0699 10.441 9.91752 10.073 9.91752 9.75C9.91752 9.42705 10.0699 9.05904 10.4636 8.74626Z" fill="#0F172A"/>
    </Icon>
  );
}

const CurrencyDollar = React.forwardRef<SVGSVGElement, IconProps>(CurrencyDollarIcon);
export { CurrencyDollar };
