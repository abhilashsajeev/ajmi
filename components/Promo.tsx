import Image from "next/image";
import { RiArrowDropRightFill } from "react-icons/ri";

export default function Promo() {
  return (
    <section className="flex flex-col justify-center text-center">
      <div className="m-24">
        <h1 className="text-3xl m-20">
          AT ITALIAN MODERN KITCHEN WE BELIEVE THAT ARCHITECTURE AND INTERIOR
          DESIGN ARE MORE THAN JUST SPACES- THEY ARE CANVACES OF OUR LIVES
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 ml-20">
        <div>
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
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Image
                src="https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/htr6xfhmzptyff8aqk0p"
                alt="Height "
                height={200}
                width={200}
              />
            </div>
            <div>
              <ul className="list-none">
                <li className="text-gray-400">RESIDENTIAL PROJECTS</li>
                <div className="divider"></div>
                <li className="text-gray-400">COMMERCIAL PROJECTS</li>
                <div className="divider"></div>
                <li className="text-gray-400">ONGOING PROJECTS</li>
                <div className="divider"></div>
                <li className="text-gray-400">COMPLETED PROJECTS</li>
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
            <div className="justify-start items-start">
              <button className="btn btn-ghost ">
                Know More
                <RiArrowDropRightFill />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
