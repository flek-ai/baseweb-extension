
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function InboxStackIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "InboxStack", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9.83233V11.625C1.5 12.6605 2.33947 13.5 3.375 13.5H20.625C21.6605 13.5 22.5 12.6605 22.5 11.625V9.83233C22.5 9.11619 22.2438 8.42368 21.7778 7.87995L18.4929 4.04763C17.923 3.38269 17.0909 3 16.2151 3H7.78485C6.90908 3 6.07703 3.38269 5.50708 4.04763L2.22223 7.87995C1.75618 8.42368 1.5 9.1162 1.5 9.83233ZM7.78485 4.5C7.34697 4.5 6.93094 4.69134 6.64597 5.02381L3.88067 8.25H7.04584C8.0489 8.25 8.98559 8.7513 9.54199 9.5859L9.70609 9.83205C9.98429 10.2493 10.4526 10.5 10.9542 10.5H13.0458C13.5474 10.5 14.0157 10.2493 14.2939 9.83205L14.458 9.5859C15.0144 8.7513 15.9511 8.25 16.9542 8.25H20.1193L17.354 5.02381C17.0691 4.69134 16.653 4.5 16.2151 4.5H7.78485Z" fill="#0F172A"/>
    </Icon>
  );
}

const InboxStack = React.forwardRef<SVGSVGElement, IconProps>(InboxStackIcon);
export { InboxStack };
