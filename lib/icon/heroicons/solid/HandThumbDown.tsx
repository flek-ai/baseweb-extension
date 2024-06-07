
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function HandThumbDownIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "HandThumbDown", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M15.7303 5.5L16.7647 5.5C17.5455 6.68343 18 8.10114 18 9.625C18 11.1489 17.5455 12.5666 16.7647 13.75L16.6174 13.75C15.8111 13.75 15.0835 14.1958 14.5859 14.8303C13.8127 15.8162 12.8383 16.6366 11.7245 17.2298C11.0023 17.6144 10.3757 18.1857 10.0719 18.9454C9.85924 19.4769 9.75 20.0441 9.75 20.6166V21.25C9.75 21.6642 9.41421 22 9 22C7.75736 22 6.75 20.9926 6.75 19.75C6.75 18.5984 7.00956 17.5074 7.47337 16.5323C7.73896 15.974 7.36638 15.25 6.74809 15.25L3.62227 15.25C2.59564 15.25 1.6767 14.556 1.56801 13.5351C1.52306 13.1129 1.5 12.6841 1.5 12.25C1.5 9.40238 2.49188 6.78642 4.149 4.72878C4.5366 4.24749 5.13581 4 5.75377 4L9.76975 4C10.2534 4 10.7339 4.07798 11.1928 4.23093L14.3072 5.26908C14.7661 5.42203 15.2466 5.5 15.7303 5.5Z" fill="#0F172A"/>
<path d="M21.6685 14.0229C22.2052 12.6611 22.5 11.1775 22.5 9.625C22.5 8.40493 22.3179 7.22738 21.9794 6.11805C21.7201 5.26802 20.8958 4.75 20.0071 4.75L19.0993 4.75C18.6538 4.75 18.3786 5.24827 18.5758 5.6478C19.1675 6.84708 19.5 8.19722 19.5 9.625C19.5 11.3332 19.0241 12.9302 18.1977 14.2907C17.9527 14.6941 18.226 15.25 18.6979 15.25H19.7506C20.5827 15.25 21.3635 14.797 21.6685 14.0229Z" fill="#0F172A"/>
    </Icon>
  );
}

const HandThumbDown = React.forwardRef<SVGSVGElement, IconProps>(HandThumbDownIcon);
export { HandThumbDown };
