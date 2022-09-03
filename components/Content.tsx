import React from "react";
import { marked } from "marked";

type Props = { content: string };

export default function Content({ content }: Props) {
  return (
    <main className="bg-gray-900 py-28">
      <div className="max-w-screen-xl mx-auto px-4 xl:px-0 prose prose-invert">
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </div>
    </main>
  );
}
