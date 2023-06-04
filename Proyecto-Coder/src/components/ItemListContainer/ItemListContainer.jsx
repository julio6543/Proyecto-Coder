import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../Services/firebase/firebaseConfig';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const collectionRef = categoryId
      ? query(collection(db, 'Items'), where('category', '==', categoryId))
      : collection(db, 'Items');

    getDocs(collectionRef)
      .then(response => {
        const productosAdaptados = response.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(productosAdaptados);
      })
      .catch(error => {
        console.log(error);
      });
  }, [categoryId]);

  return (
    <div className='saludo'>
      <h1>{greeting}</h1>
      {productos.map((product) => (
        <ItemList
          key={product.id}
          id={product.id}
          brand={product.brand}
          price={product.price}
          image={product.image}
          category={product.category}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ItemListContainer;
