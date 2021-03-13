import React from 'react'
import './Logo.css'

const Logo = ({size}) => {
    return (
        <div className='logo-box'>
            <i style={{fontSize : size}} className="fab fa-neos"></i><span style={{fontSize : size}}>ewsLetter</span>
            {size === '48px' && <h3 className="logo-message">Where News Become Reality</h3>}
        </div>
    )
}

export default Logo
