import React from "react";
import MainSection from "../components/MainSection";
import { discordInviteLink } from "../resources/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { NextSeo } from "next-seo";

type Props = {};

export default function Discord({}: Props) {
  return (
    <main>
      <NextSeo title="Discord" description="Komunitní Discord server, kde případně poskytujeme pomoc k videím, pokud by vám něco nefungovalo, nebo se tam prostě můžete pobavit o programování a sdílet na čem pracujete vy." />
      <MainSection
        title="Arfi Discord server"
        description="Komunitní Discord server, kde případně poskytujeme pomoc k videím, pokud by vám něco nefungovalo, nebo se tam prostě můžete pobavit o programování a sdílet na čem pracujete vy."
        className="bg-gray-100 bg-gradient-to-br from-indigo-100 via-gray-100 to-gray-100"
        titleClassName="from-indigo-400 to-violet-500"
        text={
          <>
            Připojit se <FontAwesomeIcon icon={faDiscord} />
          </>
        }
        href={discordInviteLink}
        btnClassName="btn-discord"
      />
      <section className="bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-6 xl:px-0 flex flex-col gap-4">
          <p className="sm:text-lg text-gray-600">Na serveru mimo jiné najdete:</p>
          <ul className="-mt-3 list-disc list-inside sm:text-lg text-gray-600">
            <li>Pomoc k videím</li>
            <li>Oznámení o videích a livestreamech</li>
            <li>Kanály pro nápady na projekty a videa</li>
            <li>Přátelskou a aktivně moderovanou komunitu</li>
          </ul>
          <p className="sm:text-lg text-gray-600">
            Úplné informace najdete{" "}
            <Link href="/discord/informace" className="text-indigo-500 underline">
              zde
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
