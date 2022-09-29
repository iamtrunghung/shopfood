import React from 'react'
import{ Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import './home.css'
import HomeCard from './HomeCard'
export default function Home({allFoods}) {
  return (
    <>
        <Carousel style={{width:'100%'}}>
      <div>
        <img src="https://burgerking.vn/media/banner/image//a/r/artboard_1.jpg" alt='' />
      </div>
      <div>
        <img src="https://burgerking.vn/media/banner/image//t/r/trang_ch_.jpg" alt='' />
      </div>
      <div>
        <img src="https://burgerking.vn/media/banner/image//h/o/home.jpg" alt='' />
      </div>
      <div>
        <img src="https://burgerking.vn/media/banner/image//b/a/banner-web-trang-chu_1__3.jpg" alt='' />
      </div>
      <div>
        <img src="https://burgerking.vn/media/banner/image//b/a/banner-web-trang-chu-2.jpg" alt='' />
      </div>
      <div>
        <img src="https://burgerking.vn/media/banner/image//b/a/banner-web-trang-chu_1__1.jpg" alt='' />
      </div>
    </Carousel>

    <div className="home-container">
      {allFoods.map((item)=>{
          return(
            <HomeCard item={item} />
          )
      })}
    </div>

    <div className="footer-container">
        <div className="copy-right">
          <h5>Copyright 2015 Burger King Corporation.All Rights Reserved.</h5>
          <p>Designed by Levinci Group</p>
        </div>
        <ul className="contact">
            <li>
              <Link to='/'>About us</Link>
            </li>
            <li>
              <Link to='/'>Instruction</Link>
            </li>
            <li>
              <Link to='/'>Contact</Link>
            </li>
            <li>
              <Link to='/'>Recruit</Link>
            </li>
        </ul>
    </div>
    </>

  )
}
