import React from "react";
import MainSection from "../components/MainSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

type Props = {};

export default function Donate({}: Props) {
  return (
    <main>
      <MainSection
        title="Podpora kanálu"
        description="Pomohla vám videa, který tvořím? Zvažte prosím finanční podporu mé tvorby."
        className="bg-gray-100 bg-gradient-to-br from-orange-100 via-gray-100 to-gray-100"
        titleClassName="from-amber-500 to-orange-500"
        text={
          <>
            Buy Me a Coffee <FontAwesomeIcon icon={faExternalLink} />
          </>
        }
        href="https://buymeacoffee.com/hynekfisera"
        btnClassName="btn-donate"
      />
      <section className="bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-6 xl:px-0 flex flex-col gap-4">
          <section className="mt-8">
            <h2 className="text-xl sm:text-2xl font-medium text-slate-700">Předplatná</h2>
            <p className="text-slate-500 sm:text-lg mt-0.5">Staňte se členem a získejte Discord roli a přístup k materiálům z některých videí.</p>
            <ul className="list-inside list-disc sm:text-lg mt-1.5">
              <li>
                <a className="text-orange-500 hover:underline" href="https://www.buymeacoffee.com/hynekfisera/membership" target="_blank" rel="noopener noreferrer">
                  Buy Me a Coffee Membership
                </a>
              </li>
            </ul>
          </section>
          <section className="mt-6">
            <h2 className="text-xl sm:text-2xl font-medium text-slate-700">Jednorázový příspěvek</h2>
            <p className="text-slate-500 sm:text-lg mt-0.5">Podpořte mě jednorázovým příspěvkem pomocí jedné z metod.</p>
            <ul className="list-inside list-disc sm:text-lg mt-1.5">
              <li>
                <a className="text-orange-500 hover:underline" href="https://www.buymeacoffee.com/hynekfisera" target="_blank" rel="noopener noreferrer">
                  Buy Me a Coffee
                </a>
              </li>
              <li>
                <a className="text-orange-500 hover:underline" href="https://paypal.me/fiserah" target="_blank" rel="noopener noreferrer">
                  PayPal
                </a>
              </li>
              <li>
                <a className="text-orange-500 hover:underline" href="https://revolut.me/hynekfisera" target="_blank" rel="noopener noreferrer">
                  Revolut
                </a>
              </li>
            </ul>
          </section>
          <section className="mt-6">
            <h2 className="text-xl sm:text-2xl font-medium text-slate-700">Affiliate odkazy</h2>
            <p className="text-slate-500 sm:text-lg mt-0.5">Stačí kliknout na odkaz a během dalších 90 dnů zakoupit jakýkoli produkt/službu.</p>
            <ul className="list-inside list-disc sm:text-lg mt-1.5">
              <li>
                <a className="text-orange-500 hover:underline" href="https://www.alza.cz/?idp=16529&banner_id=45040" target="_blank" rel="noopener noreferrer">
                  Alza.cz
                </a>
              </li>
              <li>
                <a className="text-orange-500 hover:underline" href="https://www.wedos.cz/?ap=10WER2" target="_blank" rel="noopener noreferrer">
                  WEDOS
                </a>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}
