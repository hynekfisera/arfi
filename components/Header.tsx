import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faYoutube } from "@fortawesome/free-brands-svg-icons";

import ArfiLogo from "../public/arfiBlack.svg";
import { discordInviteLink, youtubeChannelLink } from "../resources/config";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

type Link = {
  text: string;
  href: string;
  external?: boolean;
};

const links: Link[] = [
  {
    text: "Obsah",
    href: "/",
  },
  {
    text: "Discord",
    href: "/discord",
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
    href: "/donate",
  },
];

export default function Header() {
  const [visible, setVisible] = useState(false);

  return (
    <header className={`absolute top-0 left-0 right-0 py-6 px-4 xl:py-8 xl:px-0 ${visible ? "bg-white" : "bg-transparent"} sm:bg-transparent`}>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 xl:px-0">
        <div className="h-10 w-10">
          <Link href="/" className="opacity-80 hover:opacity-70 transition duration-200">
            <Image src={ArfiLogo} alt="Arfi logo" priority={true} />
          </Link>
        </div>
        <button className={`sm:!hidden text-2xl  text-gray-700`} onClick={() => setVisible((v) => !v)}>
          <FontAwesomeIcon icon={visible ? faXmark : faBars} />
        </button>
        <div className={`flex-col sm:flex-row absolute left-0 right-0 top-[100%] sm:static bg-white sm:bg-transparent items-end sm:items-center p-8 pt-0 sm:p-0 gap-4 border-b border-gray-300 sm:border-none ${visible ? "flex" : "hidden"} sm:!flex`}>
          {links.map((link, i) => (
            <NavLink key={i} href={link.href} external={link.external} className="text-gray-900 hover:text-indigo-600 transition duration-200" onClick={() => setVisible(false)}>
              {link.text}
            </NavLink>
          ))}
          <div className="flex flex-row gap-2 text-lg">
            <a href={youtubeChannelLink} target="_blank" rel="noreferrer noopener" aria-label="YouTube" className="text-indigo-500 sm:text-gray-500 sm:hover:text-indigo-500 transition duration-200">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href={discordInviteLink} target="_blank" rel="noreferrer noopener" aria-label="Discord" className="text-indigo-500 sm:text-gray-500 sm:hover:text-indigo-500 transition duration-200">
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({ external, children, href, className, onClick }: { external?: boolean; children: React.ReactNode; href: string; className?: string; onClick?: () => void }) {
  return external ? (
    <a href={href} target="_blank" rel="noreferrer noopener" className={className} onClick={onClick}>
      {children}
    </a>
  ) : (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
