import { NextSeo } from "next-seo";
import fs from "fs";
import path from "path";
import Content from "../components/Content";

export default function Informace({ content }: { content: string }) {
  return (
    <>
      <NextSeo title="Informace" description="Informace o Arfi Discord serveru." />
      <Content content={content} />
    </>
  );
}

export async function getStaticProps() {
  const title = "informace";
  const content = fs.readFileSync(path.join("content", title + ".md"), "utf-8");

  return {
    props: {
      content,
    },
  };
}
