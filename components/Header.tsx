import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faYoutube } from "@fortawesome/free-brands-svg-icons";

import ArfiLogo from "../public/arfiWhite.svg";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 py-4 xl:py-8">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 xl:px-0">
        <div className="h-10 w-10 sm:h-12 sm:w-12">
          <Link href="/">
            <a className="hover:opacity-90 transition duration-200">
              <Image src={ArfiLogo} alt="Arfi logo" layout="responsive" />
            </a>
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <a className="text-gray-100 hover:text-gray-300 transition duration-200" href="https://discord.gg/2Fs4pkpCcG" target="_blank" rel="noreferrer noopener">
            <FontAwesomeIcon icon={faDiscord} /> Discord
          </a>
          <a href="https://youtube.com/phpmyarfi" target="_blank" rel="noreferrer noopener" className="btn btn-cta hidden sm:inline-block">
            <FontAwesomeIcon icon={faYoutube} /> YouTube
          </a>
        </div>
      </div>
    </header>
  );
}
