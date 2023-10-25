import Products from "@/components/Products";
import Title from "@/components/Title";

const getData = async()=>{
    const res = await fetch("https://hippo-api.vercel.app/burners")
  if(!res.ok){
    throw new Error("failed to fetch data");
  }
  return res.json();
  }; 
const PhoneCase = async () => {
    const products = await getData();
   
  return (
    <div>
       < Title title='Get your Favorite Home Decoration'/>
    <Products products={products}/>
    </div>
  )
}

export default PhoneCase


export async function generateMetadata() {
  return {
    title: 'GhostHippo | Home Decoration Category | Gorgeous Handmade Decorative Items',
    keywords: ['Incense burners', 'Backflow', 'Incense Holder','Home Decor','home decoration','exterior home decoration','Plaster of Paris','Silicone Mold','gift','statue','bibelot','trinket'],
    description: 'Handmade wonderful statues,bibelots,incense burners,incense holders,candle holders for home decoration,visit to explore more gorgeous handmade decorative items'
  }
}