///this code was used in main page.ts file for fetching data an displaying it on frontend

import { workerData } from "worker_threads"



// import "../style/home.css"
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import product from "@/sanity/schemaTypes/product";
// import Image from "next/image";
// import React from "react";
// import Header from "../Head/page";
// import Foot from "../Foot/page";


// const products = async () => {
//   const query = ` *[_type == "product"][3..10]
//   {
//       _id,
//       name,
//       price,
//       description,
//       category,
//       discountPercent,
//      "imageUrl":image.asset->url
//     }`;
     
//     const rest:data[]  = await client.fetch(query);
//     console.log(rest);
//     return (
//       <div className="w-[1440px]">
//       <Header />
//       <div className="flex justify-center items-center p-4">
//         <div>
//           <div className="font-bold text-5xl text-center ">
//                New Arrival
//           </div>
//           <div className="grid grid-cols-4 gap-8">
//           {
//             rest.map((product:data) => (
//               <div className="mt-[30px] ml-[30px]">
//               <Image key={product._id}
//               src={urlFor(product.imageUrl).url()}
//               width={270}
//               height={220}
//               alt={product.name}
//               />
//               {/* <div className="text-1xl text-center">{product.description}</div> */}
//               <div className="text-2xl">{product.category}</div>
//               <div className="text-2xl">Price:{product.price}$</div>
//               <div  className="text-1xl">{product.discountPercent}%off</div>
//              </div>
//             ))
//           }
//           </div>
//         </div>
//       </div>
//       </div>
//     )
// }

// export default products

// function list(product:data){
//     return(
//         <div>

//     )
// }export default list




/////nextconfig file should look like this



// /** @type {import('next').NextConfig} */
// const nextConfig = {};               
// export default nextConfig;
// the upper two or 3 line shoul be comment


// export default {
//     images: {
//       domains: ['cdn.sanity.io'],
//     },
//   }



// [id] previous workerData

//  async function  Detail(): Promise<Product[]>{
//     const query = `*[_type == "product" &&  _id == $id]
//    {
//        name,
//        price,
//        description,
//        category,
//        discountPercent,
//       "image":image.asset._ref,
//       "id":_id,
//   }[0]`

//   const products = await client.fetch(query);
//   return products;
// }
     
// const detail = async (params : { id : string }) => {
// const products = await Detail(); 

//     return(
//         <div>
//             {products.map((product:Product)=> (
//                 <ProductDetail product={product} key={product.id} />
//             ))}
//         </div>
//     )
// }
//  export default detail;





//all the detail page code from grontend


// import Image from "next/image"
// import Header from "../Head/page"
// import Foot from "../Foot/page"

