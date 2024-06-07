
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function DocumentDuplicateIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "DocumentDuplicate", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M7.5 3.375C7.5 2.33947 8.33947 1.5 9.375 1.5H9.75C11.8211 1.5 13.5 3.17893 13.5 5.25V7.125C13.5 8.16053 14.3395 9 15.375 9H17.25C19.3211 9 21 10.6789 21 12.75V16.125C21 17.1605 20.1605 18 19.125 18H9.375C8.33947 18 7.5 17.1605 7.5 16.125V3.375Z" fill="#0F172A"/>
    </Icon>
  );
}

const DocumentDuplicate = React.forwardRef<SVGSVGElement, IconProps>(DocumentDuplicateIcon);
export { DocumentDuplicate };
