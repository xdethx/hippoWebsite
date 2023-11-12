import Products from "@/components/Products";
import Title from "@/components/Title";

const getData = async()=>{
    const res = await fetch("https://hippo-api-deths-projects.vercel.app/burners")
  if(!res.ok){
    throw new Error("failed to fetch data");
  }
  return res.json();
  }; 
const Favor = async () => {
    const products = await getData();
   
  return (
    <div>
       < Title title='Get your Favorite Favor'/>
    <Products products={products}/>
    </div>
  )
}

export default Favor

export async function generateMetadata() {
  return {
    title: 'GhostHippo | Celebration Favors category | Gorgeous Handmade Party&Celebration Items',
    keywords: ['personalized favors','favors','party favors','gift favors','kids favors','shower favors','baby shower favors','baptism favors','bulk favors ','Plaster of Paris','Silicone Mold','gift'],
    description: 'Handmade Celebration Favors by Ghosthippo personaziled baby shower favors explore more gorgeous handmade decorative items.'
  }
}