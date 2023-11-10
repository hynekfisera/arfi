import React from "react";
import MainSection from "../components/MainSection";
import { spotifyPlaylistLink } from "../resources/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { NextSeo } from "next-seo";

type Props = {};

export default function Playlist({}: Props) {
  return (
    <main>
      <NextSeo title="Playlist" description="Streamujete na Twitch a hledáte hudbu, kterou budete moct mít bez obav puštěnou v pozadí? Připravil jsem pro mě i pro vás 163+ hodinový playlist, který je pro tento účel vhodný." />
      <MainSection
        title="DMCA-safe playlist"
        description="Streamujete na Twitch a hledáte hudbu, kterou budete moct mít bez obav puštěnou v pozadí? Připravil jsem pro mě i pro vás 163+ hodinový playlist, který je pro tento účel vhodný."
        className="bg-gray-100 bg-gradient-to-br from-emerald-100 via-gray-100 to-gray-100"
        titleClassName="from-teal-400 to-green-500"
        text={
          <>
            Spotify <FontAwesomeIcon icon={faSpotify} />
          </>
        }
        href={spotifyPlaylistLink}
        btnClassName="btn-spotify"
      />
      <section className="bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-6 xl:px-0 flex flex-col gap-4">
          <p className="sm:text-lg text-gray-600">Playlist obsahuje:</p>
          <ul className="-mt-3 list-disc list-inside sm:text-lg text-gray-600">
            <li>NCS</li>
            <li>StreamBeats</li>
            <li>
              Lofi-Girl{" "}
              <a className="text-green-500 underline" href="https://lofigirl.com/pages/use-the-music" target="_blank" rel="noreferrer noopener">
                (vyžaduje credit!)
              </a>
            </li>
            <li>Riot Games</li>
            <li>NEFFEX</li>
            <li>
              Our Last Night{" "}
              <a className="text-green-500 underline" href="https://twitter.com/olnband/status/1386332961260417024" target="_blank" rel="noreferrer noopener">
                (safe pouze pro Twitch!)
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
