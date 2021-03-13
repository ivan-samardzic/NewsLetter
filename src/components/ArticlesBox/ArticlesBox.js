import React from 'react'
import './ArticlesBox.css'
import Article from '../Article/Article'

const ArticlesBox = ({headlineArticles, sideArticles}) => {
    return (
    <div className='articles-box'>
        <div className='headlines-box'>
            {headlineArticles.articles.map((article,index) => (
                <Article key={article.source.id} article={article} type='headline' />
            ))}
        </div>
        <div className='side-box'>
            {sideArticles.articles.map((article,index) => (
                <Article key={article.source.id} article={article} type='side' />
            ))}
        </div>
    </div>
    ) 
}

export default ArticlesBox
