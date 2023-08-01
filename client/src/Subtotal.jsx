import React from 'react'

function Subtotal() {
  return (
    <div className='bg-light p-3'>
      <p>Subtotal (0 items) : $0</p>
      <input type="checkbox" />This order contains a gift
      <button className='btn btn-warning rounded-0 w-100 mt-2'>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
