import type { NextPage } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const temata: Array<{ nazev: string; typ: "video" | "serie"; odkaz: string }> = [
  {
    nazev: "Vývoj webových aplikací",
    typ: "serie",
    odkaz: "https://www.youtube.com/playlist?list=PLKkDvxLpWDX26YIMc-2sjlO4a5U8t9C3h",
  },
  {
    nazev: "HTML",
    typ: "video",
    odkaz: "https://youtu.be/dBQT3xS64CU",
  },
  {
    nazev: "CSS",
    typ: "video",
    odkaz: "https://youtu.be/3DIPAoqpUCs",
  },
  {
    nazev: "TailwindCSS",
    typ: "video",
    odkaz: "https://youtu.be/cTvKBiIruNI",
  },
  {
    nazev: "Vývoj vlastního Minecraft pluginu",
    typ: "serie",
    odkaz: "https://www.youtube.com/playlist?list=PLKkDvxLpWDX3ZvnuVHh2faaIlSdVE_jPc",
  },
  {
    nazev: "PHP",
    typ: "serie",
    odkaz: "https://youtube.com/playlist?list=PLKkDvxLpWDX30NNTvIrqCq-R43Lf1rtM9",
  },
  {
    nazev: "Adobe Photoshop",
    typ: "serie",
    odkaz: "https://www.youtube.com/playlist?list=PLKkDvxLpWDX3Ye0Cet9DoLNb9IFDijmof",
  },
  {
    nazev: "Konfigurace Minecraft serveru",
    typ: "serie",
    odkaz: "https://www.youtube.com/playlist?list=PLKkDvxLpWDX0JDM86Zmr6DYuJJk75Gk6c",
  },
  {
    nazev: "Konfigurace TeamSpeak serveru",
    typ: "serie",
    odkaz: "https://www.youtube.com/playlist?list=PLKkDvxLpWDX3tt2K5gDDgcmar49HX_i7c",
  },
  {
    nazev: "Konfigurace Discord serveru",
    typ: "serie",
    odkaz: "https://www.youtube.com/playlist?list=PLKkDvxLpWDX1YciiCx_6AQ7eHL6bzwFIQ",
  },
];

const Home: NextPage = () => {
  return (
    <main>
      <section className="bg-gradient-to-b from-gray-700 to-gray-900">
        <div className="max-w-screen-xl mx-auto pt-32 pb-20 md:pt-40 flex flex-col gap-8 px-4 xl:px-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-center !leading-snug bg-gradient-to-br from-red-400 to-pink-600 bg-clip-text text-transparent max-w-5xl mx-auto">Nejrychlejší a nejjednodušší návody na weby, hry a servery.</h1>
          <p className="text-lg sm:text-xl text-center !leading-relaxed text-gray-400 max-w-4xl mx-auto">
            Ať už se chcete naučit programovat Minecraft pluginy, psát webové stránky, pracovat s Photoshopem nebo si třeba vytvořit a nastavit Discord server - a to vše bez sledování zbytečně natáhlého obsahu nad 10 minut - tak jste na tom správném místě.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a href="https://youtube.com/phpMyArfi" target="_blank" rel="noreferrer noopener" className="btn btn-primary">
              Sledovat na YouTube <FontAwesomeIcon icon={faChevronRight} />
            </a>
            <span className="text-sm text-gray-500">
              Podívejte se i na můj{" "}
              <a href="https://www.youtube.com/channel/UCZV_3_FjyqSnwZhC4i1a8-A" target="_blank" rel="noreferrer noopener" className="underline">
                druhý YouTube kanál
              </a>
            </span>
          </div>
        </div>
      </section>
      <section className="bg-gray-900">
        <div className="max-w-screen-xl mx-auto py-8 px-4 xl:px-0">
          <h2 className="pb-8 text-3xl md:text-4xl text-gray-200">Co se chcete naučit?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-fr">
            {temata.map((tema, i) => (
              <a key={i} href={tema.odkaz} target="_blank" rel="noreferrer noopener" className={`flex flex-col justify-between gap-1 p-4 border-2 ${tema.typ === "video" ? "border-indigo-500/70 hover:border-indigo-500/90" : "border-red-500/60 hover:border-red-500/80"} rounded-xl`}>
                <span className="text-lg font-medium text-gray-50">{tema.nazev}</span>
                <span className="text-gray-300">
                  {tema.typ === "video" ? "Sledovat" : "Playlist"} <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-900">
        <div className="max-w-screen-xl mx-auto py-16 px-4 xl:px-0">
          <p className="text-gray-300 text-center">Web se aktuálně předělává, již brzy se tu objeví informace o Discord serveru a další obsah.</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
