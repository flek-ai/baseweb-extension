
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function TrophyIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "Trophy", size, color, overrides = {}, ...restProps } = props;
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
      <path fill="none" d="M16.5003 18.75H7.50026M16.5003 18.75C18.1571 18.75 19.5003 20.0931 19.5003 21.75H4.50026C4.50026 20.0931 5.8434 18.75 7.50026 18.75M16.5003 18.75V15.375C16.5003 14.7537 15.9966 14.25 15.3753 14.25H14.5036M7.50026 18.75V15.375C7.50026 14.7537 8.00394 14.25 8.62526 14.25H9.49689M14.5036 14.25H9.49689M14.5036 14.25C13.9563 13.3038 13.6097 12.227 13.5222 11.0777M9.49689 14.25C10.0442 13.3038 10.3908 12.227 10.4783 11.0777M5.25026 4.23636C4.26796 4.3792 3.29561 4.55275 2.33423 4.75601C2.78454 7.42349 4.99518 9.49282 7.72991 9.72775M5.25026 4.23636V4.5C5.25026 6.60778 6.21636 8.48992 7.72991 9.72775M5.25026 4.23636V2.72089C7.45568 2.41051 9.70922 2.25 12.0003 2.25C14.2913 2.25 16.5448 2.41051 18.7503 2.72089V4.23636M7.72991 9.72775C8.51748 10.3719 9.45329 10.8415 10.4783 11.0777M18.7503 4.23636V4.5C18.7503 6.60778 17.7842 8.48992 16.2706 9.72775M18.7503 4.23636C19.7326 4.3792 20.7049 4.55275 21.6663 4.75601C21.216 7.42349 19.0053 9.49282 16.2706 9.72775M16.2706 9.72775C15.483 10.3719 14.5472 10.8415 13.5222 11.0777M13.5222 11.0777C13.0331 11.1904 12.5236 11.25 12.0003 11.25C11.4769 11.25 10.9675 11.1904 10.4783 11.0777" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Icon>
  );
}

const Trophy = React.forwardRef<SVGSVGElement, IconProps>(TrophyIcon);
export { Trophy };
