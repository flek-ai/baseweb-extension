
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function GlobeAsiaAustraliaIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "GlobeAsiaAustralia", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M15.7498 8.25C16.164 8.25 16.4998 8.58579 16.4998 9C16.4998 10.1201 16.0077 11.1263 15.2304 11.8123C14.9199 12.0864 14.4459 12.0569 14.1718 11.7463C13.8977 11.4357 13.9273 10.9618 14.2378 10.6877C14.7062 10.2743 14.9998 9.67191 14.9998 9C14.9998 8.58579 15.3356 8.25 15.7498 8.25Z" fill="#0F172A"/>
    </Icon>
  );
}

const GlobeAsiaAustralia = React.forwardRef<SVGSVGElement, IconProps>(GlobeAsiaAustraliaIcon);
export { GlobeAsiaAustralia };
