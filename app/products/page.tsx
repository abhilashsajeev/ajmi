import ProductParent from "@/components/Products/ProductParent";

export default function Products() {
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="justify-center uppercase text-center w-52 font-bold text-xs z-20">
          PRODUCTS
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <div className="justify-center pt-10 pb-20 w-3/4 text-5xl font-black tracking-tight leading-10 text-center uppercase text-stone-900 z-30">
          SNEAK PEAK INTO OUR COLLECTIONS
        </div>
      </div>
      <ProductParent />
    </>
  );
}
