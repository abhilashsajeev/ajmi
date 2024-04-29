import Image from "next/image";

export default function Description() {
  return (
    <>
      <div className="grid grid-cols-2 gap-2 p-10">
        <div>
          <Image
            src="https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/xleaaln3qgfnbbtfpvhl"
            height={797}
            width={707}
            alt="rectagle 48"
          />
        </div>
        <div className="flex-col">
          <div className="justify-start">
            <Image
              src={
                "https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/zbaozkbm0va6li3nnbw0"
              }
              width={240}
              height={162}
              alt="Ibn Al ajmi logo"
            />
          </div>
          <div className="text-3xl text-black uppercase">IBN AL AJMI (IAT)</div>
          <div className="text-gray-400 text-sm justify-around text-justify">
            <p>
              IBN AL AJMI (IAT) Oman started with the mission of bringing best
              of the products and services across sultanate .IAT has been an
              honorable company operating over successful 24 years starting in
              2000 as Gadeer Barka Trading with its expansion in 2003 and
              changing name to IAT . Today we are the leading supplier of
              Aluminium Window door and kitchen extrusion profiles  , world
              leading  brand kitchen accessories , marble , granite and quartz
              stone .using most modern and highly sophisticated  Machineries our
              powder coating , Aluminium casting , italian design kitchen meet
              the demand of customers with high quality and fast delivery times.
              ITALIAN MODERN KITCHEN was established as part of IAT in the year
              of 2003 under leadership of Mr. AHEMED JUMA GHULOOM AL AJMI in the
              sultanate of Oman with one showroom and kitchen factory at BARKA
              industrial area. During this period, we have successfully
              completed many projects for government and private sector in the
              sultanate of Oman . ITALIAN MODERN KITCHEN is the reference point
            </p>
            <p>
              ITALIAN MODERN KITCHEN is the reference point for who is looking
              for the best design kitchens, technological innovations and trendy
              styles. Every kitchen is completed with accessories and electrical
              appliances capable of bringing the professionalism of the great
              chef’s kitchen in the domestic environment. We are capable to
              manufacture all kind of kitchen with water proof materials in
              modern design ..  Every
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
