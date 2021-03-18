import React from 'react'
import { Link } from 'react-router-dom'
import './Article.scss'

const Article = ({article, type}) => {
    if(type === 'headline') {
        return (
            <div className='article-box'>
                <img className="article-poster" src={article.urlToImage} alt="article-poster" />
                <div className="article-details">
                    <div className='article-title'>{article.title}</div>
                    <div className='article-author'>{article.author}</div>
                    <div className='article-description'>{article.description}</div>
                    <button className='btn'><a href={article.url}>More</a></button>
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
                        <button className='btn'><a href={article.url}>More</a></button>
                    </div>
                </div>
        )
    }
}

export default Article
