
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function BriefcaseIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "Briefcase", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 5.25C7.5 3.59315 8.84315 2.25 10.5 2.25H13.5C15.1569 2.25 16.5 3.59315 16.5 5.25V5.45498C17.4325 5.54034 18.3574 5.65196 19.274 5.78912C20.7281 6.00668 21.75 7.27163 21.75 8.70569V11.7389C21.75 12.95 21.0164 14.0913 19.8137 14.4911C17.3566 15.308 14.7292 15.75 12 15.75C9.27087 15.75 6.64342 15.308 4.18627 14.4911C2.98364 14.0912 2.25 12.95 2.25 11.7389V8.70569C2.25 7.27163 3.27191 6.00668 4.72596 5.78912C5.6426 5.65196 6.56753 5.54034 7.5 5.45498V5.25ZM15 5.25V5.34082C14.0077 5.28056 13.0074 5.25 12 5.25C10.9927 5.25 9.99235 5.28056 9 5.34082V5.25C9 4.42157 9.67157 3.75 10.5 3.75H13.5C14.3284 3.75 15 4.42157 15 5.25ZM12 13.5C12.4142 13.5 12.75 13.1642 12.75 12.75C12.75 12.3358 12.4142 12 12 12C11.5858 12 11.25 12.3358 11.25 12.75C11.25 13.1642 11.5858 13.5 12 13.5Z" fill="#0F172A"/>
    </Icon>
  );
}

const Briefcase = React.forwardRef<SVGSVGElement, IconProps>(BriefcaseIcon);
export { Briefcase };
