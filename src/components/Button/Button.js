import React from 'react'

const Button = ({count, setCount}) => {
    return (
        <button className='btn btn-block btn-dark' onClick={() => setCount(count + 1)}>Load More</button>
    )
}

export default Button
