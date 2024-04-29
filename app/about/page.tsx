import Description from "@/components/Stats/Description";
import Stats from "@/components/Stats/Stats";
import Image from "next/image";
import styles from "@/components/LastSection.module.css";

export default function About() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <h1
            className={`text-white text-[9em] leading-none text-center opacity-65 ${styles.blackStroke} `}
          >
            Italian Modern Kitchen
          </h1>
        </div>
        <div className="flex justify-center items-center ">
          <div className="justify-center uppercase text-center w-52 font-bold z-20">
            ABOUT THE STUDIO
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <div className="justify-center pt-10 pb-20 w-3/4 text-3xl font-black tracking-tight leading-10 text-center uppercase text-stone-900 z-30">
            At italian modern kitchen, we believe that architecture and interior
            design are more than just spaces – they are the canvases of our
            lives.
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Image
          src="https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/ot3fodtccpmqgecvximh"
          height={650}
          width={1100}
          alt="About banner Image"
        />
      </div>

      <Stats />
      <Description />
    </>
  );
}
