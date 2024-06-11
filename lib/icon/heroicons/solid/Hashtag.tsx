
import * as React from "react";
import { useStyletron } from "baseui/styles";
import { mergeOverride, toObjectOverride } from "../../../helpers/overrides";

import Icon from "../../icon";
import type { IconProps } from "../../types";

// @ts-ignore
function HashtagIcon(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = "Hashtag", size, color, overrides = {}, ...restProps } = props;
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0974 1.51457C11.5035 1.59581 11.767 1.99092 11.6857 2.39709L10.6651 7.50001H15.1351L16.2146 2.10292C16.2958 1.69675 16.6909 1.43334 17.0971 1.51457C17.5033 1.59581 17.7667 1.99092 17.6854 2.39709L16.6649 7.50001H20.25C20.6642 7.50001 21 7.83579 21 8.25001C21 8.66422 20.6642 9.00001 20.25 9.00001H16.3649L15.1649 15H18.75C19.1642 15 19.5 15.3358 19.5 15.75C19.5 16.1642 19.1642 16.5 18.75 16.5H14.8649L13.7854 21.8971C13.7042 22.3033 13.3091 22.5667 12.9029 22.4854C12.4967 22.4042 12.2333 22.0091 12.3146 21.6029L13.3351 16.5H8.86515L7.78573 21.8971C7.70449 22.3033 7.30938 22.5667 6.90321 22.4854C6.49704 22.4042 6.23362 22.0091 6.31486 21.6029L7.33544 16.5H3.75C3.33579 16.5 3 16.1642 3 15.75C3 15.3358 3.33579 15 3.75 15H7.63544L8.83544 9.00001H5.25C4.83579 9.00001 4.5 8.66422 4.5 8.25001C4.5 7.83579 4.83579 7.50001 5.25 7.50001H9.13544L10.2149 2.10292C10.2961 1.69675 10.6912 1.43334 11.0974 1.51457ZM10.3651 9.00001L9.16515 15H13.6351L14.8351 9.00001H10.3651Z" />
    </Icon>
  );
}

const Hashtag = React.forwardRef<SVGSVGElement, IconProps>(HashtagIcon);
export { Hashtag };
