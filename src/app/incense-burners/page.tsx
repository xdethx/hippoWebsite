import Products from "@/components/Products";
import Title from "@/components/Title";

const getData = async()=>{
    const res = await fetch("https://hippo-api-deths-projects.vercel.app/burners")
  if(!res.ok){
    throw new Error("failed to fetch data");
  }
  return res.json();
  }; 
const burner = async () => {
    const products = await getData();
   
  return (
    <div>
       < Title title='Get your Favorite Incense burner'/>
    <Products products={products}/>
    </div>
  )
}

export default burner


export async function generateMetadata() {
  return {
    title: 'GhostHippo | Incense burners | gorgeous handmade decorative items',
    keywords: ['Incense burners', 'Backflow', 'Incense Holder','Home Decor','Plaster of Paris','Silicone Mold','Gnome','gift'],
    description: 'Handmade wonderful incense burners,incense holders,candle holders for home decoration,visit to explore more gorgeous handmade decorative items'
  }
}