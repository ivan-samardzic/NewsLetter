import React, { useState, useReducer, useEffect } from 'react';
import NewsContext from './newsContext';
import axios from 'axios';

const NewsState = props => {

    const [headlineHomeArticles, setHeadlineHomeArticles] = useState({})
    const [sideHomeArticles, setSideHomeArticles] = useState({})
    const [headlineBusinessArticles, setHeadlineBusinessArticles] = useState({})
    const [sideBusinessArticles, setSideBusinessArticles] = useState({})
    const [headlineHealthArticles, setHeadlineHealthArticles] = useState({})
    const [sideHealthArticles, setSideHealthArticles] = useState({})
    const [headlineMediaArticles, setHeadlineMediaArticles] = useState({})
    const [sideMediaArticles, setSideMediaArticles] = useState({})
    const [headlineScienceArticles, setHeadlineScienceArticles] = useState({})
    const [sideScienceArticles, setSideScienceArticles] = useState({})
    const [headlineSportsArticles, setHeadlineSportsArticles] = useState({})
    const [sideSportsArticles, setSideSportsArticles] = useState({})
    const [headlineTechArticles, setHeadlineTechArticles] = useState({})
    const [sideTechArticles, setSideTechArticles] = useState({})
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

    useEffect(() => {
        setLoading(true);
        const searchHealthArticles = async (count) => {
          const responseSide = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=health&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${count*4}`);
          const responseSideJSON = await responseSide.data;

          const responseHead = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=health&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${count*2}`);
          const responseHeadJSON = await responseHead.data;

          if(responseSideJSON && responseHeadJSON) {
              setHeadlineHealthArticles(responseHeadJSON)
              setSideHealthArticles(responseSideJSON)
              setLoading(false)
          }
        };
        searchHealthArticles(count);
    }, [count])

    useEffect(() => {
        setLoading(true);
        const searchScienceArticles = async (count) => {
          const responseSide = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=science&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${count*4}`);
          const responseSideJSON = await responseSide.data;

          const responseHead = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${count*2}`);
          const responseHeadJSON = await responseHead.data;

          if(responseSideJSON && responseHeadJSON) {
            setHeadlineScienceArticles(responseHeadJSON)
            setSideScienceArticles(responseSideJSON)
            setLoading(false)
          }
        };
        searchScienceArticles(count);
    }, [count])

    useEffect(() => {
        setLoading(true);
        const searchMediaArticles = async (count) => {
          const responseSide = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=entertainment&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${count*4}`);
          const responseSideJSON = await responseSide.data;

          const responseHead = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${count*2}`);
          const responseHeadJSON = await responseHead.data;

          if(responseSideJSON && responseHeadJSON) {
            setHeadlineMediaArticles(responseHeadJSON)
            setSideMediaArticles(responseSideJSON)
            setLoading(false)
          }
        };

        searchMediaArticles(count);
    }, [count])

    useEffect(() => {
        setLoading(true);
        const searchSportsArticles = async (count) => {
          const responseSide = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=sports&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${count*4}`);
          const responseSideJSON = await responseSide.data;

          const responseHead = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${count*2}`);
          const responseHeadJSON = await responseHead.data;

          if(responseSideJSON && responseHeadJSON) {
            setHeadlineSportsArticles(responseHeadJSON)
            setSideSportsArticles(responseSideJSON)
            setLoading(false)
          }
        };
        searchSportsArticles(count);
    }, [count])

    useEffect(() => {
        setLoading(true);
        const searchTechArticles = async (count) => {
          const responseSide = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=technology&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${count*4}`);
          const responseSideJSON = await responseSide.data;

          const responseHead = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${count*2}`);
          const responseHeadJSON = await responseHead.data;

          if(responseSideJSON && responseHeadJSON) {
            setHeadlineTechArticles(responseHeadJSON)
            setSideTechArticles(responseSideJSON)
            setLoading(false)
          }
        };
        searchTechArticles(count);
    }, [count])


    return (
        <NewsContext.Provider 
        value={{
            headlineHomeArticles: headlineHomeArticles,
            sideHomeArticles: sideHomeArticles,
            headlineBusinessArticles: headlineBusinessArticles,
            sideBusinessArticles: sideBusinessArticles,
            headlineHealthArticles: headlineHealthArticles,
            sideHealthArticles: sideHealthArticles,
            headlineMediaArticles: headlineMediaArticles,
            sideMediaArticles: sideMediaArticles,
            headlineScienceArticles: headlineScienceArticles,
            sideScienceArticles: sideScienceArticles,
            headlineSportsArticles: headlineSportsArticles,
            sideSportsArticles: sideSportsArticles,
            headlineTechArticles: headlineTechArticles,
            sideTechArticles: sideTechArticles,
            loading: loading,
            count: count
        }}>
            {props.children}
        </NewsContext.Provider>
    )
}

export default NewsState;