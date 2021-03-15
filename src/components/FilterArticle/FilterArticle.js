import React from 'react'
import { Link } from 'react-router-dom'
import './FilterArticle.css'

const FilterArticle = ({article}) => {
    return (
        <Link to={article.url}>
            <div className='filter-box'>
                    <img className='filter-poster' src={article.urlToImage} alt='image' />
                    <div className='filter-details'>
                        <div className='filter-title'>{article.title}</div>
                        <div className='filter-description'>{article.description}</div>
                    </div>
            </div>
        </Link>
    )
}

export default FilterArticle
