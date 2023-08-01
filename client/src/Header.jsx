import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="container-fluid">
              <Link to="/" className='text-decoration-none d-flex'>
              <i className='bi bi-shop-window fs-4 text-warning me-2'></i><a className="navbar-brand" href="#">eShop</a>
              </Link>
              <div className="input-group">
              <input type="text" className="form-control rounded-0" placeholder="Search . . ." aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <div className="input-group-append bg-warning">
              <span className="input-group-text bg-warning" id="basic-addon2"><i className='bi bi-search'></i></span>
  </div>
</div>
              <ul className="navbar-nav me-auto mt-2 ms-2 mt-lg-0">
                  <li className="nav-item">
                      <a className="nav-link active d-flex flex-column" href="#" aria-current="page">
                       <small style={{fontSize: "10px"}}>Hello</small>
                       <strong style={{fontSize: "11px"}}>Guest</strong>
                        </a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link active d-flex flex-column" href="#" aria-current="page">
                  <small style={{fontSize: "10px"}}>Your</small>
                       <strong style={{fontSize: "11px"}}>Shop</strong>
                        </a>
                  </li>
                  <li className="nav-item">
                  <Link to="/checkout" className="nav-link active d-flex" aria-current="page">
                      
                       <i className='bi bi-basket2 text-white me-2 fs-5'></i>
                       <span className='mt-1'>0</span>
                        </Link>
                  </li>
                 
              </ul>
              
          </div>
      </nav>
    </div>
  )
}

export default Header
