
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function MagnifyingGlassPlusIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "MagnifyingGlassPlus", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 3.75C6.77208 3.75 3.75 6.77208 3.75 10.5C3.75 14.2279 6.77208 17.25 10.5 17.25C12.3642 17.25 14.0506 16.4953 15.273 15.273C16.4953 14.0506 17.25 12.3642 17.25 10.5C17.25 6.77208 14.2279 3.75 10.5 3.75ZM2.25 10.5C2.25 5.94365 5.94365 2.25 10.5 2.25C15.0563 2.25 18.75 5.94365 18.75 10.5C18.75 12.5078 18.032 14.3491 16.8399 15.7793L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.7793 16.8399C14.3491 18.032 12.5078 18.75 10.5 18.75C5.94365 18.75 2.25 15.0563 2.25 10.5ZM10.5 6.75C10.9142 6.75 11.25 7.08579 11.25 7.5V9.75H13.5C13.9142 9.75 14.25 10.0858 14.25 10.5C14.25 10.9142 13.9142 11.25 13.5 11.25H11.25V13.5C11.25 13.9142 10.9142 14.25 10.5 14.25C10.0858 14.25 9.75 13.9142 9.75 13.5V11.25H7.5C7.08579 11.25 6.75 10.9142 6.75 10.5C6.75 10.0858 7.08579 9.75 7.5 9.75H9.75V7.5C9.75 7.08579 10.0858 6.75 10.5 6.75Z" />
    </Icon>
  );
}

const MagnifyingGlassPlus = React.forwardRef<SVGSVGElement, IconProps>(MagnifyingGlassPlusIcon);
export { MagnifyingGlassPlus };
