
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function BookOpenIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "BookOpen", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M11.25 4.53286C9.73455 3.56279 7.93246 3 6 3C4.86178 3 3.76756 3.19535 2.75007 3.55499C2.45037 3.66091 2.25 3.94425 2.25 4.26212V18.5121C2.25 18.7556 2.36818 18.9839 2.56696 19.1245C2.76574 19.265 3.02039 19.3004 3.24993 19.2192C4.10911 18.9156 5.03441 18.75 6 18.75C7.99502 18.75 9.82325 19.4573 11.25 20.6357V4.53286Z" fill="#0F172A"/>
    </Icon>
  );
}

const BookOpen = React.forwardRef<SVGSVGElement, IconProps>(BookOpenIcon);
export { BookOpen };
