import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Advert from '../../components/Advert/Advert'
import RouteName from '../../components/RouteName/RouteName'
import ArticlesBox from '../../components/ArticlesBox/ArticlesBox';
import Spinner from '../../components/Spinner/Spinner'
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import axios from 'axios';


const Business = () => {
    const [headlineBusinessArticles, setHeadlineBusinessArticles] = useState({})
    const [sideBusinessArticles, setSideBusinessArticles] = useState({})
    const [loading, setLoading] = useState(true)
    const [count, setCount] = useState(1)

    useEffect(() => {
        setLoading(true);
        const searchBusinessArticles = async (count) => {
          const responseSide = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=business&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${count*4}`);
          const responseSideJSON = await responseSide.data;

          const responseHead = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${count*2}`);
          const responseHeadJSON = await responseHead.data;

          if(responseSideJSON && responseHeadJSON) {
              setHeadlineBusinessArticles(responseHeadJSON)
              setSideBusinessArticles(responseSideJSON)
              setLoading(false)
          }
        };

        searchBusinessArticles(count);
  }, [count])

    return (
        <div className='container-fluid'>
            <Header size='36px' />
            <Advert image='https://static.jutarnji.hr/images/live-multimedia/binary/2018/9/28/17/a1.png' />
            <RouteName name='Business' />
            {loading ? <Spinner /> : <ArticlesBox headlineArticles={headlineBusinessArticles} sideArticles={sideBusinessArticles} />}
            <Button count={count} setCount={setCount} />
            <Footer size='48px' />
        </div>
    )
}

export default Business
