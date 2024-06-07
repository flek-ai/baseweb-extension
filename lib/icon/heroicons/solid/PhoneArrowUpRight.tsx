
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function PhoneArrowUpRightIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "PhoneArrowUpRight", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15 3.75C15 3.33579 15.3358 3 15.75 3H20.25C20.6642 3 21 3.33579 21 3.75V8.25C21 8.66421 20.6642 9 20.25 9C19.8358 9 19.5 8.66421 19.5 8.25V5.56066L14.7803 10.2803C14.4874 10.5732 14.0126 10.5732 13.7197 10.2803C13.4268 9.98744 13.4268 9.51256 13.7197 9.21967L18.4393 4.5H15.75C15.3358 4.5 15 4.16421 15 3.75Z" fill="#0F172A"/>
    </Icon>
  );
}

const PhoneArrowUpRight = React.forwardRef<SVGSVGElement, IconProps>(PhoneArrowUpRightIcon);
export { PhoneArrowUpRight };
