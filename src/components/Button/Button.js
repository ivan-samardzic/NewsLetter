import React from 'react'
import './Button.scss'

const Button = ({count, setCount}) => {
    return (
        <div className='button-box'>
            <button className='btn btn-dark' onClick={() => setCount(count + 1)}>Load More</button>
        </div>
        
    )
}

export default Button