// function Detail(){
//     return(
//         <div className="w-[390px] h-[3553px] lg:w-[1440px] lg:h-[3066px]" >
//             <Header /> 
//             <div className="w-[358px] ml-[16px] lg:w-[1240px] lg:ml-[100px] mt-[15px]">
//             <Image src="/images2/Line2.png" alt="line" width={1240} height={1}/>
//             </div>
//             <div className="w-[215px] h-[19px] ml-[16px] lg:w-[259px] lg:h-[22px] lg:ml-[100px] mt-[30px]">
//             <Image src="/images3/t-shirts.png" alt="arrow" width={259} height={22}/>
//             </div>
//             <div className="lg:ml-[100px] lg:flex lg:items-start">
//             <Image src="/images3/desi-one.png" alt="shirt" width={152} height={167} className="w-[111px] h-[106px] ml-[16px] mt-[330px] lg:mt-[35px] lg:w-[152px] lg:h-[167px] "/>
//             <Image src="/images3/main.png" alt="shirt" width={444} height={530} className="w-[358px] h-[290px] ml-[16px] mt-[-410px] lg:w-[444px] lg:mt-[35px] lg:h-[530px] lg:ml-[10px]"/>
//             <Image src="/images3/life-sh.png" alt="heading" width={600} height={48} className="w-[250px] h-[36px] ml-[16px] mt-[135px] lg:mt-[35px] lg:w-[600px] lg:h[48px] lg:ml-[30px]"/>
//             <Image src="/images3/desi-two.png" alt="shirt" width={152} height={168} className="w-[111px] h-[106px] ml-[140px] mt-[-157px] lg:w-[152px] lg:h-[167px]  lg:ml-[-1237px] lg:mt-[215px]"/>
//             <Image src="/images3/boy-s.png" alt="shirt" width={152} height={167} className="w-[111px] h-[106px] ml-[263px] mt-[-105px] lg:w-[152px] lg:h-[167px] lg:ml-[-150px] lg:mt-[398px]"/>
//             <Image src="/images2/stars.png" alt="stars" width={193} height={25} className="w-[154px] h-[19px] ml-[16px] mt-[70px] lg:w-[193px] lg:h-[25px] lg:ml-[480px] lg:mt-[85px]"/>
//             <Image src="/images3/price.png" alt="rate" width={176} height={43} className="w-[160px] h-[32px] ml-[16px] mt-[10px] lg:w-[176px] lg:h-[43px] lg:ml-[-190px] lg:mt-[115px]"/>
//             <Image src="/images3/off-two.png" alt="off" width={72} height={34} className="w-[60px] h-[32px] ml-[185px] mt-[-33px] lg:w-[72px] lg:h-[34px] lg:ml-[15px] lg:mt-[120px]"/>
//             <Image src="/images3/text.png" alt="text" width={590} height={33} className="w-[358px] h-[50px] ml-[16px] mt-[20px] lg:w-[590px] lg:h-[33px] lg:ml-[-260px] lg:mt-[175px]"/>
//             <Image src="/images3/Line 1.png" alt="line" width={590} height={1} className="w-[358px] ml-[16px] mt-[30px] lg:w-[590px] lg:ml-[-590px] lg:mt-[230px]"/>
//             <Image src="/images3/select.png" alt="select" width={93} height={11} className="w-[82px] h-[10px] ml-[16px] mt-[20px] lg:w-[93px] lg:h-[11px] lg:ml-[-590px] lg:mt-[255px]"/>
//             <Image src="/images3/colors.png" alt="colors" width={143} height={37} className="w-[142px] h-[39px] ml-[16px] mt-[25px] lg:w-[143px] lg:h-[37px] lg:ml-[-95px] lg:mt-[280px]"/>
//             <Image src="/images3/Line 1.png" alt="line" width={590} height={1} className="w-[358px] ml-[16px] mt-[30px] lg:w-[590px] lg:ml-[-145px] lg:mt-[335px]"/>
//             <Image src="/images3/choose.png" alt="size" width={87} height={11} className="w-[76px] h-[10px] ml-[16px] mt-[25px] lg:w-[87px] lg:h-[11px] lg:ml-[-590px] lg:mt-[360px]"/>
//             <Image src="/images3/size.png" alt="size" width={420} height={46} className="w-[353px] h-[40px] ml-[16px] mt-[25px] lg:w-[420px] lg:h-[46px] lg:ml-[-90px] lg:mt-[395px]"/>
//             <Image src="/images3/Line 1.png" alt="line" width={590} height={1} className="w-[358px] ml-[16px] mt-[25px] lg:w-[590px] lg:h-[1px] lg:ml-[-412px] lg:mt-[465px]"/>
//             <Image src="/images3/pgs.png" alt="no" width={170} height={52} className="w-[110px] h-[44px] ml-[16px] mt-[25px] lg:w-[170px] lg:h-[52px] lg:ml-[-600px] lg:mt-[500px]"/>
//             <Image src="/images3/add.png" alt="cart" width={400} height={52} className="w-[236px] h-[44px] ml-[140px] mt-[-43px] lg:w-[400px] lg:h-[52px] lg:ml-[30px] lg:mt-[500px]"/>
//             </div>
//             <div className="lg:flex lg:items-start lg:mt-[70px] lg:ml-[100px]">
//             <Image src="/images3/product.png" alt="text" width={133} height={14} className="w-[120px] h-[11px] ml-[16px] mt-[50px] lg:w-[133px] lg:h-[14px] lg:ml-[135px]"/>
//             <Image src="/images3/rating.png" alt="text" width={154} height={14} className="w-[130px] h-[12px] ml-[170px] mt-[-10px] lg:w-[154px] lg:h-[14px] lg:mt-[50px] lg:ml-[260px]"/>
//             <Image src="/images3/FAQs.png" alt="text" width={47} height={14} className="w-[38px] h-[11px] ml-[325px] mt-[-12px] lg:w-[47px] lg:h-[14px] lg:mt-[50px] lg:ml-[310px]"/>
//             </div>
//             <div className="lg:flex lg:items-start lg:mt-[20px]">
//             <Image src="/images3/Line 5.png" alt="line" width={1240} height={1} className="w-[358px] h-[1px] ml-[16px] mt-[25px] lg:w-[1240px] lg:h-[1] lg:mt-[2px] lg:ml-[100px]"/>
//             <Image src="/images3/Line 7.png" alt="line" width={414} height={1} className="w-[130px] h-[1px] ml-[170px] mt-[0px] lg:w-[414px] lg:h-[1px] lg:ml-[-830px]"/>
//             </div>
//             <div className="lg:flex lg:items-start lg:mt-[30px]">
//             <Image src="/images3/all.png" alt="text" width={125} height={32} className="w-[104px] h-[20px] ml-[16px] mt-[40px] lg:w-[125px] lg:h-[32px] lg:ml-[100px]"/>
//             <Image src="/images3/(451).png" alt="no" width={33} height={11} className="w-[29px] h-[10px] ml-[130px] mt-[-10px] lg:w-[33px] lg:h-[11px] lg:ml-[10px] lg:mt-[55px]"/>
//             <Image src="/images3/latest.png" alt="image" width={354} height={48} className="w-[220px] h-[40px] ml-[170px] mt-[-25px] lg:w-[354px] lg:h-[48px] lg:ml-[710px] lg:mt-[40px]"/>
//             </div>
//            <div className="lg:flex lg:items-start lg:ml-[100px] lg:mt-[30px]">
//            <Image src="/images3/saman.png" alt="image" width={610} height={241} className="w-[358px] h-[224px] ml-[16px] mt-[30px] lg:w-[610px] lg:h-[241px]"/>
//            <Image src="/images3/alex.png" alt="image" width={610} height={241} className="w-[358px] h-[224px] ml-[16px] mt-[20px] lg:w-[610px] lg:h-[241px] lg:ml-[15px]"/>
//            </div>
//            <div className="lg:flex lg:items-start lg:ml-[100px] lg:mt-[20px]">
//            <Image src="/images3/ethan.png" alt="image" width={610} height={241} className="w-[358px] h-[224px] ml-[16px] mt-[20px] lg:w-[610px] lg:h-[241px] lg:ml-[15px]"/>
//            <Image src="/images3/olivia.png" alt="image" width={610} height={241} className="w-[358px] h-[224px] ml-[16px] mt-[20px] lg:w-[610px] lg:h-[241px] lg:ml-[15px]"/>
//            </div>
//            <div className="lg:flex lg:items-start lg:ml-[100px] lg:mt-[20px]">
//            <Image src="/images3/liam.png" alt="image" width={610} height={241} className="w-[358px] h-[224px] ml-[16px] mt-[20px] lg:w-[610px] lg:h-[241px] lg:ml-[15px]"/>
//            <Image src="/images3/ava.png" alt="image" width={610} height={241} className="w-[358px] h-[224px] ml-[16px] mt-[20px] lg:w-[610px] lg:h-[241px] lg:ml-[15px]"/>
//            </div>
//            <div className="lg:flex lg:justify-center lg:items-center lg:mt-[40px]">
//            <Image src="/images3/load.png" alt="button" width={230} height={52} className="w-[195px] h-[47px] ml-[90px] mt-[20px] lg:w-[230px] lg:h-[52px] lg:ml-[15px]"/>
//            </div>
//            <div className="lg:flex lg:justify-center lg:items-center lg:mt-[30px]">
//            <Image src="/images3/heading.png" alt="heading" width={579} height={58} className="w-[284px] h-[40px] ml-[55px] mt-[50px] lg:w-[579px] lg:h-[58px] lg:ml-[15px]"/>
//            </div>
//            <div className="lg:flex lg:items-start">
//            <Image src="/images3/blue.png" alt="shirt" width={295} height={298} className="w-[220px] h-[200px] ml-[85px] mt-[40px] lg:w-[295px] lg:h-[298px] lg:ml-[100px] lg:mt-[80px]"/>
//            <Image src="/images3/g-pink.png" alt="shirt" width={295} height={298} className="lg:ml-[18px] w-[220px] h-[200px] ml-[85px] mt-[130px] lg:w-[295px] lg:h-[298px] lg:mt-[80px] "/>
//            <Image src="/images3/collar.png" alt="shirt" width={295} height={298} className="lg:ml-[18px] w-[220px] h-[200px] ml-[85px] mt-[130px] lg:w-[295px] lg:h-[298px] lg:mt-[80px]"/>
//            <Image src="/images3/w-strip.png" alt="shirt" width={295} height={298} className="lg:ml-[18px] w-[220px] h-[200px] ml-[85px] mt-[130px] lg:w-[295px] lg:h-[298px] lg:mt-[80px]"/>
//            </div>
//            <div className="lg:flex lg:items-start">
//            <Image src="/images3/text1.png" alt="text" width={228} height={27} className="w-[182px] h-[20px] ml-[85px] mt-[-975px] lg:w-[228px] lg:h-[27px] lg:ml-[100px] lg:mt-[25px]" />
//            <Image src="/images2/grad-sh.png" alt="text" width={227} height={27} className="w-[187px] h-[22px] ml-[85px] mt-[310px] lg:w-[277px] lg:h-[27px] lg:mt-[25px] lg:ml-[80px]"/>
//            <Image src="/images2/polo-sh.png" alt="text" width={231} height={27} className="w-[185px] h-[22px] ml-[85px] mt-[310px] lg:w-[231px] lg:h-[27px] lg:mt-[25px] lg:ml-[50px]"/>
//            <Image src="/images2/black-sh.png" alt="text" width={190} height={27} className="w-[187px] h-[22px] ml-[85px] mt-[310px] lg:w-[190px] lg:h-[27px] lg:mt-[25px] lg:ml-[70px]"/>
//            </div>
//            <div className="lg:flex lg:items-start">
//            <Image src="/images2/star2.png" alt="stars" width={137} height={19} className=" w-[117px] h-[16px] ml-[85px] mt-[-990px] lg:w-[137px] lg:h-[19px] lg:ml-[100px] lg:mt-[10px]"/>
//            <Image src="/images2/star.png" alt="stars" width={126} height={19} className="w-[106px] h-[16px] ml-[85px] mt-[315px] lg:w-[126px] lg:h-[19px] lg:mt-[10px] lg:ml-[170px]"/>
//            <Image src="/images2/stars.png" alt="stars" width={150} height={19} className="w-[120px] h-[16px] ml-[85px] mt-[315px] lg:w-[150px] lg:h-[19px] lg:mt-[10px] lg:ml-[190px]"/>
//            <Image src="/images2/star1.png" alt="stars" width={160} height={19} className="w-[130px] h-[16px] ml-[85px] mt-[315px] lg:w-[160px] lg:h-[19px] lg:mt-[10px] lg:ml-[170px]"/>
//            </div>
//            <div className="lg:flex lg:items-start">
//            <Image src="/images3/$212.png" alt="rates" width={53} height={32} className=" w-[45px] h-[27px] ml-[85px] mt-[-985px] lg:w-[53px] lg:h-[32px] lg:ml-[100px] lg:mt-[10px]"/>
//            <Image src="/images3/$242.png" alt="rates" width={58} height={32} className="w-[45px] h-[27px] ml-[140px] mt-[-25px] lg:w-[58px] lg:h-[32px] lg:mt-[10px] lg:ml-[10px]"/>
//            <Image src="/images3/off.png" alt="rates" width={58} height={32} className="w-[45px] h-[27px] ml-[195px] mt-[-28px] lg:w-[58px] lg:h-[32px] lg:mt-[10px] lg:ml-[10px]"/>
//            <Image src="/images2/rate6.png" alt="rates" width={54} height={32} className="w-[45px] h-[27px] ml-[85px] mt-[305px] lg:w-[54px] lg:h-[32px] lg:mt-[10px] lg:ml-[120px]"/>
//            <Image src="/images2/rate3.png" alt="rates" width={56} height={32} className="w-[45px] h-[27px] ml-[85px] mt-[300px] lg:w-[56px] lg:h-[32px] lg:mt-[10px] lg:ml-[260px]"/>
//            <Image src="/images2/rate1.png" alt="rates" width={188} height={32} className="w-[144px] h-[27px] ml-[85px] mt-[300px] lg:w-[188px] lg:h-[32px] lg:mt-[10px] lg:ml-[265px]"/>
//            </div>
//            <Foot />
//            </div>
//     )
// }export default Detail









