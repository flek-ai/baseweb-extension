
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function BookmarkIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "Bookmark", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.32022 2.57741C8.18374 2.36114 10.079 2.25 12 2.25C13.921 2.25 15.8163 2.36114 17.6798 2.57741C19.1772 2.75119 20.25 4.03722 20.25 5.50699V21C20.25 21.2599 20.1154 21.5013 19.8943 21.638C19.6732 21.7746 19.3971 21.7871 19.1646 21.6708L12 18.0885L4.83541 21.6708C4.60292 21.7871 4.32681 21.7746 4.1057 21.638C3.88459 21.5013 3.75 21.2599 3.75 21V5.50699C3.75 4.03722 4.82283 2.75119 6.32022 2.57741Z" fill="#0F172A"/>
    </Icon>
  );
}

const Bookmark = React.forwardRef<SVGSVGElement, IconProps>(BookmarkIcon);
export { Bookmark };
