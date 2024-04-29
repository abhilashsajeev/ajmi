import * as React from "react";
import Image from "next/image";

function MainSection() {
  return (
    <div>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex z-10 flex-col self-stretch px-5 my-auto text-9xl tracking-normal text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            <div className="overflow-hidden relative flex-col justify-center items-start px-7 py-10 text-2xl font-bold leading-7 uppercase whitespace-nowrap aspect-square w-[97px] max-md:px-5">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/956a8f7ef49dbd19b8700e28a8070f5934be49f647208d2932bfcd6267abfd5a?apiKey=36488682b7c54f08ad6c54eaddd3e0a8&"
                fill
                className="absolute inset-0 size-full opacity-50 z-50 "
                alt=""
              />
              <span className="z-0">/04</span>
            </div>
            <div className="mt-52 font-bold tracking-tighter uppercase leading-[90%] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              Better living
            </div>
            <div className="font-bold tracking-tighter uppercase leading-[90%] max-md:max-w-full max-md:text-4xl">
              begins at home.
            </div>
            <div className="flex gap-5 mt-32 max-w-full text-lg w-[623px] max-md:flex-wrap max-md:mt-10">
              <div className="font-bold leading-6 uppercase">
                HOUSE OF WOOD PROJECT
              </div>
              <div className="flex-auto font-medium leading-7">
                We listen, we create, you enjoy. Where dimensions take shape.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden relative flex-col grow justify-center py-px font-bold whitespace-nowrap min-h-[872px] max-md:max-w-full">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce9c33469e65a4a01cdb501cfe89ebcfcf6be3685c43e4a57a84189b11e2c40a?apiKey=36488682b7c54f08ad6c54eaddd3e0a8&"
              fill
              className="object-cover absolute  size-full"
              alt=""
            />
            <div className="flex relative flex-col pt-8 bg-white max-md:max-w-full">
              <div className="flex flex-col self-end px-5 max-w-full w-[379px]">
                <div className="tracking-tighter text-black leading-[223.2px] text-[248px] max-md:text-xl">
                  02
                </div>
                <div className="justify-center self-end px-3.5 py-3 mt-96 text-base tracking-normal leading-5 text-center text-white uppercase bg-blue-700 rounded-[80px] max-md:px-5 max-md:mt-10">
                  MORE
                </div>
              </div>
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/75e20aeb173c5a69875ebe7a88b142bb10b0d36e769cdd0f8db6c3bc6baf3ebf?apiKey=36488682b7c54f08ad6c54eaddd3e0a8&"
                width={106}
                height={106}
                className="max-w-full aspect-square w-[106px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
