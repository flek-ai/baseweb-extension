
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function MegaphoneIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "Megaphone", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M16.8812 4.34543C14.81 5.17401 12.5917 5.7132 10.276 5.91302C9.60847 5.97061 8.93276 6.00002 8.25 6.00002H7.5C4.60051 6.00002 2.25 8.35052 2.25 11.25C2.25 13.8496 4.13945 16.0079 6.61997 16.4266C6.95424 17.7956 7.41805 19.1138 7.99764 20.3674C8.46171 21.3712 9.67181 21.6875 10.5803 21.163L11.2366 20.784C12.1167 20.2759 12.4023 19.1913 12.0087 18.3159C11.7738 17.7935 11.5642 17.2574 11.3814 16.709C13.2988 16.9671 15.1419 17.4588 16.8812 18.1546C17.6069 15.9852 18 13.6635 18 11.25C18 8.83648 17.6069 6.51478 16.8812 4.34543Z" fill="#0F172A"/>
    </Icon>
  );
}

const Megaphone = React.forwardRef<SVGSVGElement, IconProps>(MegaphoneIcon);
export { Megaphone };
