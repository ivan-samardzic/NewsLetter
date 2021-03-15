import React from 'react'
import { Link } from 'react-router-dom'
import './Article.css'

const Article = ({article, type}) => {
    if(type === 'headline') {
        return (
            <Link to={article.url}>
                <div className='article-box'>
                    <img className="article-poster" src={article.urlToImage} alt="article-poster" />
                    <div className="article-details">
                        <div className='article-title'>{article.title}</div>
                        <div className='article-author'>{article.author}</div>
                        <div className='article-description'>{article.description}</div>
                    </div>
                </div>
            </Link>
        )
    }
    else if (type === 'side'){
        return (
            <Link to={article.url}>
                <div className='side-box'>
                    <img className="side-poster" src={article.urlToImage} alt="side-poster" />
                    <div className="side-details">
                        <div className='side-title'>{article.title}</div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default Article
