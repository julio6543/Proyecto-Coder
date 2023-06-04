import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from "../../Services/firebase/firebaseConfig";
import { collection, doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { itemId } = useParams();

  useEffect(()=>{

    const coleccionProd = collection(db, "Items")

    const referenciaDoc = doc(coleccionProd, itemId)

    getDoc(referenciaDoc)
    .then((result)=>{
      setProduct({
        id:result.id,
        ...result.data()
      })
    })
    .catch((error)=> console.log(error))
  }, [itemId])

  console.log(product);

  return (
    <div className='ItemDetailContainer'>
      <ItemDetail
        key={product.id}
        id={product.id}
        category={product.category}
        image={product.image}
        brand={product.brand}
        price={product.price}
        description={product.description}
      />
    </div>
  );
};

export default ItemDetailContainer;
