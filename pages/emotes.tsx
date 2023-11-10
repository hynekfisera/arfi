import React from "react";
import MainSection from "../components/MainSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

type Props = {};

export default function Emotes({}: Props) {
  return (
    <main>
      <MainSection
        title="Arfi emotikony"
        description="Sada emotikonů vytvořená přímo pro komunitní Discord server."
        className="bg-gray-100 bg-gradient-to-br from-fuchsia-100 via-gray-100 to-gray-100"
        titleClassName="from-fuchsia-400 to-pink-500"
        text={
          <>
            Stáhnout <FontAwesomeIcon icon={faDownload} />
          </>
        }
        href="https://antalya.hynekfisera.com/files/Arfi/Emotikony/"
        btnClassName="btn-emotes"
      />
    </main>
  );
}
