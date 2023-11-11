


import { getSingleProduct } from '@/helpers'
import Link from "next/link";








 type Props ={
    searchParams:{[key:string]:string|string[] | undefined }
 }
const SingleProduct = async ({searchParams }:Props) => {

  

    const _idString = searchParams?._id
    const _id = Number(_idString);
    const product = await getSingleProduct(_id)
  

  return (
   

   <div className='  bg-white p-5  mt-20  mb-20 flex flex-col item-center rounded-3xl  md:flex-row md:w-100%  '>
      
   
      
      <img  className="object-contain  w-100% h-[600px] min-h-[400px] "   src={product?.image}  alt="slides" />
      
    
        
           <div className=' pl-2 flex flex-col   '>
           
           <p className='text-xl font-semibold mb-4 '>{product?.title}</p>
            <p className="font-sans text-left text-clip mb-3 b-[1px] border-r-zinc-100">Description: {product?.description}</p>
            <p className="font-sans" ><span className="font-bold ">Price:</span>${product?.price}</p>
           
            <p className="font-sans"><span className="font-bold ">Set Price:</span>${product?.setPrice}</p>
            <p className="font-sans" ><span className="font-bold ">Category:</span>{product?.category}</p>
            <p className="font-sans" ><span className="font-bold ">Materials:</span>{product?.Materials}</p>
            <button className=" h-10 w-40 mt-1 rounded-3xl font-semibold bg-red-300 justify-end hover:bg-gray-300 hover:text-xl duration-300" ><Link href={`${product?.url}`} >Visit On Etsy</Link> </button> 
            
           </div>
           
    </div>
   


    
 
  )
}

export default SingleProduct

