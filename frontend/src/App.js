import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './components/Home/Home';
import Food from './components/Food/Food';
import Cart from './components/Cart/Cart';
import Detail from './components/Detail/Detail'
import NavBar from './NavBar/NavBar';
import { CardContext } from './Contexts/CardContext'
function App() {
  const [allFoods, setAllFoods] = useState([])
  const [myCart, setMyCart] = useState([{}])
  const [total, setTotal] = useState(0)
  const [quantity, setQuantity] = useState(1)
  useEffect(() => {
    async function getData() {
      const res = await axios.get('/v1/products');
      return res;
    }
    getData().then((res) => setAllFoods(res.data));
    getData().then((err) => console.log(err));
  }, [])
  return (
    <CardContext.Provider value={{myCart, setMyCart, total, setTotal,quantity, setQuantity}}>
    <Router >
      <NavBar />
      <div className='page-container'>
        <Routes>
          <Route path='/' element={<Home allFoods={allFoods} />} />
          <Route path='/food' element={<Food allFoods={allFoods} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/detail/:id' element={<Detail allFoods={allFoods} />} />
        </Routes>
      </div>
    </Router>
    </CardContext.Provider>
  );
}

export default App;
