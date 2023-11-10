import "@fortawesome/fontawesome-svg-core/styles";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { GoogleAnalytics } from "nextjs-google-analytics";
import { GeistSans } from "geist/font";
import { Barlow_Condensed } from "next/font/google";

const barlow = Barlow_Condensed({
  weight: ["700"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-barlow-condensed",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${GeistSans.variable} ${barlow.variable} font-sans`}>
      <GoogleAnalytics trackPageViews />
      <DefaultSeo {...SEO} />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
