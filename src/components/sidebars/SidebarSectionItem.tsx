import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

export interface SidebarSectionItemProps {
  children: ReactNode;
}

export function SidebarSectionItem(props: SidebarSectionItemProps) {
  return (
    <span className="flex gap-x-2 items-center">
      {props.children}
    </span>
  )
}