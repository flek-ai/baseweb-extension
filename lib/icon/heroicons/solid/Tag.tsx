
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function TagIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "Tag", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 2.25C3.59315 2.25 2.25 3.59315 2.25 5.25V9.56802C2.25 10.3637 2.56607 11.1267 3.12868 11.6893L12.7098 21.2705C13.6291 22.1898 15.0989 22.4564 16.2573 21.698C18.4242 20.2793 20.2793 18.4242 21.698 16.2573C22.4564 15.0989 22.1898 13.6291 21.2705 12.7098L11.6893 3.12868C11.1267 2.56607 10.3637 2.25 9.56802 2.25H5.25ZM6.375 7.5C6.99632 7.5 7.5 6.99632 7.5 6.375C7.5 5.75368 6.99632 5.25 6.375 5.25C5.75368 5.25 5.25 5.75368 5.25 6.375C5.25 6.99632 5.75368 7.5 6.375 7.5Z" />
    </Icon>
  );
}

const Tag = React.forwardRef<SVGSVGElement, IconProps>(TagIcon);
export { Tag };
