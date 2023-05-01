import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ItemDetail = ({id,image,brand,price,description}) => {
  const navigate = useNavigate()
  return (
    <div> 
      <h1>Detalle del producto</h1>
        <img src=" " alt="" />
        <h2>{brand}</h2>
        <h3>{price}</h3>
        <h3>{description}</h3>
        <button onClick={()=>navigate(-1)}>volver</button>
        
    </div>
  )
}
