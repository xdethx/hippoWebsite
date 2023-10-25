import Products from '@/components/Products';
import Title from '@/components/Title';
import Image from 'next/image'

const getData = async()=>{
  const res = await fetch("https://hippo-api.vercel.app/burners")
if(!res.ok){
  throw new Error("failed to fetch data");
}
return res.json();
};  
export default async function Home() {
  const products = await getData();
  
  return (
   <main>
    <div>
   

      
    </div>
    <Title title='Get your Favorite Product'/>
    <Products products={products}/>
   </main>
  )
}
