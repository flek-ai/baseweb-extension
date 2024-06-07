
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function ClipboardDocumentIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "ClipboardDocument", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6633 3.11765C17.8879 3.13319 18.1122 3.15026 18.336 3.16883C19.8753 3.29659 21 4.60281 21 6.10821V15.75C21 17.4068 19.6569 18.75 18 18.75V16.5C18 10.5781 13.4244 5.72484 7.61572 5.28281C7.93989 4.15127 8.91565 3.27245 10.1641 3.16883C10.3879 3.15026 10.6121 3.13319 10.8368 3.11765C11.3367 2.15647 12.3417 1.5 13.5 1.5H15C16.1584 1.5 17.1634 2.15647 17.6633 3.11765ZM12 4.5C12 3.67157 12.6716 3 13.5 3H15C15.8285 3 16.5 3.67157 16.5 4.5H12Z" fill="#0F172A"/>
    </Icon>
  );
}

const ClipboardDocument = React.forwardRef<SVGSVGElement, IconProps>(ClipboardDocumentIcon);
export { ClipboardDocument };
