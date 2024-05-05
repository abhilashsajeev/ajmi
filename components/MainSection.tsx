import * as React from "react";
import Image from "next/image";

function MainSection() {
  return (
    <>
      {/* <section className="w-full">
        <div className="relative w-full ">
          <div className="flex justify-end">
            <Image
              alt="Main Banner"
              className=" w-3/5 opacity-70"
              width={1116}
              height={874}
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce9c33469e65a4a01cdb501cfe89ebcfcf6be3685c43e4a57a84189b11e2c40a?apiKey=36488682b7c54f08ad6c54eaddd3e0a8&"
            />
          </div>
          <div className="flex flex-col text-start justify-start items-center w-3/5 absolute inset-px inset-y-px">
            <div className="font-bold col-span-5 uppercase max-md:mt-10 max-md:max-w-full text-7xl text-black">
              Better living begins at home.
            </div>
            <div className="flex text-lg w-[623px] max-md:flex-wrap max-md:mt-10">
              <div className="font-bold leading-6 uppercase">
                HOUSE OF WOOD PROJECT
              </div>
              <div className="flex-auto font-medium leading-7 text-gray-500">
                We listen, we create, you enjoy. Where dimensions take shape.
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section>
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-5/12 max-md:ml-0 max-md:w-full">
            <div className="flex text-7xl flex-col self-stretch px-5 my-auto tracking-normal text-black  max-md:max-w-full max-md:text-4xl">
              <div className="font-bold  uppercase max-md:mt-10 max-md:max-w-full">
                Better living begins at home.
              </div>

              <div className="flex gap-5 mt-32 max-w-full text-lg w-[623px] max-md:flex-wrap max-md:mt-10">
                <div className="font-bold leading-6 uppercase">
                  HOUSE OF WOOD PROJECT
                </div>
                <div className="flex-auto font-medium leading-7 text-gray-500">
                  We listen, we create, you enjoy. Where dimensions take shape.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-7/12 max-md:ml-0 max-md:w-full">
            <div className="flex  relative flex-col grow justify-center py-px font-bold whitespace-nowrap min-h-[872px] max-md:max-w-full">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce9c33469e65a4a01cdb501cfe89ebcfcf6be3685c43e4a57a84189b11e2c40a?apiKey=36488682b7c54f08ad6c54eaddd3e0a8&"
                fill
                className="object-cover absolute"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainSection;
