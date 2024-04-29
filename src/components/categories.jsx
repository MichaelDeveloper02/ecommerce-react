import React from 'react'

function Categories() {
  return (
    <section className='categories-section'>
        <div className='title-categories'>
            <h2>
                CATEGORIES
            </h2>
            <p>
                Categories Lorem ipsum dolor sit amet.
            </p>
        </div>
        <div className='categories-container'>
            <div className='categories-item category-main'>
                <button>Men</button>
            </div>
            <div className='categories-item category-secundary'>
                <button>Women</button>
            </div>
            <div className='categories-item subcategories-container'>
                <div className='subcategories accesories'>
                   <button>Accesories</button>

                </div>
                <div className='subcategories subcategories-2'>
                    <button>Sneakers</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Categories