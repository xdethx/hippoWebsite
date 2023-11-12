"use client";


import { usePathname} from 'next/navigation'
import Link from "next/link";
import Image from "next/image";

interface ProductProps{
    _id: number;
    title: string;
    description: string;
    image: string;
    price:number;
    previousPrice:number;
    url:string;
    isNew:boolean;
    category: string;
    brand: string;
  
}

interface Props {
    products: ProductProps[];
     
     
}
const Products = ({products}:Props ) => {
   
    const params = usePathname()
    if(params== '/incense-burners')products= products.filter(item => item?._id >= 4000 && item?._id <= 4999);
    if(params== '/christmas')products= products.filter(item => item?._id >= 5000 && item?._id <= 5999);
    if(params== '/home-decor')products= products.filter(item => item?._id >= 6000 && item?._id <= 6999);
    if(params== '/celebration-favors')products= products.filter(item => item?._id >= 7000 && item?._id <= 7999);
  return ( 
    <div className="h-full ml-20 mr-20 p-5 mb-20 bg-white mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5 rounded-3xl ">
        
     
        {
            products.map((products)=>(
                <Link href={{pathname:"/singleproduct", query:{_id:products._id}}} key={products._id}>
                    <div className="border-[3px] border-gray-300 bg-gray-200 rounded-3xl  overflow-hidden hover:border-gray-950 duration-300 ">
                        <Image src={`${products.image}`} 
                         width={500}
                          height={500}
                           alt="product image"
                           className="w-full h-full object-contain "/>
                           <div className="px-4 pd-2 text-sm flex flex-col gap-1 ">
                            <p className="text-gray-600 font-mono truncate" >{products.title}</p>
                            <p className="font-semibold">${products.price}</p>
                            <div className="flex items-center  justify-end border-t-[1px] -mt-1 border-zinc-600 ">
                                
                                <button className="uppercase  text-xs font-semibold p-1 m-1  hover:text-blue-700 duration-200 ">more info</button>
                            </div>
                           </div>
                    </div>
                </Link>
                
                            ) )
           }
     
      
           
        
        

    </div>
   
  )
}

export default Products