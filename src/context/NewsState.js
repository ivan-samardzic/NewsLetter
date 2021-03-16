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
              setHeadlineHomeArticles(responseHeadJSON)
              setSideHomeArticles(responseSideJSON)
              setLoading(false)
          }
        };

        searchHomeArticles(count);
    }, [count])


    useEffect(() => {
        setLoading(true);
        const searchBusinessArticles = async (count) => {
          const responseSide = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=business&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${count*4}`);
          const responseSideBusinessJSON = await responseSide.data;

          const responseHead = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${count*2}`);
          const responseHeadBusinessJSON = await responseHead.data;

          if(responseSideBusinessJSON && responseHeadBusinessJSON) {
              setHeadlineBusinessArticles(responseHeadBusinessJSON)
              setSideBusinessArticles(responseSideBusinessJSON)
              setLoading(false)
          }
        };

        searchBusinessArticles(count);
    }, [count])

    useEffect(() => {
        setLoading(true);
        const searchHealthArticles = async (count) => {
          const responseSide = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=health&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${count*4}`);
          const responseSideHealthJSON = await responseSide.data;

          const responseHead = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=health&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${count*2}`);
          const responseHeadHealthJSON = await responseHead.data;

          if(responseSideHealthJSON && responseHeadHealthJSON) {
              setHeadlineHealthArticles(responseHeadHealthJSON)
              setSideHealthArticles(responseSideHealthJSON)
              setLoading(false)
          }
        };
        searchHealthArticles(count);
    }, [count])

    useEffect(() => {
        setLoading(true);
        const searchScienceArticles = async (count) => {
          const responseSide = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=science&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${count*4}`);
          const responseSideScienceJSON = await responseSide.data;

          const responseHead = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${count*2}`);
          const responseHeadScienceJSON = await responseHead.data;

          if(responseSideScienceJSON && responseHeadScienceJSON) {
            setHeadlineScienceArticles(responseHeadScienceJSON)
            setSideScienceArticles(responseSideScienceJSON)
            setLoading(false)
          }
        };
        searchScienceArticles(count);
    }, [count])

    useEffect(() => {
        setLoading(true);
        const searchMediaArticles = async (count) => {
          const responseSide = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=entertainment&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${count*4}`);
          const responseSideMediaJSON = await responseSide.data;

          const responseHead = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${count*2}`);
          const responseHeadMediaJSON = await responseHead.data;

          if(responseSideMediaJSON && responseHeadMediaJSON) {
            setHeadlineMediaArticles(responseHeadMediaJSON)
            setSideMediaArticles(responseSideMediaJSON)
            setLoading(false)
          }
        };

        searchMediaArticles(count);
    }, [count])

    useEffect(() => {
        setLoading(true);
        const searchSportsArticles = async (count) => {
          const responseSide = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=sports&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${count*4}`);
          const responseSideSportsJSON = await responseSide.data;

          const responseHead = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${count*2}`);
          const responseHeadSportsJSON = await responseHead.data;

          if(responseSideSportsJSON && responseHeadSportsJSON) {
            setHeadlineSportsArticles(responseHeadSportsJSON)
            setSideSportsArticles(responseSideSportsJSON)
            setLoading(false)
          }
        };
        searchSportsArticles(count);
    }, [count])

    useEffect(() => {
        setLoading(true);
        const searchTechArticles = async (count) => {
          const responseSide = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=technology&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${count*4}`);
          const responseSideTechJSON = await responseSide.data;

          const responseHead = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${count*2}`);
          const responseHeadTechJSON = await responseHead.data;

          if(responseSideTechJSON && responseHeadTechJSON) {
            setHeadlineTechArticles(responseHeadTechJSON)
            setSideTechArticles(responseSideTechJSON)
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
            count: count,
            setCount: setCount
        }}>
            {props.children}
        </NewsContext.Provider>
    )
}

export default NewsState;