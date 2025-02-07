// import Product from "@/app/page";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Foot from "@/app/Foot/page";
import  AddToCart  from "@/app/components/Add/Addtocart";
import Link from "next/link";


async function Detail({ params: { id } }: { params: { id: string } }) {
  const query = `*[_type == "product" &&  _id == $id]
   {
       name,
       price,
       description,
       category,
       discountPercent,
      "image":image.asset._ref,
      "id":_id,
  }[0]`;

  const products: Product | null = await client.fetch(query, { id });
  if (!products) {
    return (
      <div>
        <h1>Product Not Found</h1>
      </div>
    );
  }

  return (
    <>
     
      <div className="head-one">
          <div className="header"> 
            <p className="line-one text-center">
              Sign up and get 20% off to your first order. </p>
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
      <div key={products.id}>
        <div className="w-[350px] ml-[20px] lg:w-[1100px] mt-[40px] lg:ml-[200px] lg:p-6 bg-white shadow-lg rounded-lg overflow-hidden lg:flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-12">
          <div className="w-[250px] ml-[10px] mt-[30px] lg:mt-[10px] lg:w-1/2"> 
            <Image
              src={urlFor(products.image).url()}
              alt="product image"
              width={400}
              height={430}
              className="lg:w-[450px] ml-[40px] h-auto object-cover rounded-lg"
            />
          </div>

          <div className="w-full ml-[15px] lg:w-1/2 flex flex-col space-y-4">
            <h1 className="text-3xl font-semibold text-gray-800">
              {products.name}
            </h1>

            <div className="flex items-center space-x-2 mt-2">
              <Image
                src="/images2/stars.png"
                alt="stars"
                width={154}
                height={19}
                className="w-[154px] h-[19px]"
              />
            </div>

            <div className="mt-4">
              <p className="text-2xl font-bold text-gray-900">
                ${products.price}
              </p>
              <p className="text-sm text-green-600">
                {products.discountPercent}% off
              </p>
            </div>

            <div className="mt-4 text-gray-700">
              <p className="text-2xl font-bold">{products.category}</p>
              <p className="mt-2 mr-[20px] mb-[20px] lg:mb-hidden text-sm">{products.description}</p>
              <Link href="/Cart">
              <AddToCart
              productId={products.id}
              productName={products.name}
              productPrice={products.price}
              productImage={urlFor(products.image).url()}
      
             />
             </Link>
            </div> 
          </div>
        </div>
      </div>

      <div className="lg:flex lg:items-start lg:mt-[70px] lg:ml-[100px]">
        <Image
          src="/images3/product.png"
          alt="text"
          width={133}
          height={14}
          className="w-[120px] h-[11px] ml-[16px] mt-[50px] lg:w-[133px] lg:h-[14px] lg:ml-[135px]"
        />
        <Image
          src="/images3/rating.png"
          alt="text"
          width={154}
          height={14}
          className="w-[130px] h-[12px] ml-[170px] mt-[-10px] lg:w-[154px] lg:h-[14px] lg:mt-[50px] lg:ml-[260px]"
        />
        <Image
          src="/images3/FAQs.png"
          alt="text"
          width={47}
          height={14}
          className="w-[38px] h-[11px] ml-[325px] mt-[-12px] lg:w-[47px] lg:h-[14px] lg:mt-[50px] lg:ml-[310px]"
        />
      </div>
      <div className="lg:flex lg:items-start lg:mt-[20px]">
        <Image
          src="/images3/Line 5.png"
          alt="line"
          width={1240}
          height={1}
          className="w-[358px] h-[1px] ml-[16px] mt-[25px] lg:w-[1240px] lg:h-[1] lg:mt-[2px] lg:ml-[100px]"
        />
        <Image
          src="/images3/Line 7.png"
          alt="line"
          width={414}
          height={1}
          className="w-[130px] h-[1px] ml-[170px] mt-[0px] lg:w-[414px] lg:h-[1px] lg:ml-[-830px]"
        />
      </div>
      <div className="lg:flex lg:items-start lg:mt-[30px]">
        <Image
          src="/images3/all.png"
          alt="text"
          width={125}
          height={32}
          className="w-[104px] h-[20px] ml-[16px] mt-[40px] lg:w-[125px] lg:h-[32px] lg:ml-[100px]"
        />
        <Image
          src="/images3/(451).png"
          alt="no"
          width={33}
          height={11}
          className="w-[29px] h-[10px] ml-[130px] mt-[-10px] lg:w-[33px] lg:h-[11px] lg:ml-[10px] lg:mt-[55px]"
        />
        <Image
          src="/images3/latest.png"
          alt="image"
          width={354}
          height={48}
          className="w-[220px] h-[40px] ml-[170px] mt-[-25px] lg:w-[354px] lg:h-[48px] lg:ml-[710px] lg:mt-[40px]"
        />
      </div>
      <div className="lg:flex lg:items-start lg:ml-[100px] lg:mt-[30px]">
        <Image
          src="/images3/saman.png"
          alt="image"
          width={610}
          height={241}
          className="w-[358px] h-[224px] ml-[16px] mt-[30px] lg:w-[610px] lg:h-[241px]"
        />
        <Image
          src="/images3/alex.png"
          alt="image"
          width={610}
          height={241}
          className="w-[358px] h-[224px] ml-[16px] mt-[20px] lg:w-[610px] lg:h-[241px] lg:ml-[15px]"
        />
      </div>
      <div className="lg:flex lg:items-start lg:ml-[100px] lg:mt-[20px]">
        <Image
          src="/images3/ethan.png"
          alt="image"
          width={610}
          height={241}
          className="w-[358px] h-[224px] ml-[16px] mt-[20px] lg:w-[610px] lg:h-[241px] lg:ml-[15px]"
        />
        <Image
          src="/images3/olivia.png"
          alt="image"
          width={610}
          height={241}
          className="w-[358px] h-[224px] ml-[16px] mt-[20px] lg:w-[610px] lg:h-[241px] lg:ml-[15px]"
        />
      </div>
      <div className="lg:flex lg:items-start lg:ml-[100px] lg:mt-[20px]">
        <Image
          src="/images3/liam.png"
          alt="image"
          width={610}
          height={241}
          className="w-[358px] h-[224px] ml-[16px] mt-[20px] lg:w-[610px] lg:h-[241px] lg:ml-[15px]"
        />
        <Image
          src="/images3/ava.png"
          alt="image"
          width={610}
          height={241}
          className="w-[358px] h-[224px] ml-[16px] mt-[20px] lg:w-[610px] lg:h-[241px] lg:ml-[15px]"
        />
      </div>
      <div className="lg:flex lg:justify-center lg:items-center lg:mt-[40px]">
        <Image
          src="/images3/load.png"
          alt="button"
          width={230}
          height={52}
          className="w-[195px] h-[47px] ml-[90px] mt-[20px] lg:w-[230px] lg:h-[52px] lg:ml-[15px]"
        />
      </div>
      <div className="mr-[-30px] lg:mr-[-90px]">
        <Foot />
      </div>
    </>
  );
}
export default Detail;
