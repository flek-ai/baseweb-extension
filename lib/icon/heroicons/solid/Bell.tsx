
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function BellIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "Bell", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25001 8.9998C5.25012 5.27197 8.27215 2.25 12 2.25C15.7279 2.25 18.75 5.27208 18.75 9L18.7498 9.04919V9.75C18.7498 11.8731 19.5508 13.8074 20.8684 15.2699C21.0349 15.4547 21.0989 15.71 21.0393 15.9516C20.9797 16.1931 20.8042 16.3893 20.5709 16.4755C19.0269 17.0455 17.4105 17.4659 15.7396 17.7192C15.7465 17.812 15.75 17.9056 15.75 18C15.75 20.0711 14.0711 21.75 12 21.75C9.92894 21.75 8.25001 20.0711 8.25001 18C8.25001 17.9056 8.25351 17.812 8.2604 17.7192C6.58934 17.4659 4.97287 17.0455 3.42875 16.4755C3.19539 16.3893 3.01992 16.1931 2.96033 15.9516C2.90073 15.71 2.96476 15.4547 3.13126 15.2699C4.44879 13.8074 5.24981 11.8731 5.24981 9.75L5.25001 8.9998ZM9.75221 17.8993C9.75075 17.9326 9.75001 17.9662 9.75001 18C9.75001 19.2426 10.7574 20.25 12 20.25C13.2427 20.25 14.25 19.2426 14.25 18C14.25 17.9662 14.2493 17.9326 14.2478 17.8992C13.5072 17.9659 12.7574 18 11.9998 18C11.2424 18 10.4927 17.966 9.75221 17.8993Z" fill="#0F172A"/>
    </Icon>
  );
}

const Bell = React.forwardRef<SVGSVGElement, IconProps>(BellIcon);
export { Bell };
