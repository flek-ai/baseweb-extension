
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../../helpers/overrides";

import Icon from "../../../icon";
import type { IconProps } from "../../../types";

// @ts-ignore
function CakeIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "Cake", size, color, overrides = {}, ...restProps } = props;
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
      <path fill="none" d="M12 8.25V6.75M12 8.25C10.6448 8.25 9.30281 8.30616 7.97608 8.41627C6.84499 8.51015 6 9.47323 6 10.6082V13.1214M12 8.25C13.3552 8.25 14.6972 8.30616 16.0239 8.41627C17.155 8.51015 18 9.47323 18 10.6082V13.1214M15 8.25V6.75M9 8.25V6.75M21 16.5L19.5 17.25C18.5557 17.7221 17.4443 17.7221 16.5 17.25C15.5557 16.7779 14.4443 16.7779 13.5 17.25C12.5557 17.7221 11.4443 17.7221 10.5 17.25C9.55573 16.7779 8.44427 16.7779 7.5 17.25C6.55573 17.7221 5.44427 17.7221 4.5 17.25L3 16.5M18 13.1214C16.0344 12.8763 14.032 12.75 12 12.75C9.96804 12.75 7.96557 12.8763 6 13.1214M18 13.1214C18.3891 13.1699 18.7768 13.2231 19.163 13.2809C20.2321 13.4408 21 14.3747 21 15.4557V20.625C21 21.2463 20.4963 21.75 19.875 21.75H4.125C3.50368 21.75 3 21.2463 3 20.625V15.4557C3 14.3747 3.76793 13.4408 4.83697 13.2809C5.22316 13.2231 5.61086 13.1699 6 13.1214M12.2652 3.10983C12.4117 3.25628 12.4117 3.49372 12.2652 3.64016C12.1188 3.78661 11.8813 3.78661 11.7349 3.64016C11.5884 3.49372 11.5884 3.25628 11.7349 3.10983C11.8104 3.03429 12.0001 2.84467 12.0001 2.84467C12.0001 2.84467 12.1943 3.03893 12.2652 3.10983ZM9.26522 3.10983C9.41167 3.25628 9.41167 3.49372 9.26522 3.64016C9.11878 3.78661 8.88134 3.78661 8.73489 3.64016C8.58844 3.49372 8.58844 3.25628 8.73489 3.10983C8.81044 3.03429 9.00005 2.84467 9.00005 2.84467C9.00005 2.84467 9.19432 3.03893 9.26522 3.10983ZM15.2652 3.10983C15.4117 3.25628 15.4117 3.49372 15.2652 3.64016C15.1188 3.78661 14.8813 3.78661 14.7349 3.64016C14.5884 3.49372 14.5884 3.25628 14.7349 3.10983C14.8104 3.03429 15.0001 2.84467 15.0001 2.84467C15.0001 2.84467 15.1943 3.03893 15.2652 3.10983Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Icon>
  );
}

const Cake = React.forwardRef<SVGSVGElement, IconProps>(CakeIcon);
export { Cake };