{/* <div className="lg:flex">
      <div className="input lg:ml-[100px] lg:mt-[50px]">
            <span  className="search-img">
            <img src="/images/search.png" alt="search" width={21} height={21} className="w-[25px] h-[15px] lg:w-[21px]  lg:h-[21px]"/>
            </span>
            <input placeholder="Search for products.." className="search"/>
          </div> 
          <div className="lg:ml-[420px] lg:mt-[60px] lg:px-[20px] lg:py-[10px] bg-slate-300">
        <button className="">All Categories</button>
        <select id="options" name="options" className="lg:ml-[20px]">
         <option value="1">tshirt</option>
         <option value="2">hoodie</option>
         <option value="3">short</option>
         <option value="3">jeans</option>
          </select>
    </div>
    </div> */}

{/* Filter by Price Range */}
      {/* <div className="mb-4 flex gap-4">
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          placeholder="Min Price"
          className="p-2 border rounded"
        />
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          placeholder="Max Price"
          className="p-2 border rounded"
        />
      </div> */}


    
// categ previous code after casual heading



      {/* <Image src="/images2/white-g.png" alt="shirt" width={295}  height={298} className="w-[172px] h-[174px] ml-[16px] mt-[30px] lg:w-[295px] lg:h-[298px] lg:ml-[-100px] lg:mt-[65px]"/> 
            <Image src="/images2/pink.png" alt="shirt" width={295}  height={298} className="w-[172px] h-[174px] mt-[-175px] ml-[200px] lg:w-[295px] lg:h-[298px] lg:ml-[20px] lg:mt-[65px]"/> 
            <Image src="/images2/white.png" alt="shirt" width={295}  height={298} className="w-[172px] h-[174px]  ml-[16px] mt-[120px] lg:w-[295px] lg:h-[298px] lg:ml-[20px] lg:mt-[65px]"/>   */}
            
            {/* <Image src="/images2/grad-sh.png" alt="text" width={227}  height={27} className="w-[145px] h-[22px] mt-[-280px] ml-[16px] lg:w-[227px] lg:h-[27px] lg:ml-[-920px] lg:mt-[380px]"/>
            <Image src="/images2/polo-sh.png" alt="text" width={231}  height={27} className="w-[145px] h-[22px] mt-[-20px] ml-[200px] lg:w-[227px] lg:h-[27px] lg:ml-[90px] lg:mt-[380px]"/>  
            <Image src="/images2/black-sh.png" alt="text" width={227}  height={27} className="w-[145px] h-[22px] ml-[16px] mt-[265px] lg:w-[227px] lg:h-[27px] lg:ml-[80px] lg:mt-[380px]"/>  */}

            {/* <Image src="/images2/star.png" alt="stars" width={126}  height={19} className="w-[106px] h-[16px] lg:w-[126px] lg:h-[19px] mt-[-285px] ml-[16px] lg:ml-[-850px] lg:mt-[410px]"/> 
            <Image src="/images2/stars.png" alt="stars" width={150}  height={19} className="w-[106px] h-[16px] mt-[-15px] ml-[200px] lg:w-[126px] lg:h-[19px] lg:ml-[190px] lg:mt-[410px]"/>  
            <Image src="/images2/star1.png" alt="stars" width={160}  height={19} className="w-[106px] h-[16px]  ml-[16px] mt-[265px] lg:w-[130px] lg:h-[19px] lg:ml-[180px] lg:mt-[410px]"/>  */}
            
            {/* <Image src="/images2/rate6.png" alt="price" width={54}  height={32} className="w-[34px] h-[27px] ml-[16px] mt-[-275px] lg:w-[54px] lg:h-[32px] lg:ml-[-750px] lg:mt-[440px]"/>  
            <Image src="/images2/rate3.png" alt="price" width={56}  height={32} className="w-[34px] h-[27px] ml-[200px] mt-[-25px] lg:w-[56px] lg:h-[32px] lg:ml-[265px] lg:mt-[440px]"/> 
            <Image src="/images2/rate1.png" alt="price" width={188}  height={32} className="w-[135px] h-[27px]  ml-[16px] mt-[248px] lg:w-[188px] lg:h-[32px] lg:ml-[250px] lg:mt-[435px]"/>  */}
           
            {/* <Image src="/images2/jeans.png" alt="jeans" width={295}  height={298} className="w-[172px] h-[174px] ml-[200px] mt-[-245px] lg:w-[295px] lg:h-[298px] lg:ml-[-820px] lg:mt-[500px]"/> 
            <Image src="/images2/checkered.png" alt="shirt" width={295}  height={298} className="w-[172px] h-[174px] ml-[16px] mt-[100px] lg:w-[295px] lg:h-[298px] lg:ml-[22px] lg:mt-[500px]"/> 
            <Image src="/images2/striped.png" alt="shirt" width={295}  height={298} className="w-[172px] h-[174px] ml-[200px] mt-[-175px] lg:w-[295px] lg:h-[298px] lg:ml-[22px] lg:mt-[500px]"/>   */}
            
            {/* <Image src="/images/fit-jen.png" alt="text" width={150}  height={27} className="w-[120px] h-[22px] ml-[200px] mt-[-262px] lg:w-[150px] lg:h-[27px] lg:ml-[-930px] lg:mt-[820px]"/> 
            <Image src="/images/check-sh.png" alt="text" width={151}  height={27} className="w-[100px] h-[22px]  ml-[16px] mt-[250px] lg:w-[151px] lg:h-[27px] lg:ml-[175px] lg:mt-[820px]"/>  
            <Image src="/images/sleeve-sh.png" alt="text" width={199}  height={27} className="w-[145px] h-[22px]  ml-[200px] mt-[-20px] lg:w-[227px] lg:h-[27px] lg:ml-[160px] lg:mt-[820px]"/> */}
            
            {/* <Image src="/images2/star.png" alt="stars" width={126}  height={19} className="w-[106px] h-[16px]  ml-[200px] mt-[-274px] lg:w-[126px] lg:h-[19px] lg:ml-[-862px] lg:mt-[850px]"/> 
            <Image src="/images2/stars.png" alt="stars" width={150}  height={19} className="w-[106px] h-[16px]  ml-[16px] mt-[260px] lg:w-[150px] lg:h-[19px] lg:ml-[195px] lg:mt-[852px]"/> 
            <Image src="/images2/stars.png" alt="stars" width={150}  height={19} className="w-[106px] h-[16px]  ml-[200px] mt-[-18px] lg:w-[150px] lg:h-[19px] lg:ml-[165px] lg:mt-[850px]"/>  */}
            
            {/* <Image src="/images2/rate2.png" alt="price" width={200}  height={32} className="w-[135px] h-[27px]  ml-[200px] mt-[-275px] lg:w-[200px] lg:h-[32px] lg:ml-[-790px] lg:mt-[870px]"/>
            <Image src="/images2/rate3.png" alt="price" width={56}  height={32} className="w-[34px] h-[27px]  ml-[16px] mt-[255px] lg:w-[56px] lg:h-[32px] lg:ml-[125px] lg:mt-[875px]"/>  
            <Image src="/images2/rate4.png" alt="price" width={189}  height={32} className="w-[135px] h-[27px]  ml-[200px] mt-[-30px] lg:w-[189px] lg:h-[32px] lg:ml-[255px] lg:mt-[870px]"/>  */}
            
            {/* <Image src="/images2/green.png" alt="shirt" width={295}  height={298} className="w-[172px] h-[174px]  ml-[16px] mt-[30px] lg:w-[295px] lg:h-[298px] lg:ml-[-815px] lg:mt-[950px]"/>
            <Image src="/images2/graphic.png" alt="shirt" width={295}  height={298} className="w-[172px] h-[174px] ml-[200px] mt-[-175px] lg:w-[295px] lg:h-[298px] lg:ml-[22px] lg:mt-[950px]"/>
            <Image src="/images2/shorts.png" alt="short" width={295}  height={298} className="w-[172px] h-[174px]  ml-[16px] mt-[120px] lg:w-[295px] lg:h-[298px] lg:ml-[22px] lg:mt-[950px]"/> */}
            
            {/* <Image src="/images/vert-sh.png" alt="text" width={194}  height={27} className="w-[145px] h-[22px]  ml-[16px] mt-[-280px] lg:w-[194px] lg:h-[27px] lg:ml-[-930px] lg:mt-[1270px]"/> 
            <Image src="/images/cour-sh.png" alt="text" width={226}  height={27} className="w-[145px] h-[22px]  ml-[200px] mt-[-20px] lg:w-[226px] lg:h-[27px] lg:ml-[120px] lg:mt-[1270px]"/> 
            <Image src="/images/berm-sho.png" alt="text" width={239}  height={27} className="w-[145px] h-[22px]  ml-[16px] mt-[265px] lg:w-[239px] lg:h-[27px] lg:ml-[100px] lg:mt-[1270px]"/>  */}
            
            {/* <Image src="/images2/star1.png" alt="stars" width={160}  height={19} className="w-[106px] h-[16px]  ml-[16px] mt-[-285px] lg:w-[126px] lg:h-[19px] lg:ml-[-880px] lg:mt-[1300px]"/> 
            <Image src="/images2/Frame 68.png" alt="stars" width={137}  height={19} className="w-[106px] h-[16px]  ml-[200px] mt-[-15px] lg:w-[126px] lg:h-[19px] lg:ml-[190px] lg:mt-[1300px]"/> 
            <Image src="/images2/star3.png" alt="stars" width={113}  height={19} className="w-[106px] h-[16px]  ml-[16px] mt-[275px] lg:w-[126px] lg:h-[19px] lg:ml-[190px] lg:mt-[1305px]"/> */}
            
            {/* <Image src="/images2/rate5.png" alt="price" width={53}  height={32} className="w-[34px] h-[27px]  ml-[16px] mt-[-285px] lg:w-[54px] lg:h-[32px] lg:ml-[-760px] lg:mt-[1330px]"/>
            <Image src="/images2/x-rate.png" alt="price" width={56}  height={32} className="w-[34px] h-[27px]  ml-[55px] mt-[-25px] lg:w-[54px] lg:h-[32px] lg:ml-[10px] lg:mt-[1330px]"/>
            <Image src="/images2/disc.png" alt="price" width={58}  height={28} className="w-[34px] h-[27px]  ml-[95px] mt-[-27px] lg:w-[54px] lg:h-[32px] lg:ml-[10px] lg:mt-[1327px]"/>
            <Image src="/images2/rate6.png" alt="price" width={54}  height={32} className="w-[34px] h-[27px]  ml-[200px] mt-[-24px] lg:w-[54px] lg:h-[32px] lg:ml-[135px] lg:mt-[1330px]"/>
            <Image src="/images2/rate3.png" alt="price" width={47}  height={32} className="w-[34px] h-[27px]  ml-[16px] mt-[260px] lg:w-[54px] lg:h-[32px] lg:ml-[265px] lg:mt-[1330px]"/> */}
            
            {/* <Image src="/images2/Popular.png" alt="text" width={200}  height={16} className="w-[180px] h-[10px] ml-[100px] mt-[-1447px] lg:w-[200px] lg:h-[16px] lg:ml-[-150px] lg:mr-[50px] lg:mt-[50px]"/>  */}








