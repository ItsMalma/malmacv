import { ReactNode } from "react";

export interface ContentSectionProps {
  name: string;
  children?: ReactNode;
  className?: string;
  nameClassName?: string;
}

export function ContentSection(props: ContentSectionProps) {
  return (
    <div className={`w-full flex flex-col gap-y-2 ${props.className ? props.className : ""}`}>
      <h1 className={`font-oswald text-3xl lg:text-4xl font-semibold text-slate-950 ${props.nameClassName ? props.nameClassName : ""}`}>{props.name}</h1>
      <hr />
      {props.children}
    </div>
  );
}