
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function ArrowLeftStartOnRectangleIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "ArrowLeftStartOnRectangle", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 3.75C17.3284 3.75 18 4.42157 18 5.25V18.75C18 19.5784 17.3284 20.25 16.5 20.25H10.5C9.67157 20.25 9 19.5784 9 18.75V15C9 14.5858 8.66421 14.25 8.25 14.25C7.83579 14.25 7.5 14.5858 7.5 15V18.75C7.5 20.4069 8.84315 21.75 10.5 21.75H16.5C18.1569 21.75 19.5 20.4069 19.5 18.75V5.25C19.5 3.59315 18.1569 2.25 16.5 2.25L10.5 2.25C8.84315 2.25 7.5 3.59315 7.5 5.25V9C7.5 9.41422 7.83579 9.75 8.25 9.75C8.66421 9.75 9 9.41422 9 9V5.25C9 4.42157 9.67157 3.75 10.5 3.75L16.5 3.75ZM5.78033 8.46967C5.48744 8.17678 5.01256 8.17678 4.71967 8.46967L1.71967 11.4697C1.42678 11.7626 1.42678 12.2374 1.71967 12.5303L4.71967 15.5303C5.01256 15.8232 5.48744 15.8232 5.78033 15.5303C6.07322 15.2374 6.07322 14.7626 5.78033 14.4697L4.06066 12.75L15 12.75C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25L4.06066 11.25L5.78033 9.53033C6.07322 9.23744 6.07322 8.76256 5.78033 8.46967Z" fill="#0F172A"/>
    </Icon>
  );
}

const ArrowLeftStartOnRectangle = React.forwardRef<SVGSVGElement, IconProps>(ArrowLeftStartOnRectangleIcon);
export { ArrowLeftStartOnRectangle };