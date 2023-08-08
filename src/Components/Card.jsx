import React from 'react'

const Card = ({producto}) => {
  return (
    <div className='Card'>
         <img src={producto.image} alt="" className='Card-image' />,
          <h3>{producto.nome}</h3>,
          <h3>{producto.preco}</h3>
      
    </div>
  )
}

export default Card;
