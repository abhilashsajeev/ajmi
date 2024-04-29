import ProductItem, { ProductItemProp } from "./ProductItem";

const ProductList = [
  {
    title: "Solid Surface Sink",
    sub_title: "Material : UPVC",
    image:
      "https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/product/vq2fzsy8f1smgzjvj343",
  },
  {
    title: "Metalic Sink",
    sub_title: "Material : UPVC",
    image:
      "https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/product/bilsohjf7kqsnqqh9q5w",
  },
  {
    title: "Metalic Sink 2",
    sub_title: "Material : UPVC",
    image:
      "https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/product/v7gtd9xar3azj2qbrh07",
  },
  {
    title: "Waste Bin Baset",
    sub_title: "Material : UPVC",
    image:
      "https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/product/k08kousewapggqwsjmgu",
  },

  {
    title: "Corner Pullout",
    sub_title: "Material : UPVC",
    image:
      "https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/product/ikqnk4rkwadarvquvimb",
  },
  {
    title: "Drawer Basket",
    sub_title: "Material : UPVC",
    image:
      "https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/product/pqwy7teussqt3vaa5kvv",
  },
  {
    title: "Solid Surface Sink",
    sub_title: "Material : UPVC",
    image:
      "https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/product/vq2fzsy8f1smgzjvj343",
  },
  {
    title: "Metalic Sink",
    sub_title: "Material : UPVC",
    image:
      "https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/product/bilsohjf7kqsnqqh9q5w",
  },
  {
    title: "Metalic Sink 2",
    sub_title: "Material : UPVC",
    image:
      "https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/product/v7gtd9xar3azj2qbrh07",
  },
  {
    title: "Waste Bin Baset",
    sub_title: "Material : UPVC",
    image:
      "https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/product/k08kousewapggqwsjmgu",
  },

  {
    title: "Corner Pullout",
    sub_title: "Material : UPVC",
    image:
      "https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/product/ikqnk4rkwadarvquvimb",
  },
  {
    title: "Drawer Basket",
    sub_title: "Material : UPVC",
    image:
      "https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/product/pqwy7teussqt3vaa5kvv",
  },
];

export default function ProductParent() {
  return (
    <>
      <div className="flex w-full item-center justify-center gap-5 max-md:flex-col max-md:gap-0">
        {ProductList.slice(0, 3).map((item: ProductItemProp, index: number) => (
          <ProductItem {...item} key={index} />
        ))}
      </div>
      <div className="flex w-full mt-5 items-center justify-center gap-5 max-md:flex-col max-md:gap-0">
        {ProductList.slice(0, 3).map((item: ProductItemProp, index: number) => (
          <ProductItem {...item} key={index} />
        ))}
      </div>
    </>
  );
}
