import { client } from "@/sanity/lib/client";
// import product from "@/sanity/schemaTypes/product";
// import Product from "../../page";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
import Foot from "../../Foot/page";
// import Link from "next/link";
import SearchAndFilter from "../SearchandFilter/Search";

// async function View({ product }: { product: Product }) {
  async function View() {
  const query = `*[_type == "product"]
   {
       _id,
       name,
       price,
       description,
       category,
       discountPercent,
      "imageUrl":image.asset->url
  }`;

  const data = await client.fetch(query);
  console.log(data);

  return (
    <>
      <div className="head-one">
        <div className="header">
          <p className="line-one text-center">
            Sign up and get 20% off to your first order.{" "}
          </p>
          <p className="line-two">Sign Up Now</p>
        </div>
        <div className="cross">
          <img
            src="/images/cross.png"
            alt="close"
            width={13.13}
            height={13.13}
          />
        </div>
      </div>

      <SearchAndFilter products={data} />
  
      <div className="mr-[-30px]">
        <Foot />
      </div>
    </>
  );
}
export default View;
