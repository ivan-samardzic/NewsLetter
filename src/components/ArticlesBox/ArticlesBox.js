import React from 'react'
import './ArticlesBox.css'
import Article from '../Article/Article'

const ArticlesBox = ({headlineArticles, sideArticles}) => {
    console.log(headlineArticles);

    return (
        <div className='articles-box'>
            <div className='headlines-box'>
                {headlineArticles.articles.map((article,index) => 
                    <Article article={article} type='headline' />
                )}
            </div>
            <div className='side-box'>
                {sideArticles.articles.map((article,index) => 
                    <Article article={article} type='side' />
                )}
            </div>
        </div>
    ) 
}

export default ArticlesBox
