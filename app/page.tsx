import Form from "@/components/Login/Form";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <Image src="/logo.webp" width={250} height={250} alt="AJMI LOGO" />
            <h1 className="title-font font-medium text-3xl text-gray-900">
              IBN AL AJMI LOGIN
            </h1>
            <p className="leading-relaxed mt-4">
              AT Oman started with the mission of bringing best of the products
              and services across Sultanate. IAT has been an honorable company
              operating over successful 17 years starting in 2003 as Ghadeer
              Barka Trading with its expansion in 2005 and changing name to IAT.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Sign In
            </h2>
            <Form />
            <p className="text-xs text-gray-500 mt-3">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
