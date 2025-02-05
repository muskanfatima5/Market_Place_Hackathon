 import Image from "next/image"
 import Header from "../Head/page"
 import Foot from "../Foot/page"
 import Link from "next/link"
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";


async function Cat({ product }: { product: Product }) {
  let errorMessage = "";
  let data: Product[] = [];
  const query = `*[_type == "product"][5..17]
   {
       _id,
       name,
       price,
       description,
       category,
       discountPercent,
      "imageUrl":image.asset->url
   }`;

try {
  data = await client.fetch(query);
  console.log(data);

  if (data.length === 0) {
    errorMessage = "Products not found.";
  }
} catch (error) {
  console.error("Error fetching products:", error);
  errorMessage = "An error occurred while fetching products.";
}

  return(
    

        <div className="w-[390px] h-[1500px] md:w-[1024px] md:h-[1280px] lg:w-[1440px] lg:h-[2332px]" >          
        <Header />
        
         <div className="w-[358px] ml-[16px] lg:w-[1240px] lg:ml-[100px] lg:mt-[15px]">
        <Image src="/images2/Line2.png" alt="line" width={1240}  height={1}/>       
        </div>
        <div className=" flex gap-2 ml-[16px] mt-[20px] lg:ml-[100px] lg:mt-[25px]">
        <Link href="./Home">
        <p className="hover:bg-slate-300 text-gray-500">Home</p>
        </Link>
        <img src="./images/arrow.png" />
        <p>Shop</p>
        </div>
        <div  className="lg:ml-[100px] lg:mt-[10px] md:flex lg:flex lg:items-start">
        <Image src="/images2/filters.png" alt="filters" width={390}  height={1066} className="mt-[30px] lg:w-[295px] lg:h-[1220px] "/>  
        <Image src="/images2/Casual.png" alt="heading" width={101}  height={32} className="w-[76px] h-[32px] ml-[16px] mt-[25px] lg:w-[101px] lg:h-[32px] lg:ml-[23px] lg:mt-[20px]"/>
        <p className="ml-[220px] mt-[-20px] lg:flex lg:ml-[700px] lg:mt-[20px] text-gray-500 ">Sort by:</p>
        <p className="ml-[280px] mt-[-23px] lg:mt-[20px] font-bold lg:ml-[10px]">Most Popular</p>
        
         <div className="grid grid-cols-1 ml-[16px] md:grid-cols-3 lg:ml-[-950px] lg:mt-[60px] lg:grid-cols-3 gap-6 p-6">
         {/* <div className="text-center text-red-500 font-semibold mt-10">
            <p>{errorMessage}</p>
          </div>  */}
        {data.map((products: Product) => (
          <div
            key={products._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Link href={`/Products/${products._id}`} passHref>
              <Image
                src={urlFor(products.imageUrl).url()}
                alt={products.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-4">
              <p className="font-semibold text-lg text-gray-800 truncate">
                {products.name}
              </p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-xl font-bold text-gray-900">
                  ${products.price}
                </p>
                <p className="text-sm text-green-600">
                  {products.discountPercent}% off
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
            </div>
            <div className="lg:ml-[420px]">
            <Image src="/images2/Line 9.png" alt="line" width={925} height={1} className="w-[358px] h-[1px] ml-[16px] mt-[60px] lg:w-[925px] lg:h-[1px] lg:mt-[40px]" /> 
            </div>
            <div className="lg:ml-[420px] lg:my-[30px]">
            <Link href="/components/Productlisting">
            <Image src="/images2/Next.png" alt="text" width={86}  height={36} className="w-[73px] h-[36px] ml-[16px] mt-[20px] lg:mb-[40px] lg:mr-[90px] lg:float-end lg:w-[86px] lg:h-[36px]" /> 
            </Link>
            </div>
            <div>  
            <Foot />
            </div> 
        </div>
        
     
 )
} export default Cat