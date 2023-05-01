import { Link } from 'react-router-dom';
import './Item.css';

const formatPrice = (price) => {
  return price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' }).replace(",00", "");
};


const Item = ({id, category, brand, price, image, cuota}) => {
  return (
    <article className='CardItem'>
      <header className='Header'>
  
      </header>
      <picture>
        <img src={image} alt={category} className='ItemImg' />
      </picture>
      <section>
        <p className="brand">
          {brand}
        </p>
        <p className="price">
        {formatPrice(price)}
        </p>
        <p className="couta">
        {cuota}
        </p>
        
      </section>
      <footer className="ItemFooter">
        <Link to={`/item/${id}`} className="option">Ver detalle</Link>
      </footer>
    </article>
  )
}

export default Item;