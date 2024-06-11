
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

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
      <path d="M7.5 3.375C7.5 2.33947 8.33947 1.5 9.375 1.5H9.75C11.8211 1.5 13.5 3.17893 13.5 5.25V7.125C13.5 8.16053 14.3395 9 15.375 9H17.25C19.3211 9 21 10.6789 21 12.75V16.125C21 17.1605 20.1605 18 19.125 18H9.375C8.33947 18 7.5 17.1605 7.5 16.125V3.375Z" />
<path d="M15 5.25C15 3.93695 14.518 2.73648 13.7212 1.8159C17.1201 2.70377 19.7962 5.37988 20.6841 8.77881C19.7635 7.98204 18.5631 7.5 17.25 7.5H15.375C15.1679 7.5 15 7.33211 15 7.125V5.25Z" />
<path d="M4.875 6H6V16.125C6 17.989 7.51104 19.5 9.375 19.5H16.5V20.625C16.5 21.6605 15.6605 22.5 14.625 22.5H4.875C3.83947 22.5 3 21.6605 3 20.625V7.875C3 6.83947 3.83947 6 4.875 6Z" />
    </Icon>
  );
}

const DocumentDuplicate = React.forwardRef<SVGSVGElement, IconProps>(DocumentDuplicateIcon);
export { DocumentDuplicate };
