import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CardContext } from '../../Contexts/CardContext'
import './cart.css'
export default function Cart() {
  const { myCart, total, setTotal,setMyCart } = useContext(CardContext)
  const navigate = useNavigate()
  const handleCheckout = ()=>{
    setTotal(0);
    setMyCart([{}])
  }
  const handleReturn = ()=>{
    navigate("/")
  }
  return (
    <section className="shopping-container">
      <div className="cart-header">CHECKOUT</div>
      <div className="cart-total">TỔNG TIỀN: VNĐ-{total}</div>
      <div className="cart-items">
        {myCart.slice(1).map((item) => {
          return (
            <div className='cart-item' key={item.id}>
              <img src={item.imageUrl} className='cart-item-img' alt={item.name} />
              <div className='cart-item-column'>
                <h5>{item.name}</h5><br />
                <h2>VNĐ-{item.price}</h2>
              </div>
            </div>
          )
        })}
      </div>
      <button onClick={handleCheckout} className="checkout">DONE</button>
      <br />
      <button onClick={handleReturn} className="return-home">RETURN HOME</button>
    </section>
  )
}
