import Image from "next/image";
import { PortFolioWithIndex } from "./PortfolioParent";

export function PortFolioRight({
  image_1,
  image_2,
  title,
  content,
  index,
}: PortFolioWithIndex) {
  return (
    <div className="mt-28 w-full max-md:pr-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
          <Image
            loading="lazy"
            src={image_1}
            className="grow w-full aspect-[1.45] max-md:mt-10 max-md:max-w-full"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
          <Image
            loading="lazy"
            src={image_2}
            className="grow w-full aspect-[1.03] max-md:mt-10 max-md:max-w-full"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto text-4xl font-extrabold max-md:mt-10 max-md:max-w-full">
            <div className="text-blue-700 text-2xl max-md:max-w-full">
              {String(index).padStart(2, "0")}
            </div>
            <div className="mt-7 text-neutral-900 text-2xl max-md:max-w-full">
              {title}
            </div>
            <div className="mt-9 text-base font-medium leading-6 text-neutral-500 max-md:max-w-full">
              {content}
            </div>
            <div className="justify-center self-start px-8 py-3 mt-9 text-sm leading-5 text-white uppercase bg-red-600 tracking-[2px] max-md:px-5">
              view project
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PortFolioLeft({
  image_1,
  image_2,
  title,
  content,
  index,
}: PortFolioWithIndex) {
  return (
    <div className="mt-28 w-full max-md:pr-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto text-4xl font-extrabold max-md:mt-10 max-md:max-w-full">
            <div className="text-blue-700 text-2xl max-md:max-w-full">
              {String(index).padStart(2, "0")}
            </div>
            <div className="mt-7 text-2xl text-neutral-900 max-md:max-w-full">
              {title}
            </div>
            <div className="mt-9 text-base font-medium leading-6 text-neutral-500 max-md:max-w-full">
              {content}
            </div>
            <div className="justify-center self-start px-8 py-3 mt-9 text-sm leading-5 text-white uppercase bg-red-600 tracking-[2px] max-md:px-5">
              view project
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
          <Image
            loading="lazy"
            src={image_1}
            className="grow w-full aspect-[1.45] max-md:mt-10 max-md:max-w-full"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
          <Image
            loading="lazy"
            src={image_2}
            className="grow w-full aspect-[1.03] max-md:mt-10 max-md:max-w-full"
            alt=""
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
