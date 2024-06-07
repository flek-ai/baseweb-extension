
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function DocumentMagnifyingGlassIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "DocumentMagnifyingGlass", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M11.625 16.5C12.6605 16.5 13.5 15.6605 13.5 14.625C13.5 13.5895 12.6605 12.75 11.625 12.75C10.5895 12.75 9.75 13.5895 9.75 14.625C9.75 15.6605 10.5895 16.5 11.625 16.5Z" fill="#0F172A"/>
    </Icon>
  );
}

const DocumentMagnifyingGlass = React.forwardRef<SVGSVGElement, IconProps>(DocumentMagnifyingGlassIcon);
export { DocumentMagnifyingGlass };
