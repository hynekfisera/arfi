import type { NextPage } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image, { StaticImageData } from "next/image";
import VWA from "/public/content/vwa.jpeg";
import Pluginy from "/public/content/pluginy.jpeg";
import PHP from "/public/content/php.jpeg";
import Photoshop from "/public/content/photoshop.jpeg";
import Minecraft from "/public/content/minecraft.webp";
import Teamspeak from "/public/content/teamspeak.jpeg";
import Discord from "/public/content/discord.jpeg";
import { youtubeChannelLink } from "../resources/config";
import MainSection from "../components/MainSection";

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
    href: "https://www.youtube.com/playlist?list=PLKkDvxLpWDX30NNTvIrqCq-R43Lf1rtM9",
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
      <MainSection
        title="Nejrychlejší a nejjednodušší návody na weby, hry a servery."
        description="Ať už se chcete naučit programovat Minecraft pluginy, psát webové stránky, pracovat s Photoshopem nebo si třeba vytvořit a nastavit Discord server tak jste na tom správném místě."
        className="bg-gray-100 bg-gradient-to-br from-pink-100 via-gray-100 to-gray-100"
        titleClassName="from-red-400 to-pink-500"
        text={
          <>
            Sledovat na YouTube <FontAwesomeIcon icon={faChevronRight} />
          </>
        }
        href={youtubeChannelLink}
        btnClassName="btn-primary"
      />
      <section className="bg-gray-100">
        <div className="max-w-screen-xl mx-auto py-8 px-6 xl:px-0">
          <h2 className="pb-8 text-3xl md:text-4xl text-gray-700 text-center">Co se chcete naučit?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.map((tema, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="p-6">
                  <Image src={tema.image} alt={tema.title} className="rounded-xl border border-gray-500/20 shadow-md" />
                </div>
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
    </main>
  );
};

export default Home;
