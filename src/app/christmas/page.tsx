import Products from "@/components/Products";
import Title from "@/components/Title";

const getData = async()=>{
    const res = await fetch("https://hippo-api-deths-projects.vercel.app/burners")
  if(!res.ok){
    throw new Error("failed to fetch data");
  }
  return res.json();
  }; 
const Christmas = async () => {
    const products = await getData();
   
  return (
    <div>
       < Title title='Get your Favorite Christmas Decoration'/>
    <Products products={products}/>
    </div>
  )
}

export default Christmas


export async function generateMetadata() {
  return {
    title: 'GhostHippo | Christmas Category | Gorgeous Handmade Decorative Items',
    keywords: ['christmas','christmas birthday','christmas decor','women christmas','christmas crafts','funny christmas','christmas ornaments','christmas custom','black christmas','Home Decor','home decoration','exterior home decoration','Plaster of Paris','Silicone Mold','gift','statue','bibelot','trinket'],
    description: 'Hype christmas spirit visit to explore more gorgeous handmade decorative items.do not start holiday decoration before check our products'
  }
}