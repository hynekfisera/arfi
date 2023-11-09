import React from "react";
import Link from "next/link";

type Props = {};

const linkGroups = [
  {
    name: "Sociální sítě",
    links: [
      { text: "YouTube", href: "https://youtube.com/phpMyArfi" },
      { text: "Instagram", href: "https://instagram.com/hynekfisera" },
      { text: "Twitter", href: "https://twitter.com/hynekfisera" },
      { text: "LinkedIn", href: "https://linkedin.com/in/hynekfisera" },
      { text: "GitHub", href: "https://github.com/hynekfisera" },
    ],
  },
  {
    name: "Discord server",
    links: [
      { text: "Připojit se", href: "https://discord.gg/2Fs4pkpCcG" },
      { text: "Informace", href: "/informace" },
      { text: "Pravidla", href: "/pravidla" },
      { text: "YouTube rank", href: "/informace#youtube-creator" },
    ],
  },
  {
    name: "Ostatní",
    links: [
      { text: "Kontakt", href: "mailto:hynek@flairleap.com" },
      { text: "Zpět nahoru", href: "#top" },
    ],
  },
];

export default function Footer({}: Props) {
  return (
    <footer className="bg-gray-900 py-16">
      <div className="max-w-screen-lg mx-auto px-4 lg:px-0 flex flex-col items-center">
        <div className="w-full grid gap-4 sm:grid-cols-3">
          {linkGroups.map((group, i) => (
            <div key={i}>
              <div className="md:text-lg text-rose-400 font-medium mb-2 text-center">{group.name}</div>
              <div className="flex flex-col gap-1">
                {group.links.map((link) =>
                  link.href.startsWith("https://") ? (
                    <a className="md:text-lg text-gray-300 hover:underline mx-auto text-center" href={link.href} key={link.href} target="_blank" rel="noreferrer noopener">
                      {link.text}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      key={link.href}
                      className="md:text-lg text-gray-300 hover:underline mx-auto text-center">
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
        <div className="text-center text-gray-400 mt-2 font-medium text-xs">
          &copy; {new Date().getFullYear()}{" "}
          <a href="https://hynekfisera.cz/" target="_blank" rel="noreferrer noopener" className="underline">
            Hynek Fišera
          </a>
        </div>
      </div>
    </footer>
  );
}
