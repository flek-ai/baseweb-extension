
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function ArrowUpCircleIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "ArrowUpCircle", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM12.5303 7.71967C12.3897 7.57902 12.1989 7.5 12 7.5C11.8011 7.5 11.6103 7.57902 11.4697 7.71967L8.46967 10.7197C8.17678 11.0126 8.17678 11.4874 8.46967 11.7803C8.76256 12.0732 9.23744 12.0732 9.53033 11.7803L11.25 10.0607L11.25 15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75L12.75 10.0607L14.4697 11.7803C14.7626 12.0732 15.2374 12.0732 15.5303 11.7803C15.8232 11.4874 15.8232 11.0126 15.5303 10.7197L12.5303 7.71967Z" />
    </Icon>
  );
}

const ArrowUpCircle = React.forwardRef<SVGSVGElement, IconProps>(ArrowUpCircleIcon);
export { ArrowUpCircle };