// Previous cart page code


            // import Image from "next/image"
// import Foot from "../Foot/page"
// import Header from "../Head/page"
// import Link from "next/link"

// function Cart(){
//     return(
//         <div className="w-[390px] h-[500px] lg:w-[1440px] lg:h-[1437px]">
//              <Header />
//              <div className="lg:mx-[100px] lg:my-[25px]">
//              <img src="/images4/Line5.png" alt="line" />
//              </div>
//              <div className=" flex gap-2 ml-[16px] mt-[20px] lg:ml-[100px] lg:mt-[25px]">
//              <Link href="./Home">
//              <p className="hover:bg-slate-300 text-gray-500">Home</p>
//              </Link>
//              <img src="./images/arrow.png" />
//              <p>Cart</p>
//              </div>
//             <div >
//             <img src="/images4/your.png" alt="head" className="w-[207px] h-[38px] ml-[16px] mt-[25px] mb-[30px] lg:w-[259px] lg:h-[48px] lg:ml-[100px] lg:mb-[30px]" />
//             </div>
            {/* <div  className="ml-[16px] lg:ml-[100px] lg:flex lg:items-start lg:gap-5">
            <img src="/images4/opts.png" alt="main" className="w-[358px] h-[389px] lg:w-[715px] lg:h-[508px] lg:mt[20px]"/>
            <img src="/images4/order.png" alt="order" className="w-[358px] h-[390px] mt-[20px] lg:w-[505px] lg:h-[458px]" />
            </div> */}
