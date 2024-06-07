const heroiconTemplate = (name, svgPath) => `
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function ${name}Icon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "${name}", size, color, overrides = {}, ...restProps } = props;
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
      ${svgPath}
    </Icon>
  );
}

const ${name} = React.forwardRef<SVGSVGElement, IconProps>(${name}Icon);
export { ${name} };
`;

module.exports = {
  heroiconTemplate,
};
