import * as React from "react";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  material: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  title,
  material,
}) => {
  return (
    <div className="flex flex-col w-[32%] items-center max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center max-md:mt-10 max-md:max-w-full">
        <div className="flex overflow-hidden relative flex-col items-end px-16 pt-20 pb-9 w-full min-h-[670px] max-md:pl-5 max-md:max-w-full">
          <img
            loading="lazy"
            src={imageSrc}
            alt={title}
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col items-start p-4 mt-96 max-w-full bg-white w-[393px] max-md:pr-5 max-md:mt-10">
            <div className="flex flex-col">
              <h3 className="text-2xl font-extrabold leading-8 text-neutral-900">
                {title}
              </h3>
              <p className="mt-2 text-sm font-medium leading-5 text-neutral-500">
                Material: {material}
              </p>
            </div>
            <div className="flex gap-2.5 mt-4 uppercase tracking-[2px]">
              <span className="my-auto text-xs font-extrabold leading-4 text-black">
                learn more
              </span>
              <span className="text-xs font-black leading-6 text-blue-700"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const products = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4737b9f61fb2bfd0fd8ca97e9a6322f54813c4210e0b65978fcf8e76338e9afa?apiKey=36488682b7c54f08ad6c54eaddd3e0a8&",
    title: "Solid Surface Sink",
    material: "UPVC",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/eb47c0f42c90cb7a7902bed0adce63e65b65d277d15da00656863e9cf85ad687?apiKey=36488682b7c54f08ad6c54eaddd3e0a8&",
    title: "Metalic Sink",
    material: "UPVC",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7fdf898fadd59fa2d2cf3bf70c4cc95188c83ed1368bd9d9dbb2c5b925b74947?apiKey=36488682b7c54f08ad6c54eaddd3e0a8&",
    title: "Metalic Sink",
    material: "UPVC",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5be7fd2c3916f5a05ddfda247d0b379b1a9de008db71afe15b1b8eb1ebd816ae?apiKey=36488682b7c54f08ad6c54eaddd3e0a8&",
    title: "Waste Bin Basket",
    material: "UPVC",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/49e0822d704c6d6ae143b25f7b3bbe64724fee4d86dfb77503bd01962390ac24?apiKey=36488682b7c54f08ad6c54eaddd3e0a8&",
    title: "Corner Pullout",
    material: "UPVC",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d51d3e5b78970547776ffdde2744b638871595c940878ab0590fffefa8f38b87?apiKey=36488682b7c54f08ad6c54eaddd3e0a8&",
    title: "Drawer Basket",
    material: "UPVC",
  },
];

function CollectionPage() {
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="flex w-full uppercase max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <h2 className="text-xl font-semibold tracking-tight  text-start text-black uppercase">
            Our products
          </h2>
        </div>
        <div className="flex w-full uppercase  max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <h1 className="flex-auto text-8xl font-bold  text-black ">
            Sneak peak into our collections
          </h1>
        </div>
        <section className="w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {products.slice(0, 3).map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </section>
        <section className="w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {products.slice(3).map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default CollectionPage;
