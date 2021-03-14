import React from 'react'
import FilterArticle  from '../FilterArticle/FilterArticle'
import './FilterArticlesBox.css'

const FilterArticlesBox = ({filterArticles}) => {
    return (
        <div className='filters-box'>
            {filterArticles.articles.map((article,index) => (
                <FilterArticle key={article.source.id} article={article} />
            ))}
        </div>
    )
}

export default FilterArticlesBox
