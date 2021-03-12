import React from 'react'
import './Article.css'

const Article = ({article, type}) => {
    if(type === 'headline') {
        return (
            <div className='article-box'>
                <img className="article-poster" src={article.urlToImage} alt="article-poster" />
                <div className="article-details">
                    <div className='article-title'>{article.title}</div>
                    <div className='article-author'>{article.author}</div>
                    <div className='article-description'>{article.description}</div>
                </div>
            </div>
        )
    }
    else if (type === 'side'){
        return (
            <div className='side-box'>
                <img className="side-poster" src={article.urlToImage} alt="side-poster" />
                <div className="side-details">
                    <div className='side-title'>{article.title}</div>
                </div>
            </div>
        )
    }
}

export default Article
