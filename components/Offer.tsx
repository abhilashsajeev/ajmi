import Image from "next/image";

export default function Offer() {
  return (
    <section className="flex flex-col">
      <div className="flex">
        <div className="flex-1">
          <h2>OUR SERVICES</h2>
          <h1 className="text-6xl font-bold">WHAT WE OFFER</h1>
          <ul className="list-none w-[48%]">
            <div className="divider"></div>
            <li className="font-bold text-black">
              KITCHEN DESIGN & INSTALLATION
            </li>
            <div className="divider"></div>
            <li className="font-bold text-black">
              VANITY DESIGN & INSTALLATION
            </li>
            <div className="divider"></div>
            <li className="font-bold text-black">
              WARDROBE & WALK IN CLOSET INSTALLATION
            </li>
            <div className="divider"></div>
            <li className="font-bold text-black">COUNTER TOP INSTALLATION</li>
          </ul>
        </div>
        <div className="flex-1">
          <Image
            src="https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/ncwf0tajal57qfvqqnkn"
            height={800}
            width={600}
            alt="Kitchen"
          />
        </div>
      </div>
    </section>
  );
}
