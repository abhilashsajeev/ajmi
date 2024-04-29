import * as React from "react";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  display: "swap",
});

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => (
  <div className="flex overflow-hidden relative flex-col grow justify-center min-h-[537px] max-md:mt-10 max-md:max-w-full">
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="object-cover absolute inset-0 size-full"
    />
  </div>
);

interface TextContentProps {
  title: string;
  content: string;
  index: number;
}

const TextContent: React.FC<TextContentProps> = ({ title, content, index }) => (
  <div className="flex flex-col px-5 text-black max-md:mt-10 max-md:max-w-full">
    <div className="flex gap-5 tracking-normal max-md:flex-wrap max-md:max-w-full">
      <h2 className="flex-auto text-3xl font-bold leading-8 uppercase drop-shadow-md tracking-tighter">
        {title}
      </h2>
      <div className="flex-auto my-auto text-xl font-medium leading-10 text-zinc-400">
        {String(index).padStart(2, "0")}
      </div>
    </div>
    <p className="mt-14 text-sm text-justify text-zinc-400 font-medium leading-7 max-md:mt-10 max-md:max-w-full">
      {content}
    </p>
  </div>
);

interface ImageData {
  src: string; // URL as a string
  alt: string; // Alt text description as a string
}

interface TextData {
  title: string; // Title as a string
  content: string; // Content as a string (can be HTML or plain text)
}

export interface ServiceDescProps {
  imageData: ImageData;
  textData: TextData;
}

export interface ServiceDescWithIndex extends ServiceDescProps {
  index: number;
}

export function ServicesDescRight({
  imageData,
  textData,
  index,
}: ServiceDescWithIndex) {
  return (
    <div className={`p-10 ${manrope.className}`}>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <TextContent
            title={textData.title}
            content={textData.content}
            index={index}
          />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <Image src={imageData.src} alt={imageData.alt} />
        </div>
      </div>
    </div>
  );
}

export function ServicesDescLeft({
  imageData,
  textData,
  index,
}: ServiceDescWithIndex) {
  return (
    <div className="p-10">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <Image src={imageData.src} alt={imageData.alt} />
        </div>
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <TextContent
            title={textData.title}
            content={textData.content}
            index={index}
          />
        </div>
      </div>
    </div>
  );
}
