import { library } from "@fortawesome/fontawesome-svg-core"
import Sidebar from "./components/Sidebar"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"

library.add(fas, far)

export default function App() {
  return (
    <div className="w-full h-screen grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <Sidebar />
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
            <li className="font-oswald font-semibold text-slate-950">SMKN 4 KOTA TANGERANG (2022 - SEKARANG)</li>
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
