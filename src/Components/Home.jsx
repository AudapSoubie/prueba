import Card from "./Card";
import {productos} from "./App";
const Home = () => {
    
    return (
     
      <div>
        {productos.map(producto,indice => {
            <Card producto={producto} key ={indice}/>
         
        })} 
      </div>
    )
  }
  
  export default Home;
  