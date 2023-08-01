import React from 'react'

function CheckoutProduct() {
  return (
    <div className='d-flex mb-3'>
        <div style={{width: "160px"}}>
            <img src="/images/pc.jpg" alt='PC' className='w-100'/>
        </div>
        <div className="ms-4">
            <h4>Title</h4>
            <span>$12</span>
            <p>⭐⭐⭐</p>
            <button className='btn btn-sm btn-warning rounded-0'>Remove from Cart</button>
        </div>
    </div>
  )
}

export default CheckoutProduct