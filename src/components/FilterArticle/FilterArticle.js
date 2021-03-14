import React from 'react'
import './FilterArticle.css'

const FilterArticle = ({article}) => {
    return (
        <div className='filter-box'>
                <img className='filter-poster' src={article.urlToImage} alt='image' />
                <div className='filter-details'>
                    <div className='filter-title'>{article.title}</div>
                    <div className='filter-description'>{article.description}</div>
                </div>
        </div>
    )
}

export default FilterArticle
