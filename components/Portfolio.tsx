import * as React from "react";
import Image from "next/image";

function Portfolio() {
  return (
    <div className="flex flex-col pt-18">
      <div className="flex flex-col self-center px-5 mt-36 w-full max-w-[1545px] max-md:mt-10 max-md:max-w-full">
        <div className="text-xl font-semibold tracking-tight leading-7 text-black uppercase max-md:max-w-full">
          Portfolio
        </div>
        <div className="flex gap-5 justify-end items-start mt-6 max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto text-6xl font-extrabold leading-[64px] text-neutral-900 max-md:text-4xl max-md:leading-[52px]">
            1000+ Projects All Over Oman
          </div>
          <div className="flex flex-col mt-2.5 max-md:max-w-full">
            <div className="text-lg font-medium leading-6 text-neutral-500 max-md:max-w-full">
              Ac volutpat et nulla ultricies convallis convallis sed. Sit nec
              risus sit nisl, quis in turpis gravida libero.
            </div>
            <div className="justify-center self-start px-8 py-3 mt-4 text-sm font-extrabold leading-5 uppercase border border-solid border-neutral-600 text-neutral-600 tracking-[2px] max-md:px-5">
              view all
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28 w-full max-md:pr-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ebb8881bf7f63541c757e6bf08afc5dacadc7f7d29f85dc90dc702a4b2177e1?apiKey=36488682b7c54f08ad6c54eaddd3e0a8&"
              className="grow w-full aspect-[1.45] max-md:mt-10 max-md:max-w-full"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/666fc557d98105a08a88c76a15afa63527a2612e8279a78b7303a01904a46ddc?apiKey=36488682b7c54f08ad6c54eaddd3e0a8&"
              className="grow w-full aspect-[1.03] max-md:mt-10 max-md:max-w-full"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-4xl font-extrabold max-md:mt-10 max-md:max-w-full">
              <div className="text-blue-700 max-md:max-w-full">01</div>
              <div className="mt-7 text-neutral-900 max-md:max-w-full">
                Residential Project 1
              </div>
              <div className="mt-9 text-base font-medium leading-6 text-neutral-500 max-md:max-w-full">
                Ac volutpat et nulla ultricies convallis convallis sed. Sit nec
                risus sit nisl, quis in turpis gravida libero. At elit eu lacus,
                quam neque euismod posuere eget. Convallis varius laoreet etiam
                ultrices varius molestie tinci.
              </div>
              <div className="justify-center self-start px-8 py-3 mt-9 text-sm leading-5 text-white uppercase bg-red-600 tracking-[2px] max-md:px-5">
                view project
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center px-5 mt-32 w-full max-w-[1723px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-4xl font-extrabold max-md:mt-10 max-md:max-w-full">
              <div className="text-blue-700 max-md:max-w-full">02</div>
              <div className="mt-7 text-neutral-900 max-md:max-w-full">
                Residential Project 2
              </div>
              <div className="mt-9 text-base font-medium leading-6 text-neutral-500 max-md:max-w-full">
                Ac volutpat et nulla ultricies convallis convallis sed. Sit nec
                risus sit nisl, quis in turpis gravida libero. At elit eu lacus,
                quam neque euismod posuere eget. Convallis varius laoreet etiam
                ultrices varius molestie tinci.
              </div>
              <div className="justify-center self-start px-8 py-3 mt-9 text-sm leading-5 text-white uppercase bg-red-600 tracking-[2px] max-md:px-5">
                view project
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/48c07926166ab5deddbc8da1603efdbbb1bebd6e1d26cb5c52ade707766d870b?apiKey=36488682b7c54f08ad6c54eaddd3e0a8&"
              className="grow w-full aspect-[1.03] max-md:mt-10 max-md:max-w-full"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/54b1aa23b5ea74b9fd6ccdf02e613365b4891ddec26f84a5c909e2589e8e21a1?apiKey=36488682b7c54f08ad6c54eaddd3e0a8&"
              className="grow w-full aspect-[1.45] max-md:mt-10 max-md:max-w-full"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      <div className="mt-32 w-full max-md:pr-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/236ca2df60352b28456984f9a15de9d806b61acb6e26d2c093ebd7c8184bfb53?apiKey=36488682b7c54f08ad6c54eaddd3e0a8&"
              className="grow w-full aspect-[1.45] max-md:mt-10 max-md:max-w-full"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/526caa5d7943d5211195bb3217223e7a4f3030d0205b5f17dcad2c3b0d04bc24?apiKey=36488682b7c54f08ad6c54eaddd3e0a8&"
              className="grow w-full aspect-[1.03] max-md:mt-10 max-md:max-w-full"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-4xl font-extrabold max-md:mt-10 max-md:max-w-full">
              <div className="text-blue-700 max-md:max-w-full">03</div>
              <div className="mt-7 text-neutral-900 max-md:max-w-full">
                Residential Project 3
              </div>
              <div className="mt-9 text-base font-medium leading-6 text-neutral-500 max-md:max-w-full">
                Ac volutpat et nulla ultricies convallis convallis sed. Sit nec
                risus sit nisl, quis in turpis gravida libero. At elit eu lacus,
                quam neque euismod posuere eget. Convallis varius laoreet etiam
                ultrices varius molestie tinci.
              </div>
              <div className="justify-center self-start px-8 py-3 mt-9 text-sm leading-5 text-white uppercase bg-red-600 tracking-[2px] max-md:px-5">
                view project
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
