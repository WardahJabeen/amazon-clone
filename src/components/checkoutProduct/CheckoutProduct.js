import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from '../../StateProvider'

const CheckoutProduct = ({ id, title, rating, price, image }) => {

    const [{ basket }, dispatch] = useStateValue();
    const removeFromButton = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img
                className='image'
                src={image}
                alt=""
            />

            <div className='info'>
                <p className='title'>{title}</p>
                <p className='price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className='rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
                <button onClick={removeFromButton}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
