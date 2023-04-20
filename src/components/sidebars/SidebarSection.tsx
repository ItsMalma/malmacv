import { ReactNode } from "react";

export interface SidebarSectionProps {
  name: string;
  children: ReactNode;
}

export function SidebarSection(props: SidebarSectionProps) {
  return (
    <div className="w-full flex flex-col gap-y-2">
      <h1 className="font-oswald text-lg lg:text-xl font-semibold text-white">{props.name}</h1>
      <hr />
      {props.children}
    </div>
  );
}