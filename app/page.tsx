// import { client } from "@/sanity/lib/client"
import "./style/home.css"
import Home from "./Home/page"
// import product from "@/sanity/schemaTypes/product";
// import { Product } from "./types/page";


// async function Page(){
//    const query = ` *[_type == "product"][3..10]
//   {
//      _id,
//      name,
//      price,
//      description,
//      category,
//      discountPercent,
//      "imageUrl":image.asset->url
//  };`

//   const products:Product[] = await client.fetch(query)
//   console.log(products);

//   return(
//   <div className="main">
//     {
//     products.map((product:Product) => (
//        <Home product={product}  key={product._id}/>
//     ))}




    
    // <Home />
 
  // </div>)
function Page(){
  return(
    <div className="main">
      <Home />
    </div>
  )
 }
 export default Page
