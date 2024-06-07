
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
<path d="M18.5837 5.10567C18.8766 4.81278 19.3514 4.81278 19.6443 5.10567C23.452 8.91328 23.452 15.0866 19.6443 18.8943C19.3514 19.1871 18.8766 19.1871 18.5837 18.8943C18.2908 18.6014 18.2908 18.1265 18.5837 17.8336C21.8055 14.6118 21.8055 9.38816 18.5837 6.16633C18.2908 5.87344 18.2908 5.39856 18.5837 5.10567Z" fill="#0F172A"/>
<path d="M15.9323 7.7574C16.2252 7.46451 16.7001 7.46451 16.993 7.7574C19.3361 10.1005 19.3361 13.8995 16.993 16.2427C16.7001 16.5356 16.2252 16.5356 15.9323 16.2427C15.6394 15.9498 15.6394 15.4749 15.9323 15.182C17.6897 13.4247 17.6897 10.5754 15.9323 8.81806C15.6394 8.52517 15.6394 8.0503 15.9323 7.7574Z" fill="#0F172A"/>
    </Icon>
  );
}

const SpeakerWave = React.forwardRef<SVGSVGElement, IconProps>(SpeakerWaveIcon);
export { SpeakerWave };
