import Image from "next/image";

export default function HowItWorks() {
  return (
    <div className="relative w-full h-[100vw] lg:h-screen bg-violet-200">
      <Image
        src="https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/hmwftsnxcjutmfb92wvc"
        alt="How it works"
        objectFit="contain"
        fill
      />
    </div>
  );
}
