export default function App() {
  return (
    <div className="w-full h-screen grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <div className="w-full h-full bg-blue-900 flex flex-col gap-y-5 px-3 py-5">
        <img src="fotoDiri.webp" alt="Foto Saya Sendiri" className="w-36 mx-auto overflow-hidden object-cover object-center rounded-full border-2 border-white" width="385" height="385" />
        <div className="w-full flex flex-col gap-y-2">
          <h1 className="font-oswald text-lg lg:text-xl font-semibold text-white">Kontak</h1>
          <hr />
          <span className="flex gap-x-2 items-center">
            <i className="fa-sharp fa-solid fa-envelope fa-lg text-white fa-fw basis-1/12"></i>
            <p className="font-oswald text-white grow basis-11/12">adamakmal789@gmail.com</p>
          </span>
          <span className="flex gap-x-2 items-center">
            <i className="fa-sharp fa-solid fa-phone fa-lg text-white fa-fw basis-1/12"></i>
            <p className="font-oswald text-white grow basis-11/12">+62 882 1427 7094</p>
          </span>
          <span className="flex gap-x-2 items-center">
            <i className="fa-sharp fa-solid fa-location-dot fa-lg text-white fa-fw basis-1/12"></i>
            <p className="font-oswald text-white grow basis-11/12">Jl. Jaro Miran No. 217, Cibodas, Tangerang - 15138</p>
          </span>
          <span className="flex gap-x-2 items-center">
            <i className="fa-sharp fa-solid fa-globe fa-lg text-white fa-fw basis-1/12"></i>
            <p className="font-oswald text-white grow basis-11/12">malma.my.id</p>
          </span>
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <h1 className="font-oswald text-lg lg:text-xl font-semibold text-white">Kemampuan</h1>
          <hr />
          <span className="flex gap-x-2 items-center">
            <p className="font-oswald text-white basis-1/2">Go</p>
            <span className="flex gap-x-1 items-center basis-1/2">
              <i className="fa-sharp fa-solid fa-star fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-solid fa-star fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-solid fa-star fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-solid fa-star fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-regular fa-star fa-lg text-white fa-fw"></i>
            </span>
          </span>
          <span className="flex gap-x-2 items-center">
            <p className="font-oswald text-white basis-1/2">C#</p>
            <span className="flex gap-x-1 items-center basis-1/2">
              <i className="fa-sharp fa-solid fa-star fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-solid fa-star fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-solid fa-star fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-regular fa-star fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-regular fa-star fa-lg text-white fa-fw"></i>
            </span>
          </span>
          <span className="flex gap-x-2 items-center">
            <p className="font-oswald text-white basis-1/2">TypeScript</p>
            <span className="flex gap-x-1 items-center basis-1/2">
              <i className="fa-sharp fa-solid fa-star fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-solid fa-star fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-solid fa-star-half-stroke fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-regular fa-star fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-regular fa-star fa-lg text-white fa-fw"></i>
            </span>
          </span>
          <span className="flex gap-x-2 items-center">
            <p className="font-oswald text-white basis-1/2">JavaScript</p>
            <span className="flex gap-x-1 items-center basis-1/2">
              <i className="fa-sharp fa-solid fa-star fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-solid fa-star fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-regular fa-star fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-regular fa-star fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-regular fa-star fa-lg text-white fa-fw"></i>
            </span>
          </span>
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <h1 className="font-oswald text-lg lg:text-xl font-semibold text-white">Bahasa</h1>
          <hr />
          <span className="flex gap-x-2 items-center">
            <p className="font-oswald text-white basis-1/2">Indonesia</p>
            <span className="flex gap-x-1 items-center basis-1/2">
              <i className="fa-sharp fa-solid fa-star fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-solid fa-star fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-solid fa-star fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-solid fa-star fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-solid fa-star fa-lg text-white fa-fw"></i>
            </span>
          </span>
          <span className="flex gap-x-2 items-center">
            <p className="font-oswald text-white basis-1/2">Inggris</p>
            <span className="flex gap-x-1 items-center basis-1/2">
              <i className="fa-sharp fa-solid fa-star fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-solid fa-star fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-solid fa-star fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-regular fa-star fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-regular fa-star fa-lg text-white fa-fw"></i>
            </span>
          </span>
          <span className="flex gap-x-2 items-center">
            <p className="font-oswald text-white basis-1/2">Jerman</p>
            <span className="flex gap-x-1 items-center basis-1/2">
              <i className="fa-sharp fa-solid fa-star fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-solid fa-star-half-stroke fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-regular fa-star fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-regular fa-star fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-regular fa-star fa-lg text-white fa-fw"></i>
            </span>
          </span>
          <span className="flex gap-x-2 items-center">
            <p className="font-oswald text-white basis-1/2">Polski</p>
            <span className="flex gap-x-1 items-center basis-1/2">
              <i className="fa-sharp fa-solid fa-star fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-regular fa-star fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-regular fa-star fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-regular fa-star fa-lg text-white fa-fw"></i>
              <i className="fa-sharp fa-regular fa-star fa-lg text-white fa-fw"></i>
            </span>
          </span>
        </div>
      </div>
      <div className="w-full h-full flex flex-col gap-y-8 p-5 md:col-span-2 lg:col-span-3 xl:col-span-4">
        <div className="w-full flex flex-col gap-y-2">
          <h1 className="font-oswald text-5xl lg:text-6xl font-semibold text-slate-950">ADAM AKMAL MADANI</h1>
          <hr />
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <h1 className="font-oswald text-3xl lg:text-4xl font-semibold text-slate-950">PROFIL</h1>
          <hr />
          <p className="font-oswald text-slate-950">Halo, saya Adam Akmal Madani. Saat ini saya masih bersekolah di SMKN 4 Kota Tangerang di kelas X dengan jurusan Rekayasa Perangkat Lunak. Saya tertarik dengan pemrograman dan telah mempelajarinya semenjak SMP kelas 7.</p>
          <p className="font-oswald text-slate-950">Saat ini, saya sedang fokus dalam bidang Backend Web Development khususnya dalam pembuatan REST API menggunakan bahasa pemrograman Go. Selain itu, saya juga menguasai dasar-dasar Frontend seperti HTML, CSS, dan Javascript.</p>
          <p className="font-oswald text-slate-950">Selama menekuni dunia pemrograman, saya telah menguasai beberapa bahasa pemrograman seperti C# (ASP.NET), Java, dan TypeScript. Saya sangat tertarik untuk terus mengembangkan keahlian dan kemampuan saya dalam dunia pemrograman untuk mencapai tujuan dan impian saya di masa depan. Terima kasih atas perhatiannya.</p>
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <h1 className="font-oswald text-3xl lg:text-4xl font-semibold text-slate-950">PENDIDIKAN</h1>
          <hr />
          <ul className="list-disc list-inside">
            <li className="font-oswald font-semibold text-slate-950">SMKN 4 KOTA TANGERANG (2022 - SEKARNANG)</li>
          </ul>
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <h1 className="font-oswald text-3xl lg:text-4xl font-semibold text-slate-950">PRESTASI</h1>
          <hr />
          <ul className="list-disc list-inside">
            
          </ul>
        </div>
      </div>
    </div>
  )
}
