import { IconName } from "@fortawesome/fontawesome-svg-core";
import { SidebarSectionItem } from "./SidebarSectionItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface SidebarSectionItemIconProps {
  iconName: IconName;
  children: string;
}

export function SidebarSectionItemIcon(props: SidebarSectionItemIconProps) {
  return (
    <SidebarSectionItem>
      <FontAwesomeIcon className="text-white basis-1/12" icon={["fas", props.iconName]} size="lg" fixedWidth={true} />
      <p className="font-oswald text-white grow basis-11/12">{props.children}</p>
    </SidebarSectionItem>
  )
}