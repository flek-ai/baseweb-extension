
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function CameraIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "Camera", size, color, overrides = {}, ...restProps } = props;
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
      <path fill="none" d="M6.82689 6.1749C6.46581 6.75354 5.86127 7.13398 5.186 7.22994C4.80655 7.28386 4.42853 7.34223 4.05199 7.40497C2.99912 7.58042 2.25 8.50663 2.25 9.57402V18C2.25 19.2426 3.25736 20.25 4.5 20.25H19.5C20.7426 20.25 21.75 19.2426 21.75 18V9.57403C21.75 8.50664 21.0009 7.58043 19.948 7.40498C19.5715 7.34223 19.1934 7.28387 18.814 7.22995C18.1387 7.13398 17.5342 6.75354 17.1731 6.17491L16.3519 4.85889C15.9734 4.25237 15.3294 3.85838 14.6155 3.82005C13.7496 3.77355 12.8775 3.75 12 3.75C11.1225 3.75 10.2504 3.77355 9.3845 3.82005C8.6706 3.85838 8.02658 4.25237 7.64809 4.85889L6.82689 6.1749Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Icon>
  );
}

const Camera = React.forwardRef<SVGSVGElement, IconProps>(CameraIcon);
export { Camera };
