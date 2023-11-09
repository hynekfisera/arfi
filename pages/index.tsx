import type { NextPage } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faDiscord, faSpotify } from "@fortawesome/free-brands-svg-icons";
import Image, { StaticImageData } from "next/image";
import VWA from "/public/content/vwa.jpeg";
import Pluginy from "/public/content/pluginy.jpeg";
import PHP from "/public/content/php.jpeg";
import Photoshop from "/public/content/photoshop.jpeg";
import Minecraft from "/public/content/minecraft.webp";
import Teamspeak from "/public/content/teamspeak.jpeg";
import Discord from "/public/content/discord.jpeg";

type Content = {
  image: StaticImageData;
  title: string;
  description?: string;
  href: string;
};

const content: Content[] = [
  {
    image: VWA,
    title: "Vývoj webových aplikací",
    description: "Série návodů ve které se naučíte vytvářet profesionální weby a webové aplikace za pomocí React frameworku Next.js a TailwindCSS.",
    href: "https://vwa.cz/",
  },
  {
    image: Pluginy,
    title: "Vývoj vlastního Minecraft pluginu",
    description: "Jak vytvořit plugin pomocí rozšíření Minecraft Development, jak si v něm nakonfigurovat vlastní příkazy a také co provede při určitých událostech.",
    href: "https://www.youtube.com/playlist?list=PLKkDvxLpWDX3ZvnuVHh2faaIlSdVE_jPc",
  },
  {
    image: PHP,
    title: "PHP",
    description: "Jako pokračování série Jak vytvořit web jsou tu návody na PHP, neboli jazyk díky kterému můžete na webu vytvořit třeba přihlašování.",
    href: "https://youtube.com/playlist?list=PLKkDvxLpWDX30NNTvIrqCq-R43Lf1rtM9",
  },
  {
    image: Photoshop,
    title: "Adobe Photoshop",
    description: "Chcete se naučit ve Photoshopu? V této krátké sérii se podíváme na jeho pracovní plochu, nástroje, na to jak fungují vrstvy i jak vyexportovat náš dokument.",
    href: "https://www.youtube.com/playlist?list=PLKkDvxLpWDX3Ye0Cet9DoLNb9IFDijmof",
  },
  {
    image: Minecraft,
    title: "Konfigurace Minecraft serveru",
    description: "Nastavte si vlastní Minecraft server podle svých představ pomocí již existujících pluginů - oprávnění, ranky, vytváření dalších světů i vlastní IP serveru.",
    href: "https://www.youtube.com/playlist?list=PLKkDvxLpWDX0JDM86Zmr6DYuJJk75Gk6c",
  },
  {
    image: Teamspeak,
    title: "Konfigurace TeamSpeak serveru",
    description: "V této sérii je vše potřebné k tomu abyste si mohli vytvořit TeamSpeak server s vlastní IP adresou, přidat různé místnosti a nakonfigurovat oprávnění.",
    href: "https://www.youtube.com/playlist?list=PLKkDvxLpWDX3tt2K5gDDgcmar49HX_i7c",
  },
  {
    image: Discord,
    title: "Konfigurace Discord serveru",
    description: "Návody které se týkají platformy Discord - jak vytvořit a nastavit Discord server úplně od začátku, i s ranky za aktivitu a reakční role.",
    href: "https://www.youtube.com/playlist?list=PLKkDvxLpWDX1YciiCx_6AQ7eHL6bzwFIQ",
  },
];

const Home: NextPage = () => {
  return (
    <main>
      <section className="bg-gray-100 bg-gradient-to-br from-pink-100 via-gray-100 to-gray-100">
        <div className="max-w-screen-xl mx-auto pt-32 pb-20 md:pt-40 flex flex-col gap-8 px-4 xl:px-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-8xl uppercase font-extrabold text-center sm:text-left !leading-tight tracking-wide bg-gradient-to-br from-red-400 to-pink-500 bg-clip-text text-transparent max-w-5xl font-barlow">
            Nejrychlejší a nejjednodušší návody na weby, hry a servery.
          </h1>
          <p className="ml-1 text-lg sm:text-xl !leading-relaxed text-gray-500 max-w-4xl">Ať už se chcete naučit programovat Minecraft pluginy, psát webové stránky, pracovat s Photoshopem nebo si třeba vytvořit a nastavit Discord server tak jste na tom správném místě.</p>
          <div className="ml-1 flex flex-col items-start gap-4">
            <a href="https://youtube.com/@phpMyArfi" target="_blank" rel="noreferrer noopener" className="btn btn-primary">
              Sledovat na YouTube <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="max-w-screen-xl mx-auto py-8 px-4 xl:px-0">
          <h2 className="pb-8 text-3xl md:text-4xl text-gray-700 text-center">Co se chcete naučit?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.map((tema, i) => (
              <div key={i} className="flex flex-col gap-2">
                <Image src={tema.image} alt={tema.title} className="rounded-xl border border-gray-500/20 shadow-md w-auto h-auto m-6" />
                <div className="text-lg font-medium text-gray-800">{tema.title}</div>
                <div className="text-gray-500">{tema.description}</div>
                <a href={tema.href} target="_blank" rel="noreferrer noopener" className="text-lg mr-auto text-indigo-500 hover:text-indigo-600 transition duration-200">
                  Přejít <FontAwesomeIcon icon={faChevronRight} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
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
              <Link href="/informace" className="text-rose-400 underline">
                zde
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
