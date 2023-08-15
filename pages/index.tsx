import type { NextPage } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faDiscord, faSpotify } from "@fortawesome/free-brands-svg-icons";

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
    nazev: "JavaScript",
    typ: "video",
    odkaz: "https://youtu.be/v9S0CJjqOuU",
  },
  {
    nazev: "TypeScript",
    typ: "video",
    odkaz: "https://youtu.be/w30tE2paIW4",
  },
  {
    nazev: "ReactJS",
    typ: "video",
    odkaz: "https://youtu.be/GNfgV8iqD3g",
  },
  {
    nazev: "Domény, DNS a Cloudflare",
    typ: "video",
    odkaz: "https://youtu.be/pdx-93_JEqw",
  },
  {
    nazev: "Git a GitHub Desktop",
    typ: "video",
    odkaz: "https://youtu.be/137Q6u4Ct1E",
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
        <div className="max-w-screen-xl mx-auto py-16 px-4 xl:px-0 grid gap-16 md:gap-8 md:grid-cols-2">
          <div id="discord" className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl text-gray-200">Discord server</h2>
            <p className="sm:text-lg text-gray-300">Kromě YouTube kanálu mám také komunitní Discord server kde případně poskytujeme pomoc k videím pokud by vám něco nefungovalo nebo se tam prostě můžete pobavit o programování a sdílet na čem pracujete vy.</p>
            <p className="sm:text-lg text-gray-300">Na serveru mimo jiné najdete:</p>
            <ul className="-mt-3 list-disc list-inside sm:text-lg text-gray-300">
              <li>Pomoc k videím</li>
              <li>Oznámení o videích a livestreamech</li>
              <li>Kanály pro nápady na projekty a videa</li>
              <li>Přátelskou a aktivně moderovanou komunitu</li>
            </ul>
            <p className="sm:text-lg text-gray-300">
              Úplné informace najdete{" "}
              <Link href="/informace">
                <a className="text-rose-400 underline">zde</a>
              </Link>
            </p>
            <a className="btn btn-cta mr-auto" href="https://discord.gg/2Fs4pkpCcG" target="_blank" rel="noreferrer noopener">
              <FontAwesomeIcon icon={faDiscord} /> Připojit se
            </a>
          </div>
          <div id="playlist" className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl text-gray-200">DMCA-Safe playlist</h2>
            <p className="sm:text-lg text-gray-300">
              Streamujete na Twitch a hledáte hudbu, kterou budete moct mít bez obav puštěnou v pozadí? Připravil jsem pro mě i pro vás <strong className="text-indigo-400">163+ hodinový playlist</strong>, který je pro tento účel vhodný.
            </p>
            <p className="sm:text-lg text-gray-300">Playlist obsahuje:</p>
            <ul className="-mt-3 list-disc list-inside sm:text-lg text-gray-300">
              <li>NCS</li>
              <li>StreamBeats</li>
              <li>
                Lofi-Girl{" "}
                <a className="text-rose-400 underline" href="https://lofigirl.com/pages/use-the-music" target="_blank" rel="noreferrer noopener">
                  (vyžaduje credit!)
                </a>
              </li>
              <li>Riot Games</li>
              <li>NEFFEX</li>
              <li>
                Our Last Night{" "}
                <a className="text-rose-400 underline" href="https://twitter.com/olnband/status/1386332961260417024" target="_blank" rel="noreferrer noopener">
                  (safe pouze pro Twitch!)
                </a>
              </li>
            </ul>
            <a className="btn btn-cta mr-auto" href="https://open.spotify.com/playlist/5TUfJmnXNJIY8x97niQ4xJ?si=61c1e739a2414fe4" target="_blank" rel="noreferrer noopener">
              <FontAwesomeIcon icon={faSpotify} /> Spotify
            </a>
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/5TUfJmnXNJIY8x97niQ4xJ?utm_source=generator&theme=0"
              width="100%"
              height="80"
              frameBorder="0"
              allowFullScreen={undefined}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