//             <Foot />
//              </div>
//     )
// }export default Cart


// "use client"
// import Foot from "../Foot/page"
// import Header from "../Head/page"
// import Link from "next/link"
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// const CartPage = () => {
//   interface CartItem {
//     productId: string;
//     productImage: string;
//     productName: string;
//     productPrice: number;
//   }
  
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const router = useRouter();

//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
//     setCartItems(savedCart);
//   }, []);

//   const handleRemoveItem = (productId: string) => {
//     const updatedCart = cartItems.filter((item) => item.productId !== productId);
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   return (
    // <div className="w-[390px] h-[500px] lg:w-[1440px] lg:h-[1437px]">
    //     <Header />
    //      <div className="lg:mx-[100px] lg:my-[25px]">
    //      <img src="/images4/Line5.png" alt="line" />
    //      </div>
    //      <div className=" flex gap-2 ml-[16px] mt-[20px] lg:ml-[100px] lg:mt-[25px]">
    //  <Link href="./Home">
    //  <p className="hover:bg-slate-300 text-gray-500">Home</p>
    // </Link>
    // <img src="./images/arrow.png" />
    // <p>Cart</p>
    //  </div>
    //  <div >
    // <img src="/images4/your.png" alt="head" className="w-[207px] h-[38px] ml-[16px] mt-[25px] mb-[30px] lg:w-[259px] lg:h-[48px] lg:ml-[100px] lg:mb-[30px]" />
    //  </div>
// //     <div className="container mx-auto p-4">
// //       {cartItems.length === 0 ? (
//         <p className="text-2xl">Your cart is empty.</p>
//       ) : (
//         <div>
//           {cartItems.map((item) => (
//             <div key={item.productId} className="flex items-center space-x-4 border-b py-4">
//               <img
//                 src={item.productImage}
//                 alt={item.productName}
//                 className="w-24 h-24 object-cover"
//               />
//               <div className="flex-1">
//                 <p className="font-semibold">{item.productName}</p>
//                 <p>${item.productPrice}</p>
//               </div>
//               <button
//                 onClick={() => handleRemoveItem(item.productId)}
//                 className="bg-red-500 text-white px-4 py-2 rounded"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//       <button
//         onClick={() => router.push("/")}
//         className="mt-6 bg-blue-600 text-white px-6 py-2 rounded"
//       >
//         Continue Shopping
//       </button>
//     </div>
//     <Foot />
//      </div>
//   );
// };
