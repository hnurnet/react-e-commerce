import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className='container-fluid'>
      <div className="row mt-2 min-vh-100">
        <div className="col-9">
          <img src="/images/amazonads.png" alt='Amazon Ads' 
          className='w-100' style={{height: "120px"}}/>
         <div className='mt-2'>
         <h3>Your Shopping Cart</h3>
         <CheckoutProduct/>
         <CheckoutProduct/>
         </div>
        </div>
        <div className="col-3">
          <Subtotal/>

        </div>
      </div>
      
    </div>
  )
}

export default Checkout
