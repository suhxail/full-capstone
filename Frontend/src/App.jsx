import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './Components/SignUp'
import SignIn from './Components/SignIn'
import ProductList from './Pages/ProductList'
import GoldRateCalculator from './Pages/GoldRateCalculator';
import Dashboard from './Pages/Dashboard'
import EditProfile from './Pages/EditProfile'



const jewelData = [
  {
    id: "1",
    img: "https://media.istockphoto.com/id/1277517088/photo/fancy-designer-antique-golden-bracelets-for-woman-fashion.webp?b=1&s=170667a&w=0&k=20&c=9w8C8EPDigmpXsaGAiJ4DAfG4nzd8p7jPYBgLRVT6gI=",
    productName: "Bangle",
    productWeight: "11 grams",
    wastage: "1.37"
  },
  {
    id: "2",
    img: "https://media.istockphoto.com/id/1193254381/photo/indian-jewellery-necklace.jpg?s=612x612&w=0&k=20&c=MjshmVTxUDD8HlZnj0KlSaM4GfGmLZEVSWUAQDuMaB8=",
    productName: "Necklace",
    productWeight: "15 grams",
    wastage: "1.87"
  },
  {
    id: "3",
    img: "https://media.istockphoto.com/id/1133525210/photo/pair-of-fancy-golden-designer-earrings-closeup-macro-image-on-red-background.jpg?s=612x612&w=0&k=20&c=ZUknXtyeMhsS9Tdd2nRt8DkOTHc-6tmeG-KdTV_ODLU=",
    productName: "Ear Rings",
    productWeight: "3.35 grams",
    wastage: "0.41"
  },
  {
    id: "4",
    img: "https://5.imimg.com/data5/SELLER/Default/2022/9/XA/KK/HW/36933883/gold-women-rings.JPG",
    productName: " Finger Ring",
    productWeight: "2.4 grams",
    wastage: "0.3"
  },
  {
    id: "5",
    img: "https://img.freepik.com/premium-photo/gold-bracelet-with-butterflies-diamond-pink-background-romantic-jewelry-advertising-still-life-product_329479-1088.jpg?w=2000",
    productName: "Bracelet",
    productWeight: "3.7 grams",
    wastage: "0.46"

  },
  {
    id: "6",
    img: "https://media.istockphoto.com/id/1220738671/photo/gold-bars-and-bitcoin-cryptocurrency-financial.jpg?s=612x612&w=0&k=20&c=Qm9NW38fb6UM3Kiup-B4pho02guKS1__aee_5zzOxvk=",
    productName: "Gold coin",
    productWeight: "4.9 grams",
    wastage: "0.61"
  },
  {
    id: "7",
    img: "https://shop.swarna.com/wp-content/uploads/sites/133/2022/01/NQ6619_1.jpg",
    productName: "Pendants",
    productWeight: "1.2 grams",
    wastage: "0.15"
  },
  {
    id: "8",
    img: "https://bhimajewellery.com/wp-content/uploads/2023/02/Cover-image.jpg",
    productName: "Mangal Sutra",
    productWeight: "6.7 grams",
    wastage: "0.83"
  },

]



function App() {
  return (

    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/productlist' element={<ProductList jewelData={jewelData} />} />
          <Route path='/calculator' element={<GoldRateCalculator />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/editprofile' element={<EditProfile />} />
        </Routes>
      </div>
    </BrowserRouter>






  )
}
export default App