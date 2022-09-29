import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { TiShoppingCart } from 'react-icons/ti'
import { CardContext } from '../../Contexts/CardContext'
export default function FoodCart({ food }) {
  const [isAdded , setIsAdded] = useState(false)
  const {setMyCart, setTotal} = useContext(CardContext)
  const handleClick = () =>{
    setIsAdded(!isAdded)
    const NewItems = {
      name: food.name,
      price: food.price,
      imageUrl: food.imageUrl
    };
    setMyCart((item) => [...item, NewItems])
    setTotal((total)=> total += food.price)
  }
  return (
    <div className='cart-container' key={food.id} >
      <img src={food.imageUrl} alt={food.name} className="img-food" />
      <h5 className='name-food'><Link to={`/detail/${food.id}`}>{food.name}</Link></h5>
      <p className='des-food'>{food.description}</p>
      <h2 className='price-food'>VNĐ-{food.price}</h2>
      {isAdded ? (
        <button disabled className='btn-add-disabled'><TiShoppingCart className='icon-shopping-disabled' /></button>
      ) : (
        <button className='btn-add' onClick={handleClick}><TiShoppingCart className='icon-shopping' /></button>
      )}
    </div>
  )
}
