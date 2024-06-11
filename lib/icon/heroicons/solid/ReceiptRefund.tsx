
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function ReceiptRefundIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "ReceiptRefund", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.5C10.079 1.5 8.18374 1.61114 6.32022 1.82741C4.82283 2.00119 3.75 3.28722 3.75 4.75699V21.75C3.75 21.9989 3.87345 22.2315 4.07953 22.3711C4.28561 22.5106 4.54748 22.5388 4.77854 22.4464L8.25 21.0578L11.7215 22.4464C11.9003 22.5179 12.0997 22.5179 12.2785 22.4464L15.75 21.0578L19.2215 22.4464C19.4525 22.5388 19.7144 22.5106 19.9205 22.3711C20.1266 22.2315 20.25 21.9989 20.25 21.75V4.75699C20.25 3.28722 19.1772 2.00119 17.6798 1.82741C15.8163 1.61114 13.921 1.5 12 1.5ZM11.0303 8.03033C11.3232 7.73744 11.3232 7.26256 11.0303 6.96967C10.7374 6.67678 10.2626 6.67678 9.96967 6.96967L7.71967 9.21967C7.42678 9.51256 7.42678 9.98744 7.71967 10.2803L9.96967 12.5303C10.2626 12.8232 10.7374 12.8232 11.0303 12.5303C11.3232 12.2374 11.3232 11.7626 11.0303 11.4697L10.0607 10.5H13.125C14.1605 10.5 15 11.3395 15 12.375C15 13.4105 14.1605 14.25 13.125 14.25H12C11.5858 14.25 11.25 14.5858 11.25 15C11.25 15.4142 11.5858 15.75 12 15.75H13.125C14.989 15.75 16.5 14.239 16.5 12.375C16.5 10.511 14.989 9 13.125 9H10.0607L11.0303 8.03033Z" />
    </Icon>
  );
}

const ReceiptRefund = React.forwardRef<SVGSVGElement, IconProps>(ReceiptRefundIcon);
export { ReceiptRefund };
