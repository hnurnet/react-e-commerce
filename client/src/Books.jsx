import React from 'react';
import "./styles.css";

function Books({item}) {
    
  return (
    <div class="card-holder">
  <div class="card">
    <img src={item.img} alt="pc" style={{height: "200px"}}/>
    <h5>{item.title}</h5>
    <p>$ {item.price}</p>
    <a href="#">Add Card </a>
  </div>
</div>
  )
}

export default Books