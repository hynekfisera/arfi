import { NextSeo } from "next-seo";
import fs from "fs";
import path from "path";
import Content from "../components/Content";

export default function Pravidla({ content }: { content: string }) {
  return (
    <>
      <NextSeo title="Pravidla" description="Pravidla Arfi Discord serveru." />
      <Content content={content} />
    </>
  );
}

export async function getStaticProps() {
  const title = "pravidla";
  const content = fs.readFileSync(path.join("content", title + ".md"), "utf-8");

  return {
    props: {
      content,
    },
  };
}
