import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CardContext } from '../../Contexts/CardContext'
import './detail.css'
export default function Detail({ allFoods }) {
  const {id} = useParams()
  const {quantity, setQuantity} = useContext(CardContext)
  const thisFood = allFoods.find(item => item.id === Number(id))
  const handleIncrese = ()=>{
    if(quantity < 100)
    {
      setQuantity(prevCount => prevCount + 1)
    }
  }
  const handleDecrese = () =>{
    if(quantity > 1)
    {
      setQuantity(prevCount => prevCount - 1)
    }
  }
  return (
    <div className='detail-food'>
        <img src={thisFood.imageUrl} alt={thisFood.name} />
        <div className="detail-content">
          <h5>{thisFood.name}</h5>
          <p>{thisFood.description}</p>
          <h2>VNĐ-{thisFood.price}</h2>
          <button className='btn-plus' onClick={handleIncrese}>+</button>
          <button className='btn-quantity'>{quantity}</button>
          <button className='btn-minus' onClick={handleDecrese}>-</button>
          <br />
          <button className='add-to-cart'>Add to Cart</button>
          <br />
          <div className="go-back" style={{marginTop:'10px',fontSize:'13px'}}>
            <Link to='/'>Go Back</Link>
          </div>
        </div>
    </div>
  )
}
