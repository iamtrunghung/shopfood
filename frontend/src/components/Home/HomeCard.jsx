import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { TiShoppingCart } from 'react-icons/ti'
import { CardContext } from '../../Contexts/CardContext'
export default function HomeCard({item}) {
    const [isAdded , setIsAdded] = useState(false)
    const {setMyCart, setTotal} = useContext(CardContext)
    const handleClick = () =>{
      setIsAdded(!isAdded)
      const NewItems = {
        name: item.name,
        price: item.price,
        imageUrl: item.imageUrl
      };
      setMyCart((item) => [...item, NewItems])
      setTotal((total)=> total += item.price)
    }
    return (
      <div className='cart-container' key={item.id} >
        <img src={item.imageUrl} alt={item.name} className="img-food" />
        <h5 className='name-food'><Link to={`/detail/${item.id}`}>{item.name}</Link></h5>
        <p className='des-food'>{item.description}</p>
        <h2 className='price-food'>VNĐ-{item.price}</h2>
        {isAdded ? (
          <button disabled className='btn-add-disabled'><TiShoppingCart className='icon-shopping-disabled' /></button>
        ) : (
          <button className='btn-add' onClick={handleClick}><TiShoppingCart className='icon-shopping' /></button>
        )}
      </div>
)}
