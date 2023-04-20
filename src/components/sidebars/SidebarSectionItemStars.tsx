import { IconName } from "@fortawesome/fontawesome-svg-core";
import { SidebarSectionItem } from "./SidebarSectionItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export enum SidebarSectionStarType {
  Full,
  Half,
  None
}

export interface SidebarSectionItemStarsProps {
  stars: [SidebarSectionStarType, SidebarSectionStarType, SidebarSectionStarType, SidebarSectionStarType, SidebarSectionStarType];
  children: string;
}

export function SidebarSectionItemStars(props: SidebarSectionItemStarsProps) {
  return (
    <SidebarSectionItem>
      <p className="font-oswald text-white basis-1/2">{props.children}</p>
      <span className="flex gap-x-1 items-center justify-end basis-1/2">
        {props.stars.map((star, index) => {
          switch (star) {
            case SidebarSectionStarType.Full:
              return <FontAwesomeIcon key={index} className="text-white basis-1/5" icon={["fas", "star"]} size="lg" fixedWidth={true} />
            case SidebarSectionStarType.Half:
              return <FontAwesomeIcon key={index} className="text-white basis-1/5" icon={["fas", "star-half-stroke"]} size="lg" fixedWidth={true} />
            case SidebarSectionStarType.None:
              return <FontAwesomeIcon key={index} className="text-white basis-1/5" icon={["far", "star"]} size="lg" fixedWidth={true} />
          }
        })}
      </span>
    </SidebarSectionItem>
  )
}