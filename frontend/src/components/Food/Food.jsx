import React from 'react'
import FoodCart from './FoodCart'
import './food.css'
export default function Food( {allFoods} ) {
  return (
    <div className='food-container'>
      {allFoods.map((food) => {
        return (
            <div className='food-cart'>
                <FoodCart food={food} />
            </div>
        )
      })}
    </div>
  )
}
