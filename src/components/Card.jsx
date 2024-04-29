import React from 'react'

function Card() {
  return (
    <section className='cards'>
        <div className='card-container'>
            <div className='card-item'>
                <div className='card-icon'>
                    <span><i class="fa-solid fa-credit-card"></i></span>
                </div>
                <div className='card-text'>
                    <h3 className='card-tittle'>tittle</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className='card-item'>
                <div className='card-icon'>
                 <span><i class="fa-solid fa-truck-fast"></i></span>
                </div>
                <div className='card-text'>
                    <h3 className='card-tittle'>tittle</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className='card-item card-item-last'>
                <div className='card-icon'>
                    <span><i class="fa-solid fa-phone"></i></span>
                </div>
                <div className='card-text '>
                    <h3 className='card-tittle'>tittle</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Card