
import { useNavigate, useParams } from 'react-router-dom';
import './ItemList.css'

const ItemList = ({id,brand,price,category,description,Image}) => {
  
    
  
  const navigate = useNavigate()
  
    return (
      
      <div className='itemlist-container'>
        <div className='itemlist'>
        <h1>{brand}</h1>
        <h2>{Image}</h2>
        <h4>{category}</h4>
        <h3>{description}</h3>
        <h6>{price}</h6>
        <button onClick={() => navigate(`/item/${id}`)} className="details-button">
          Detalles
        </button>
        </div >
      </div>
    );
  };
  
  export default ItemList;