import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className='product'>
        <div className="product__info">
            <p>The title</p>
            <p className='product__price'>
                <small>$</small>
                <strong>value</strong>
            </p>
            <div className="product__rating">
                <p>stars</p>
            </div>
        </div>
        <img className='item' src="" alt="Product Image" />
        <button>Add to Cart</button>
    </div>
  )
}

export default Product