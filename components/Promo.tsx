import Image from "next/image";
import { RiArrowDropRightFill } from "react-icons/ri";

export default function Promo() {
  return (
    <section className="flex flex-col justify-center text-center">
      <div>
        <h1 className="text-3xl m-20 font-bold">
          AT ITALIAN MODERN KITCHEN WE BELIEVE THAT ARCHITECTURE AND INTERIOR
          DESIGN ARE MORE THAN JUST SPACES- THEY ARE CANVACES OF OUR LIVES
        </h1>
      </div>
      <div>
        <h4 className="font-semibold">ABOUT THE STUDIO</h4>
      </div>
      <div className="grid grid-cols-2 m-20">
        <div className="gap-0">
          <Image
            src={
              "https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/rys7jkqprav9bjo2yrrf"
            }
            height={600}
            width={400}
            alt="Image for this"
          />
        </div>
        <div>
          <div className="grid grid-cols-2 gap-1">
            <div>
              <Image
                src="https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/htr6xfhmzptyff8aqk0p"
                alt="Height "
                height={200}
                width={200}
              />
            </div>
            <div className="flex flex-row">
              <ul className="list-none">
                <li>
                  <span className="text-2xl font-bold">232</span>
                </li>
                <div className="divider"></div>
                <li>
                  <span className="text-2xl font-bold">160</span>
                </li>
                <div className="divider"></div>
                <li>
                  <span className="text-2xl font-bold">160</span>
                </li>
                <div className="divider "></div>
                <li>
                  <span className="text-2xl font-bold">234</span>
                </li>
              </ul>
              <ul className="list-none">
                <li>
                  <span className="text-gray-400">RESIDENTIAL PROJECTS</span>
                </li>
                <div className="divider"></div>
                <li>
                  <span className="text-gray-400">COMMERCIAL PROJECTS</span>
                </li>
                <div className="divider"></div>
                <li>
                  <span className="text-gray-400">ONGOING PROJECTS</span>
                </li>
                <div className="divider"></div>
                <li>
                  <span className="text-gray-400">COMPLETED PROJECTS</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-12 ">
            <p className="text-justify">
              ITALIAN MODERN KITCHEN Oman started with the mission of bringing
              best of the products and services across sultanate . IMK has been
              an  honorable company operating over successful 19 years starting
              in 2003. Today IMK is one of the leading kitchen manufacturing
              company in oman . our design team aspire to create the most
              beautiful and functional modern , modular and traditional custom
              kitchen cabinets for our clients . We will design your modern
              dream kitchen according to your wishes and specifications and can
              incorporate any desired kitchen layout , kitchen cabinet finishes
              , designs and materials. Feel free to read our kitchen reviews.
            </p>
          </div>
          <div className="justify-start items-start text-start">
            <button className="btn btn-ghost">
              Know More
              <RiArrowDropRightFill />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
