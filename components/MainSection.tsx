import React from "react";

type Props = {
  title: string;
  description: string;
  className: string;
  titleClassName: string;
  href: string;
  text: string | React.ReactNode;
  btnClassName: string;
};

export default function MainSection({ title, description, className, titleClassName, href, text, btnClassName }: Props) {
  return (
    <section className={className}>
      <div className="max-w-screen-xl mx-auto pt-32 pb-20 md:pt-40 flex flex-col items-center sm:items-start gap-8 px-6 xl:px-0">
        <h1 className={`text-4xl lg:text-5xl xl:text-8xl uppercase font-extrabold text-center sm:text-left !leading-tight tracking-wide bg-gradient-to-br ${titleClassName} bg-clip-text text-transparent max-w-5xl font-barlow`}>{title}</h1>
        <p className="sm:ml-1 sm:text-xl !leading-relaxed text-gray-500 max-w-4xl text-center sm:text-left">{description}</p>
        <div className="sm:ml-1">
          <a href={href} target="_blank" rel="noreferrer noopener" className={`btn ${btnClassName}`}>
            {text}
          </a>
        </div>
      </div>
    </section>
  );
}
