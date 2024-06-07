
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function ArrowRightEndOnRectangleIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "ArrowRightEndOnRectangle", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 3.75C17.3284 3.75 18 4.42157 18 5.25L18 18.75C18 19.5784 17.3284 20.25 16.5 20.25H10.5C9.67157 20.25 9 19.5784 9 18.75V15C9 14.5858 8.66421 14.25 8.25 14.25C7.83579 14.25 7.5 14.5858 7.5 15V18.75C7.5 20.4069 8.84315 21.75 10.5 21.75H16.5C18.1569 21.75 19.5 20.4069 19.5 18.75L19.5 5.25C19.5 3.59315 18.1569 2.25 16.5 2.25L10.5 2.25C8.84315 2.25 7.5 3.59315 7.5 5.25V9C7.5 9.41421 7.83578 9.75 8.25 9.75C8.66421 9.75 9 9.41421 9 9V5.25C9 4.42157 9.67157 3.75 10.5 3.75L16.5 3.75ZM11.4697 8.46967C11.1768 8.76256 11.1768 9.23744 11.4697 9.53033L13.1893 11.25L2.25 11.25C1.83578 11.25 1.5 11.5858 1.5 12C1.5 12.4142 1.83578 12.75 2.25 12.75L13.1893 12.75L11.4697 14.4697C11.1768 14.7626 11.1768 15.2374 11.4697 15.5303C11.7626 15.8232 12.2374 15.8232 12.5303 15.5303L15.5303 12.5303C15.8232 12.2374 15.8232 11.7626 15.5303 11.4697L12.5303 8.46967C12.2374 8.17678 11.7626 8.17678 11.4697 8.46967Z" fill="#0F172A"/>
    </Icon>
  );
}

const ArrowRightEndOnRectangle = React.forwardRef<SVGSVGElement, IconProps>(ArrowRightEndOnRectangleIcon);
export { ArrowRightEndOnRectangle };
