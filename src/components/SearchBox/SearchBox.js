import React from 'react'
import { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import './SearchBox.scss'
import axios from 'axios'

const SearchBox = ({history}) => {
    const [query, setQuery] = useState('')
    const [filterArticles, setFilterArticles] = useState({})
    const [loading, setLoading] = useState(true)

    const handleSubmit = (event) => {
        event.preventDefault(); 

        console.log(filterArticles)
        history.push(`/${query}`, {
            filterArticles
        });
        setQuery('');
    }

    useEffect(() => {
        setLoading(true);
        const searchArticles = async (query) => {
          const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=4b39208e6f1d4eb1b50a674762d71892&language=en&sortBy=popularity&pageSize=4`);
          const responseJSON = await response.data;

          if(responseJSON) {
              console.log(loading)
              setFilterArticles(responseJSON)
              setLoading(false)
          }
        };

        searchArticles(query);
    }, [query])

    return (
        <form className="form" onSubmit={(event) => handleSubmit(event)} >
            <input type="text" className="form-control"
            placeholder="Search..." 
            value={query} onChange={(event) => setQuery(event.target.value)}
            />
            <button type="submit" className="btn"></button>
            <i className="fas fa-search"></i>
        </form>
)
}

export default withRouter(SearchBox);
