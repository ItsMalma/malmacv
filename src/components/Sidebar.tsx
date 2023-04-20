import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SidebarSection } from "./sidebars/SidebarSection";
import { SidebarSectionItemIcon } from "./sidebars/SidebarSectionItemIcon";
import { SidebarSectionItemStars, SidebarSectionStarType } from "./sidebars/SidebarSectionItemStars";

export function Sidebar() {
  return (
    <div className="w-full h-full bg-blue-900 flex flex-col gap-y-5 px-3 py-5">
      <img src="fotoDiri.webp" alt="Foto Saya Sendiri" className="w-36 mx-auto overflow-hidden object-cover object-center rounded-full border-2 border-white" width="385" height="385" />
      <SidebarSection name="Kontak">
        <SidebarSectionItemIcon iconName="envelope">adamakmal789@gmail.com</SidebarSectionItemIcon>
        <SidebarSectionItemIcon iconName="phone">+62 882 1427 7094</SidebarSectionItemIcon>
        <SidebarSectionItemIcon iconName="location-dot">Jl. Jaro Miran No. 217, Cibodas, Tangerang - 15138</SidebarSectionItemIcon>
        <SidebarSectionItemIcon iconName="globe">malma.my.id</SidebarSectionItemIcon>
      </SidebarSection>
      <SidebarSection name="Kemampuan">
        <SidebarSectionItemStars stars={[
          SidebarSectionStarType.Full,
          SidebarSectionStarType.Full,
          SidebarSectionStarType.Full,
          SidebarSectionStarType.Full,
          SidebarSectionStarType.None,
        ]}>Go</SidebarSectionItemStars>
        <SidebarSectionItemStars stars={[
          SidebarSectionStarType.Full,
          SidebarSectionStarType.Full,
          SidebarSectionStarType.Full,
          SidebarSectionStarType.None,
          SidebarSectionStarType.None,
        ]}>C#</SidebarSectionItemStars>
        <SidebarSectionItemStars stars={[
          SidebarSectionStarType.Full,
          SidebarSectionStarType.Full,
          SidebarSectionStarType.Full,
          SidebarSectionStarType.None,
          SidebarSectionStarType.None,
        ]}>Java</SidebarSectionItemStars>
        <SidebarSectionItemStars stars={[
          SidebarSectionStarType.Full,
          SidebarSectionStarType.Full,
          SidebarSectionStarType.Half,
          SidebarSectionStarType.None,
          SidebarSectionStarType.None,
        ]}>TypeScript</SidebarSectionItemStars>
        <SidebarSectionItemStars stars={[
          SidebarSectionStarType.Full,
          SidebarSectionStarType.Full,
          SidebarSectionStarType.None,
          SidebarSectionStarType.None,
          SidebarSectionStarType.None,
        ]}>JavaScript</SidebarSectionItemStars>
      </SidebarSection>
      <SidebarSection name="Bahasa">
      <SidebarSectionItemStars stars={[
          SidebarSectionStarType.Full,
          SidebarSectionStarType.Full,
          SidebarSectionStarType.Full,
          SidebarSectionStarType.Full,
          SidebarSectionStarType.Full,
        ]}>Indonesia</SidebarSectionItemStars>
        <SidebarSectionItemStars stars={[
          SidebarSectionStarType.Full,
          SidebarSectionStarType.Full,
          SidebarSectionStarType.Full,
          SidebarSectionStarType.None,
          SidebarSectionStarType.None,
        ]}>Inggris</SidebarSectionItemStars>
        <SidebarSectionItemStars stars={[
          SidebarSectionStarType.Full,
          SidebarSectionStarType.Half,
          SidebarSectionStarType.None,
          SidebarSectionStarType.None,
          SidebarSectionStarType.None,
        ]}>Jerman</SidebarSectionItemStars>
        <SidebarSectionItemStars stars={[
          SidebarSectionStarType.Full,
          SidebarSectionStarType.None,
          SidebarSectionStarType.None,
          SidebarSectionStarType.None,
          SidebarSectionStarType.None,
        ]}>Polski</SidebarSectionItemStars>
      </SidebarSection>
    </div>
  )
}