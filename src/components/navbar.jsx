import React from 'react'

function Navbar() {
  return (
    <>
    <nav>
        <div className='logo'>
            <span>E-commerce</span>
        </div>

        <div className='navlist-container'>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Tienda</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </div>

        <div className='account-container'>
            <div className='cart-shopping'>
                <span><i class="fa-solid fa-cart-shopping"></i></span>
            </div>
            <div className='account-icon'>
                <span><i class="fa-solid fa-user"></i></span>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar