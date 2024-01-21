import React from 'react'
import Navbar from './Components/Navbar/Navbar'
// import Product from './Components/Products/Product'
import ProductsList from './Components/Products/productList'
// import ProductDetailsPopup from './Components/ProductDetails/ProductDetailsPopup'
// import PaymentPage from './Components/payment/PaymentPage';

const App = () => {
  return (
    <>
      <Navbar/>
      <ProductsList/>
      {/* <Route exact path='/' element={<PaymentPage/>}/> */}
      {/* <Route exact path='/' element={<ProductsList/>}/> */}
      {/* <ProductDetailsPopup/> */}
    </>
  )
}

export default App
