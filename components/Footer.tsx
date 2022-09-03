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
      <div className="max-w-screen-lg mx-auto px-4 lg:px-0">
        <div className="grid gap-4 sm:grid-cols-3">
          {linkGroups.map((group, i) => (
            <div key={i}>
              <div className="md:text-lg text-rose-400 font-medium mb-2 text-center">{group.name}</div>
              <div className="flex flex-col gap-1">
                {group.links.map((link) =>
                  link.href.startsWith("https://") ? (
                    <a className="md:text-lg text-gray-300 hover:underline mx-auto text-center" href={link.href} target="_blank" rel="noreferrer noopener">
                      {link.text}
                    </a>
                  ) : (
                    <Link href={link.href}>
                      <a className="md:text-lg text-gray-300 hover:underline mx-auto text-center">{link.text}</a>
                    </Link>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="pt-6 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Hynek Fišera | Vytvořeno pomocí{" "}
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer noopener">
            Next.js
          </a>
        </p>
      </div>
    </footer>
  );
}
