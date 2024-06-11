
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function EnvelopeOpenIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "EnvelopeOpen", size, color, overrides = {}, ...restProps } = props;
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
      <path d="M19.5 22.5C21.1569 22.5 22.5 21.1568 22.5 19.5V11.3262L15.6212 15.3481L19.1056 17.2243C19.4703 17.4206 19.6067 17.8755 19.4104 18.2402C19.214 18.6049 18.7591 18.7413 18.3944 18.545L12.7112 15.4847C12.2672 15.2457 11.7328 15.2457 11.2889 15.4847L5.60558 18.545C5.24087 18.7413 4.78603 18.6049 4.58965 18.2402C4.39327 17.8755 4.52972 17.4206 4.89442 17.2243L8.37878 15.3481L1.5 11.3262V19.5C1.5 21.1568 2.84315 22.5 4.5 22.5L19.5 22.5Z" />
<path d="M1.5 9.58861V8.84388C1.5 7.74023 2.10597 6.72571 3.0777 6.20247L10.5777 2.16401C11.4656 1.68589 12.5344 1.68589 13.4223 2.16401L20.9223 6.20247C21.894 6.72571 22.5 7.74024 22.5 8.84388V9.58861L14.0742 14.515L13.4223 14.164C12.5344 13.6859 11.4656 13.6859 10.5777 14.164L9.92585 14.515L1.5 9.58861Z" />
    </Icon>
  );
}

const EnvelopeOpen = React.forwardRef<SVGSVGElement, IconProps>(EnvelopeOpenIcon);
export { EnvelopeOpen };
