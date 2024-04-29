import ServicesParent from "@/components/ServicesDesc/ServicesParent";

export default function Services() {
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="justify-center uppercase text-center w-52 font-bold text-xs z-20">
          SERVICES
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <div className="justify-center pt-10 pb-20 w-3/4 text-5xl font-black tracking-tight leading-10 text-center uppercase text-stone-900 z-30">
          what we offer
        </div>
      </div>
      <ServicesParent />
    </>
  );
}
