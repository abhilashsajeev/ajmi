import * as React from "react";

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className="object-cover absolute inset-0 size-full"
  />
);

interface TextProps {
  title: string;
  subtitle: string;
}

const Text: React.FC<TextProps> = ({ title, subtitle }) => (
  <div className="flex flex-col">
    <h2 className="text-2xl font-extrabold leading-8 text-neutral-900">
      {title}
    </h2>
    <p className="mt-2 text-sm font-medium leading-5 text-neutral-500">
      {subtitle}
    </p>
  </div>
);

const LearnMore: React.FC = () => (
  <div className="flex gap-2.5 mt-4 uppercase tracking-[2px]">
    <span className="my-auto text-xs font-extrabold leading-4 text-black">
      learn more
    </span>
    <span
      className="text-xs font-black leading-6 text-blue-700"
      aria-hidden="true"
    ></span>
  </div>
);

export interface ProductItemProp {
  image: string;
  title: string;
  sub_title: string;
}

const ProductItem: React.FC<ProductItemProp> = ({
  image,
  title,
  sub_title,
}: ProductItemProp) => {
  return (
    <div className="flex flex-col justify-center w-1/3">
      <section className="flex overflow-hidden relative flex-col items-center pl-1 pt-20 pb-9 w-full min-h-[670px] max-md:pl-5 max-md:max-w-full">
        <Image src={image} alt={title} />
        <article className="flex relative flex-col items-start  mt-96 w-full bg-white  max-md:pr-5 max-md:mt-10">
          <Text title={title} subtitle={sub_title} />
          <LearnMore />
        </article>
      </section>
    </div>
  );
};

export default ProductItem;
