
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function SpeakerXMarkIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "SpeakerXMark", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M13.5 4.06069C13.5 2.72433 11.8843 2.05508 10.9393 3.00003L6.43934 7.50003H4.50905C3.36772 7.50003 2.19106 8.16447 1.8493 9.40508C1.62147 10.2322 1.5 11.1025 1.5 12C1.5 12.8975 1.62147 13.7679 1.8493 14.595C2.19106 15.8356 3.36772 16.5 4.50905 16.5H6.43934L10.9393 21C11.8843 21.945 13.5 21.2757 13.5 19.9394V4.06069Z" />
<path d="M17.7803 9.21969C17.4874 8.92679 17.0126 8.92679 16.7197 9.21969C16.4268 9.51258 16.4268 9.98745 16.7197 10.2803L18.4393 12L16.7197 13.7197C16.4268 14.0126 16.4268 14.4875 16.7197 14.7803C17.0126 15.0732 17.4874 15.0732 17.7803 14.7803L19.5 13.0607L21.2197 14.7803C21.5126 15.0732 21.9874 15.0732 22.2803 14.7803C22.5732 14.4875 22.5732 14.0126 22.2803 13.7197L20.5607 12L22.2803 10.2803C22.5732 9.98745 22.5732 9.51258 22.2803 9.21969C21.9874 8.92679 21.5126 8.92679 21.2197 9.21969L19.5 10.9394L17.7803 9.21969Z" />
    </Icon>
  );
}

const SpeakerXMark = React.forwardRef<SVGSVGElement, IconProps>(SpeakerXMarkIcon);
export { SpeakerXMark };
