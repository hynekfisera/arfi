import React from "react";
import { marked } from "marked";

type Props = { content: string };

export default function Content({ content }: Props) {
  return (
    <main className="bg-gray-900 pt-28 pb-12 lg:pt-40">
      <div className="max-w-screen-xl mx-auto px-4 xl:px-0 prose lg:prose-lg prose-invert prose-h1:text-center prose-headings:font-medium prose-h1:font-bold prose-a:text-rose-400 prose-strong:text-indigo-400">
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </div>
    </main>
  );
}
