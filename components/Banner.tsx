import * as React from "react";
import Image from "next/image";
import styles from "./LastSection.module.css";

function Banner() {
  return (
    <div className="flex overflow-hidden relative flex-col items-start px-16 py-20 min-h-[884px] max-md:px-5">
      <Image
        fill
        src="https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/empdke041g3vziyw2bqg"
        alt=""
        className="object-cover absolute inset-0"
      />
      <div className="relative w-full  max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="relative self-stretch my-auto text-8xl font-bold tracking-tighter text-white uppercase leading-[86px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
              HOUSE OF <br /> oman
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col grow pb-20 mt-20 tracking-normal text-white max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col self-end pt-10 max-w-full border-t border-solid border-white border-opacity-20 w-[368px]">
                <div className="flex gap-5 justify-between">
                  <div className="self-start text-base font-bold leading-5 uppercase">
                    2024
                  </div>
                  <div className="text-sm font-medium leading-5">
                    We listen, we create, you enjoy. Where dimensions take
                    shape.
                  </div>
                </div>
              </div>
              <div className="flex gap-4 justify-between px-3.5 py-3 mt-10 text-base font-bold leading-5 uppercase bg-blue-700 max-md:flex-wrap max-md:max-w-full">
                <div>VIEW project</div>
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcc8541a465e5bfca3962869b7a73112eb38810ae1892c54bc87d5978466780d?apiKey=36488682b7c54f08ad6c54eaddd3e0a8&"
                  alt=""
                  width={16}
                  height={16}
                  className="shrink-0 my-auto"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/14e92c7cd7e7f7a00f58aeda13f4595c4f44ed61930eb858cf4e9273fa490bec?apiKey=36488682b7c54f08ad6c54eaddd3e0a8&"
              alt=""
              width={630}
              height={333}
              className="w-full max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
        <div className="flex w-full">
          <h1
            className={`text-transparent text-[10em] leading-none ${styles.strokeItem}`}
          >
            Italian Modern Kitchen
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
