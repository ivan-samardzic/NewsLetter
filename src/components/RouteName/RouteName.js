import React from 'react'
import './RouteName.scss'
import { Link } from 'react-router-dom'

const RouteName = ({name}) => {
    return (
        <Link to={`${name}`}>
            <div className='route-name-box'>
                <h3 className='route-name-item'>{name}</h3>
            </div>
        </Link>
    )
}

export default RouteName
