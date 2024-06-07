
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function PuzzlePieceIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "PuzzlePiece", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M11.25 5.33694C11.25 4.98178 11.064 4.66076 10.8488 4.3782C10.6279 4.0881 10.5 3.744 10.5 3.375C10.5 2.33947 11.5074 1.5 12.75 1.5C13.9926 1.5 15 2.33947 15 3.375C15 3.744 14.8721 4.0881 14.6512 4.3782C14.436 4.66076 14.25 4.98178 14.25 5.33694C14.25 5.66929 14.5277 5.9346 14.8595 5.9148C16.7701 5.80079 18.6498 5.57328 20.4922 5.23898C20.6949 5.20219 20.9039 5.25044 21.07 5.37241C21.2361 5.49437 21.3447 5.6793 21.3703 5.88377C21.5943 7.67324 21.7213 9.49263 21.7459 11.3365C21.7508 11.7028 21.4533 11.9999 21.0869 12C20.7318 12 20.4108 11.814 20.1282 11.5988C19.8381 11.3779 19.494 11.25 19.125 11.25C18.0895 11.25 17.25 12.2574 17.25 13.5C17.25 14.7426 18.0895 15.75 19.125 15.75C19.494 15.75 19.8381 15.6221 20.1282 15.4012C20.4108 15.186 20.7318 15 21.0869 15C21.3974 15 21.6439 15.2617 21.6214 15.5713C21.5028 17.2098 21.3031 18.8261 21.0263 20.4161C20.9721 20.728 20.7279 20.9721 20.416 21.0264C18.5969 21.343 16.7434 21.5587 14.8615 21.6677C14.5285 21.6869 14.25 21.4205 14.25 21.0869C14.25 20.7318 14.436 20.4108 14.6512 20.1282C14.8721 19.8381 15 19.494 15 19.125C15 18.0895 13.9926 17.25 12.75 17.25C11.5074 17.25 10.5 18.0895 10.5 19.125C10.5 19.494 10.6279 19.8381 10.8488 20.1282C11.064 20.4108 11.25 20.7318 11.25 21.0869C11.25 21.4485 10.954 21.7405 10.5925 21.7303C9.00303 21.6852 7.43238 21.564 5.88413 21.3702C5.67966 21.3446 5.49473 21.236 5.37277 21.0699C5.25081 20.9038 5.20256 20.6948 5.23935 20.4921C5.53223 18.8781 5.74315 17.2354 5.8676 15.5683C5.89058 15.2605 5.64563 15 5.33694 15C4.98178 15 4.66076 15.186 4.3782 15.4012C4.0881 15.6221 3.744 15.75 3.375 15.75C2.33947 15.75 1.5 14.7426 1.5 13.5C1.5 12.2574 2.33947 11.25 3.375 11.25C3.744 11.25 4.0881 11.3779 4.3782 11.5988C4.66076 11.814 4.98178 12 5.33694 12C5.7033 12 6.00078 11.703 5.99574 11.3367C5.97334 9.70845 5.86862 8.10026 5.68559 6.51628C5.6593 6.28881 5.73838 6.06178 5.9003 5.89986C6.06222 5.73794 6.28924 5.65886 6.51672 5.68515C7.85902 5.84025 9.2186 5.93912 10.5931 5.97931C10.9541 5.98987 11.25 5.69817 11.25 5.33694Z" fill="#0F172A"/>
    </Icon>
  );
}

const PuzzlePiece = React.forwardRef<SVGSVGElement, IconProps>(PuzzlePieceIcon);
export { PuzzlePiece };
