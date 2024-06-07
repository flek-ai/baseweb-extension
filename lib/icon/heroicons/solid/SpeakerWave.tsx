
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function SpeakerWaveIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "SpeakerWave", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M13.5 4.06069C13.5 2.72433 11.8843 2.05508 10.9393 3.00003L6.43934 7.50003H4.50905C3.36772 7.50003 2.19106 8.16447 1.8493 9.40508C1.62147 10.2322 1.5 11.1025 1.5 12C1.5 12.8975 1.62147 13.7679 1.8493 14.595C2.19106 15.8356 3.36772 16.5 4.50905 16.5H6.43934L10.9393 21C11.8843 21.945 13.5 21.2757 13.5 19.9394V4.06069Z" fill="#0F172A"/>
    </Icon>
  );
}

const SpeakerWave = React.forwardRef<SVGSVGElement, IconProps>(SpeakerWaveIcon);
export { SpeakerWave };
