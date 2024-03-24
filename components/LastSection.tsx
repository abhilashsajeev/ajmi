import * as React from "react";
import styles from "./LastSection.module.css";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageLazy: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

interface ButtonProps {
  children: React.ReactNode;
  icon: string;
}

const Button: React.FC<ButtonProps> = ({ children, icon }) => (
  <div className="flex gap-4 justify-between px-3.5 py-3 mt-10 text-base font-bold leading-5 uppercase bg-blue-700">
    <div>{children}</div>
    <ImageLazy
      src={icon}
      alt=""
      className="shrink-0 my-auto w-4 aspect-square"
    />
  </div>
);

const LastSection: React.FC = () => {
  return (
    <section className="flex flex-col justify-center bg-neutral-300">
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-16 w-full mix-blend-multiply min-h-[884px] max-md:px-5 max-md:max-w-full">
        <ImageLazy
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a31eea08bb62ad340cc3c2651f74d2f2b32587089fc710cf031d704a09406763?apiKey=36488682b7c54f08ad6c54eaddd3e0a8&"
          alt="Background image"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative gap-5 justify-between items-start mb-12 w-full max-w-[1619px] max-md:flex-wrap max-md:mb-10 max-md:max-w-full">
          <div className="flex flex-col self-end px-10 py-12 mt-96 tracking-normal text-white backdrop-blur-[50px] bg-white bg-opacity-10 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <p className="text-sm font-medium leading-5">
              We listen, we create, you enjoy. Where dimensions take shape.
            </p>
            <Button icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b0be44a99de224e4bca89369ebcb5fd3307596104c8e5328e4c0b6018e9101dd?apiKey=36488682b7c54f08ad6c54eaddd3e0a8&">
              View project
            </Button>
          </div>
          <div
            className={`flex flex-col  self-start py-20 text-8xl font-bold tracking-tighter uppercase max-md:max-w-full max-md:text-4xl `}
          >
            <h1 className="text-white leading-[90%] max-md:max-w-full max-md:text-4xl">
              Building EXCEPTIONAL
            </h1>
            <h2
              className={`mt-4  text-transparent leading-[86px] max-md:max-w-full max-md:text-4xl max-md:leading-10 ${styles.strokeItem} `}
            >
              spaces <br /> since 2002
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastSection;
