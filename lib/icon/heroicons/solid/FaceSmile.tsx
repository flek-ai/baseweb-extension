
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function FaceSmileIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "FaceSmile", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM9.375 8.25C8.83433 8.25 8.54674 8.66881 8.43901 8.88426C8.30886 9.14457 8.25 9.45171 8.25 9.75C8.25 10.0483 8.30886 10.3554 8.43901 10.6157C8.54674 10.8312 8.83433 11.25 9.375 11.25C9.91567 11.25 10.2033 10.8312 10.311 10.6157C10.4411 10.3554 10.5 10.0483 10.5 9.75C10.5 9.45171 10.4411 9.14457 10.311 8.88426C10.2033 8.66881 9.91567 8.25 9.375 8.25ZM13.689 8.88426C13.7967 8.66881 14.0843 8.25 14.625 8.25C15.1657 8.25 15.4533 8.66881 15.561 8.88426C15.6911 9.14457 15.75 9.45171 15.75 9.75C15.75 10.0483 15.6911 10.3554 15.561 10.6157C15.4533 10.8312 15.1657 11.25 14.625 11.25C14.0843 11.25 13.7967 10.8312 13.689 10.6157C13.5589 10.3554 13.5 10.0483 13.5 9.75C13.5 9.45171 13.5589 9.14457 13.689 8.88426ZM15.7123 15.7123C16.0052 15.4194 16.0052 14.9446 15.7123 14.6517C15.4194 14.3588 14.9445 14.3588 14.6517 14.6517C13.1872 16.1161 10.8128 16.1161 9.34835 14.6517C9.05546 14.3588 8.58058 14.3588 8.28769 14.6517C7.9948 14.9446 7.9948 15.4194 8.28769 15.7123C10.3379 17.7626 13.6621 17.7626 15.7123 15.7123Z" fill="#0F172A"/>
    </Icon>
  );
}

const FaceSmile = React.forwardRef<SVGSVGElement, IconProps>(FaceSmileIcon);
export { FaceSmile };