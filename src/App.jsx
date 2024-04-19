import { useState } from 'react'
import './App.css'
import 'bootstrap'

// css files all 
import './css/bootstrap.min.css'
import './css/flex-slider.css'
import './css/lightbox.css'
import './css/owl-carousel.css'
import './css/templatemo-hexashop.css'


// Pages 
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import ProductMen from './components/product/men/ProductMen'
import ProductWomen from './components/product/womem/ProductWomen'
import ProductKids from './components/product/kids/ProductKids'
import DetailProduct from './components/detailProdect/DetailProduct'
import SendMessage from './components/sendMessage/SendMessage'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <ProductMen/>
      <ProductWomen/>
      <ProductKids/>
      <DetailProduct/>
      <SendMessage/>
      <Footer/>
    </>
  )
}

// เพิ่มตรงส่วนที่กด Navbar แล้วหน้าจอก็จะเลื่อนไปตำแหน่งที่กำหนดไว้  (เคยทำอยู่ ใช้เป็นตัว scroll ของ react)

export default App
