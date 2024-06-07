
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

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
<path d="M18.2606 3.74072C19.0641 6.09642 19.5 8.6223 19.5 11.25C19.5 13.8777 19.0641 16.4036 18.2606 18.7593C18.2054 18.9211 18.1487 19.0821 18.0901 19.2422C17.9477 19.6312 18.1476 20.0619 18.5366 20.2043C18.9256 20.3467 19.3563 20.1468 19.4987 19.7578C19.6387 19.3753 19.7696 18.9884 19.891 18.5973C20.4147 16.9106 20.7627 15.1469 20.914 13.3278C21.431 12.7893 21.75 12.0567 21.75 11.25C21.75 10.4434 21.431 9.71073 20.914 9.17228C20.7627 7.35319 20.4147 5.58948 19.891 3.90274C19.7696 3.51165 19.6387 3.12472 19.4987 2.74221C19.3563 2.35324 18.9256 2.15334 18.5366 2.29572C18.1476 2.43811 17.9477 2.86885 18.0901 3.25783C18.1487 3.41795 18.2055 3.57898 18.2606 3.74072Z" fill="#0F172A"/>
    </Icon>
  );
}

const Megaphone = React.forwardRef<SVGSVGElement, IconProps>(MegaphoneIcon);
export { Megaphone };
