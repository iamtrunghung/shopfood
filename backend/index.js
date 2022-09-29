const express = require('express');
const app = express();

const products =[
    {
        id:1,
        name:"POTATO CHIPS BURGER",
        price: 530,
        description: 'POTATO CHIPS BURGER',
        imageUrl: 'https://burgerking.vn/media/catalog/product/cache/1/small_image/316x/9df78eab33525d08d6e5fb8d27136e95/1/5/15-burger-g_-n_ng_1.jpg',
    },
    {
        id:2,
        name:"CHEESE BURGER",
        price: 490,
        description: 'MAIN COURSE : 1 CHEESE BURGER',
        imageUrl: 'https://burgerking.vn/media/catalog/product/cache/1/small_image/316x/9df78eab33525d08d6e5fb8d27136e95/8/-/8-burger-b_-ph_-mai.jpg',
    },
    {
        id:3,
        name:"TENDERGRILL BURGER",
        price: 690,
        description: 'MAIN COURSE : 1 TENDERGRILL BURGER',
        imageUrl: 'https://burgerking.vn/media/catalog/product/cache/1/small_image/316x/9df78eab33525d08d6e5fb8d27136e95/8/-/8-burger-b_-ph_-mai.jpg',
    },
    {
        id:4,
        name:"SPICY TENDERCRISP BURGER",
        price: 690,
        description: 'MAIN COURSE : 1 SPICY TENDERCRISP BURGER',
        imageUrl: 'https://burgerking.vn/media/catalog/product/cache/3/small_image/316x/9df78eab33525d08d6e5fb8d27136e95/1/4/14-burger-g_-gi_n-cay_1.jpg',
    },
    {
        id:5,
        name:"FISH BURGER",
        price: 460,
        description: 'FISH BURGER',
        imageUrl: 'https://burgerking.vn/media/catalog/product/cache/3/small_image/316x/9df78eab33525d08d6e5fb8d27136e95/6/-/6-burger-ca.jpg',
    },
    {
        id:6,
        name:"EXTREME CHEESY WHOPPER",
        price: 1190,
        description: 'WHOPPER Bò Tắm Phô Mai size lớn bánh lẻ',
        imageUrl: 'https://burgerking.vn/media/catalog/product/cache/3/small_image/316x/9df78eab33525d08d6e5fb8d27136e95/9/-/9-whopper-jr-b_-t_m-ph_-mai-c_-v_a.jpg',
    },
]
app.get('/v1/products', (req, res) => {
    res.status(200).json(products);
})
app.listen("3001",()=>{
    console.log("Listening on port 3001");
});