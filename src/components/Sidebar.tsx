import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar() {
  return (
    <div className="w-full h-full bg-blue-900 flex flex-col gap-y-5 px-3 py-5">
      <img src="fotoDiri.webp" alt="Foto Saya Sendiri" className="w-36 mx-auto overflow-hidden object-cover object-center rounded-full border-2 border-white" width="385" height="385" />
      <div className="w-full flex flex-col gap-y-2">
        <h1 className="font-oswald text-lg lg:text-xl font-semibold text-white">Kontak</h1>
        <hr />
        <span className="flex gap-x-2 items-center">
          <FontAwesomeIcon className="text-white basis-1/12" icon={["fas", "envelope"]} size="lg" fixedWidth={true} />
          <p className="font-oswald text-white grow basis-11/12">adamakmal789@gmail.com</p>
        </span>
        <span className="flex gap-x-2 items-center">
          <FontAwesomeIcon className="text-white basis-1/12" icon={["fas", "phone"]} size="lg" fixedWidth={true} />
          <p className="font-oswald text-white grow basis-11/12">+62 882 1427 7094</p>
        </span>
        <span className="flex gap-x-2 items-center">
          <FontAwesomeIcon className="text-white basis-1/12" icon={["fas", "location-dot"]} size="lg" fixedWidth={true} />
          <p className="font-oswald text-white grow basis-11/12">Jl. Jaro Miran No. 217, Cibodas, Tangerang - 15138</p>
        </span>
        <span className="flex gap-x-2 items-center">
          <FontAwesomeIcon className="text-white basis-1/12" icon={["fas", "globe"]} size="lg" fixedWidth={true} />
          <p className="font-oswald text-white grow basis-11/12">malma.my.id</p>
        </span>
      </div>
      <div className="w-full flex flex-col gap-y-2">
        <h1 className="font-oswald text-lg lg:text-xl font-semibold text-white">Kemampuan</h1>
        <hr />
        <span className="flex gap-x-2 items-center">
          <p className="font-oswald text-white basis-1/2">Go</p>
          <span className="flex gap-x-1 items-center basis-1/2">
            <FontAwesomeIcon className="text-white basis-1/12" icon={["fas", "star"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["fas", "star"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["fas", "star"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["fas", "star"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["far", "star"]} size="lg" fixedWidth={true} />
          </span>
        </span>
        <span className="flex gap-x-2 items-center">
          <p className="font-oswald text-white basis-1/2">C#</p>
          <span className="flex gap-x-1 items-center basis-1/2">
            <FontAwesomeIcon className="text-white basis-1/12" icon={["fas", "star"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["fas", "star"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["fas", "star"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["far", "star"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["far", "star"]} size="lg" fixedWidth={true} />
          </span>
        </span>
        <span className="flex gap-x-2 items-center">
          <p className="font-oswald text-white basis-1/2">TypeScript</p>
          <span className="flex gap-x-1 items-center basis-1/2">
            <FontAwesomeIcon className="text-white basis-1/12" icon={["fas", "star"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["fas", "star"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["fas", "star-half-stroke"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["far", "star"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["far", "star"]} size="lg" fixedWidth={true} />
          </span>
        </span>
        <span className="flex gap-x-2 items-center">
          <p className="font-oswald text-white basis-1/2">JavaScript</p>
          <span className="flex gap-x-1 items-center basis-1/2">
            <FontAwesomeIcon className="text-white basis-1/12" icon={["fas", "star"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["fas", "star"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["far", "star"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["far", "star"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["far", "star"]} size="lg" fixedWidth={true} />
          </span>
        </span>
      </div>
      <div className="w-full flex flex-col gap-y-2">
        <h1 className="font-oswald text-lg lg:text-xl font-semibold text-white">Bahasa</h1>
        <hr />
        <span className="flex gap-x-2 items-center">
          <p className="font-oswald text-white basis-1/2">Indonesia</p>
          <span className="flex gap-x-1 items-center basis-1/2">
            <FontAwesomeIcon className="text-white basis-1/12" icon={["fas", "star"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["fas", "star"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["fas", "star"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["fas", "star"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["fas", "star"]} size="lg" fixedWidth={true} />
          </span>
        </span>
        <span className="flex gap-x-2 items-center">
          <p className="font-oswald text-white basis-1/2">Inggris</p>
          <span className="flex gap-x-1 items-center basis-1/2">
            <FontAwesomeIcon className="text-white basis-1/12" icon={["fas", "star"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["fas", "star"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["fas", "star"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["far", "star"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["far", "star"]} size="lg" fixedWidth={true} />
          </span>
        </span>
        <span className="flex gap-x-2 items-center">
          <p className="font-oswald text-white basis-1/2">Jerman</p>
          <span className="flex gap-x-1 items-center basis-1/2">
            <FontAwesomeIcon className="text-white basis-1/12" icon={["fas", "star"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["fas", "star-half-stroke"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["far", "star"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["far", "star"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["far", "star"]} size="lg" fixedWidth={true} />
          </span>
        </span>
        <span className="flex gap-x-2 items-center">
          <p className="font-oswald text-white basis-1/2">Polski</p>
          <span className="flex gap-x-1 items-center basis-1/2">
            <FontAwesomeIcon className="text-white basis-1/12" icon={["fas", "star"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["far", "star"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["far", "star"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["far", "star"]} size="lg" fixedWidth={true} />
            <FontAwesomeIcon className="text-white basis-1/12" icon={["far", "star"]} size="lg" fixedWidth={true} />
          </span>
        </span>
      </div>
    </div>
  )
}