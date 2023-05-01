
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {products} from '../../asyncMock.js'

const ItemListContainer = ({ greeting }) => {
let productos = products
  
  const { categoryId } = useParams();

if(categoryId == undefined){
  productos = products
}else  {
    let productosFiltrados =[]
  for(let i =0;i<products.length;i++){ 
      if(products[i].category == categoryId){
    productosFiltrados.push(products[i])
      }
      
  }
  productos = productosFiltrados

  
}


  
  return (
    <div className='saludo'>
      <h1>{greeting}</h1>
      {productos.map((product)=>
      <ItemList 
      key={product.id}
      id={product.id} 
      brand={product.brand} 
      price={product.price} 
      category={product.category} 
      description={product.description}/>)}
      {/* <ItemList productos={products}/> */}
      
    </div>
  );
};

export default ItemListContainer;
