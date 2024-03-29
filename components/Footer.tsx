import React from "react";
import Link from "next/link";
import { discordInviteLink, youtubeChannelLink } from "../resources/config";

type Props = {};

const linkGroups = [
  {
    name: "Arfi",
    links: [
      { text: "Série návodů", href: "/" },
      { text: "YouTube kanál", href: youtubeChannelLink },
      { text: "Komunitní Discord", href: "/discord" },
      { text: "Emotikony", href: "/emotes" },
      { text: "DMCA-safe playlist", href: "/playlist" },
      { text: "Podpora kanálu", href: "/donate" },
      { text: "VWA.cz", href: "https://vwa.cz/" },
    ],
  },
  {
    name: "Discord server",
    links: [
      { text: "Připojit se", href: discordInviteLink },
      { text: "Informace", href: "/discord/informace" },
      { text: "Pravidla", href: "/discord/pravidla" },
      { text: "YouTube rank", href: "/discord/informace#youtube-creator" },
    ],
  },
  {
    name: "Ostatní",
    links: [
      { text: "Kontakt", href: "mailto:hynek@flairleap.com" },
      { text: "Osobní web", href: "https://hynekfisera.cz/" },
      { text: "Zpět nahoru", href: "#top" },
    ],
  },
];

export default function Footer({}: Props) {
  return (
    <footer className="bg-gray-100 py-16">
      <div className="max-w-screen-lg mx-auto px-4 lg:px-0 flex flex-col items-center">
        <div className="w-full grid gap-4 sm:grid-cols-3">
          {linkGroups.map((group, i) => (
            <div key={i}>
              <div className="md:text-lg text-rose-500 font-medium mb-2 text-center">{group.name}</div>
              <div className="flex flex-col gap-1">
                {group.links.map((link) =>
                  link.href.startsWith("https://") ? (
                    <a className="md:text-lg text-gray-700 hover:underline mx-auto text-center" href={link.href} key={link.href} target="_blank" rel="noreferrer noopener">
                      {link.text}
                    </a>
                  ) : (
                    <Link href={link.href} key={link.href} className="md:text-lg text-gray-700 hover:underline mx-auto text-center">
                      {link.text}
                    </Link>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
        <a href="https://www.buymeacoffee.com/hynekfisera" target="_blank" rel="noreferrer noopener" className="inline-block mt-8 h-7">
          <img className="h-full w-auto" src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=hynekfisera&button_colour=f43f5e&font_colour=f1f5f9&font_family=Inter&outline_colour=000000&coffee_colour=f1f5f9" alt="Buy Me a Coffee" />
        </a>
        <div className="text-center text-gray-600 mt-2 font-medium text-xs">
          &copy; {new Date().getFullYear()}{" "}
          <a href="https://hynekfisera.cz/" target="_blank" rel="noreferrer noopener" className="underline">
            Hynek Fišera
          </a>
        </div>
      </div>
    </footer>
  );
}
