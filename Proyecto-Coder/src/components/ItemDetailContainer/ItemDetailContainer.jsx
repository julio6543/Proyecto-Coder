import './ItemDetailContainer.css'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { products } from '../../asyncMock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    
    const { itemId } = useParams()
  
    let producto = products.find((producto)=>producto.id === parseInt(itemId))
    return(
        <div className='ItemDetailContainer'>
          
        {
        
          <ItemDetail
          key={producto.id}
        id={producto.id}
        image={producto.image}
        brand={producto.brand}
        price={producto.price}
        description={producto.description}
      />
    }
        </div>
);
    
}

export default ItemDetailContainer;