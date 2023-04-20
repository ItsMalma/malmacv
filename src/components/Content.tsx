import { ContentSection } from "./contents/ContentSection"
import { ContentSectionList } from "./contents/ContentSectionList";

export function Content() {
  return (
    <div className="w-full h-full flex flex-col gap-y-8 p-5 md:col-span-2 lg:col-span-3 xl:col-span-4">
      <ContentSection name="ADAM AKMAL MADANI" nameClassName="text-5xl lg:text-6xl" />
      <ContentSection name="PROFIL">
        <p className="font-oswald text-slate-950">Halo, saya Adam Akmal Madani. Saat ini saya masih bersekolah di SMKN 4 Kota Tangerang di kelas X dengan jurusan Rekayasa Perangkat Lunak. Saya tertarik dengan pemrograman dan telah mempelajarinya semenjak SMP kelas 7.</p>
        <p className="font-oswald text-slate-950">Saat ini, saya sedang fokus dalam bidang Backend Web Development khususnya dalam pembuatan REST API menggunakan bahasa pemrograman Go. Selain itu, saya juga menguasai dasar-dasar Frontend seperti HTML, CSS, dan Javascript.</p>
        <p className="font-oswald text-slate-950">Selama menekuni dunia pemrograman, saya telah menguasai beberapa bahasa pemrograman seperti C# (ASP.NET), Java, dan TypeScript. Saya sangat tertarik untuk terus mengembangkan keahlian dan kemampuan saya dalam dunia pemrograman untuk mencapai tujuan dan impian saya di masa depan. Terima kasih atas perhatiannya.</p>
      </ContentSection>
      <ContentSection name="PENDIDIKAN">
        <ContentSectionList items={["SMKN 4 KOTA TANGERANG (2022 - SEKARANG)"]} />
      </ContentSection>
      <ContentSection name="KEAHLIAN">
        <ContentSectionList items={[]} />
      </ContentSection>
    </div>
  );
}