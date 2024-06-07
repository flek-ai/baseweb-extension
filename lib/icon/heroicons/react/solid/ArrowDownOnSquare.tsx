
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function ArrowDownOnSquareIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "ArrowDownOnSquare", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M12 1.5C12.4142 1.5 12.75 1.83579 12.75 2.25L12.75 7.5H11.25V2.25C11.25 1.83579 11.5858 1.5 12 1.5Z" fill="#0F172A"/>
    </Icon>
  );
}

const ArrowDownOnSquare = React.forwardRef<SVGSVGElement, IconProps>(ArrowDownOnSquareIcon);
export { ArrowDownOnSquare };
