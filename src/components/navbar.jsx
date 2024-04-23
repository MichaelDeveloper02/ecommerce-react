import React from 'react'

function Navbar() {
  return (
    <>
    <nav>
        <div className='Logo'>
            <span>Ecommerce</span>
        </div>

        <div className='navlist-container'>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Home</a>
                </li>
            </ul>
        </div>

        <div className='account-container'>
            <div>
                <span>*</span>
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