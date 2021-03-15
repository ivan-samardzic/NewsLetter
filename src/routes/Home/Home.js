import React from 'react'
import { useState, useEffect} from 'react'
import Header from '../../components/Header/Header'
import Advert from '../../components/Advert/Advert'
import RouteName from '../../components/RouteName/RouteName'
import ArticlesBox from '../../components/ArticlesBox/ArticlesBox';
import Spinner from '../../components/Spinner/Spinner'
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import axios from 'axios';

const Home = () => {

    const [headlineHomeArticles, setHeadlineHomeArticles] = useState({})
    const [sideHomeArticles, setSideHomeArticles] = useState({})
    const [loading, setLoading] = useState(true)
    const [count, setCount] = useState(1)
  
    useEffect(() => {
          setLoading(true);
          const searchHomeArticles = async (count) => {
            const responseSide = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=general&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${count*4}`);
            const responseSideJSON = await responseSide.data;
  
            const responseHead = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${count*2}`);
            const responseHeadJSON = await responseHead.data;
  
            if(responseSideJSON && responseHeadJSON) {
                console.log(loading)
                setHeadlineHomeArticles(responseHeadJSON)
                setSideHomeArticles(responseSideJSON)
                setLoading(false)
            }
          };
  
          searchHomeArticles(count);
          console.log(sideArticles)
          console.log(loading)
          console.log(count)
    }, [count])
  
    return (
        <div className='container-fluid'>
            <Header size='36px' />
            <Advert image='https://static.jutarnji.hr/images/live-multimedia/binary/2018/9/28/17/a1.png' />
            <RouteName name='Home' />
            {loading ? <Spinner /> : <ArticlesBox headlineArticles={headlineHomeArticles} sideArticles={sideHomeArticles} />}
            <Button count={count} setCount={setCount} />
            <Footer size='48px' />
        </div>
    )
}

export default Home
