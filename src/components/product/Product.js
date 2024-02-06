import React from 'react'
import "./Product.css"

const Product = ({ id, title, price, rating, image }) => {
    return (
        <div className='product'>
            <div className='info'>
                <p>{title}</p>
                <p className='price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='rating'>
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))}
                </div>
            </div>
            <img src={image} alt="" />
            <button>Add to button</button>
        </div>
    )
}

export default Product
