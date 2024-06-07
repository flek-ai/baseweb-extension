
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function CogIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "Cog", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M17.0039 10.4067C17.1423 10.8417 16.7882 11.2491 16.3317 11.2491H12.8667C12.5988 11.2491 12.3512 11.1062 12.2172 10.8742L10.4845 7.87324C10.2561 7.47765 10.4321 6.9671 10.8784 6.86997C11.2398 6.79133 11.6151 6.7499 12 6.7499C14.344 6.7499 16.3293 8.2861 17.0039 10.4067Z" fill="#0F172A"/>
    </Icon>
  );
}

const Cog = React.forwardRef<SVGSVGElement, IconProps>(CogIcon);
export { Cog };
