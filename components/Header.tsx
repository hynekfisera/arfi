import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faYoutube } from "@fortawesome/free-brands-svg-icons";

import ArfiLogo from "../public/arfiBlack.svg";

const links = [
  {
    text: "Obsah",
    href: "/",
  },
  {
    text: "Playlist",
    href: "/playlist",
  },
  {
    text: "Emotikony",
    href: "/emotes",
  },
  {
    text: "Podpora",
    href: "https://buymeacoffee.com/hynekfisera",
    external: true,
  },
];

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 py-6 px-4 xl:py-8 xl:px-0">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 xl:px-0">
        <div className="h-10 w-10">
          <Link href="/" className="opacity-80 hover:opacity-70 transition duration-200">
            <Image src={ArfiLogo} alt="Arfi logo" priority={true} />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {links.map((link, i) => (
            <NavLink key={i} href={link.href} external={link.external} className="text-gray-900 hover:text-indigo-600 transition duration-200">
              {link.text}
            </NavLink>
          ))}
          <div className="flex flex-row gap-2 text-lg">
            <a href="https://youtube.com/@phpMyArfi" target="_blank" rel="noreferrer noopener" aria-label="YouTube" className="text-gray-500 hover:text-indigo-500 transition duration-200">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://discord.gg/2Fs4pkpCcG" target="_blank" rel="noreferrer noopener" aria-label="Discord" className="text-gray-500 hover:text-indigo-500 transition duration-200">
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({ external, children, href, className }: { external?: boolean; children: React.ReactNode; href: string; className?: string }) {
  return external ? (
    <a href={href} target="_blank" rel="noreferrer noopener" className={className}>
      {children}
    </a>
  ) : (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
