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
    const [homeCount, setHomeCount] = useState(1)
    const [businessCount, setBusinessCount] = useState(1)
    const [healthCount, setHealthCount] = useState(1)
    const [mediaCount, setMediaCount] = useState(1)
    const [scienceCount, setScienceCount] = useState(1)
    const [sportsCount, setSportsCount] = useState(1)
    const [techCount, setTechCount] = useState(1)


    useEffect(() => {
        setLoading(true);
        const searchHomeArticles = async (homeCount) => {
          const responseSide = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=general&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${homeCount*8}`);
          const responseSideJSON = await responseSide.data;

          const responseHead = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${homeCount*4}`);
          const responseHeadJSON = await responseHead.data;

          if(responseSideJSON && responseHeadJSON) {
              setHeadlineHomeArticles(responseHeadJSON)
              setSideHomeArticles(responseSideJSON)
              setLoading(false)
          }
        };

        searchHomeArticles(homeCount);
    }, [homeCount])


    useEffect(() => {
        setLoading(true);
        const searchBusinessArticles = async (businessCount) => {
          const responseSide = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=business&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${businessCount*8}`);
          const responseSideBusinessJSON = await responseSide.data;

          const responseHead = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${businessCount*4}`);
          const responseHeadBusinessJSON = await responseHead.data;

          if(responseSideBusinessJSON && responseHeadBusinessJSON) {
              setHeadlineBusinessArticles(responseHeadBusinessJSON)
              setSideBusinessArticles(responseSideBusinessJSON)
              setLoading(false)
          }
        };

        searchBusinessArticles(businessCount);
    }, [businessCount])

    useEffect(() => {
        setLoading(true);
        const searchHealthArticles = async (healthCount) => {
          const responseSide = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=health&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${healthCount*8}`);
          const responseSideHealthJSON = await responseSide.data;

          const responseHead = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=health&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${healthCount*4}`);
          const responseHeadHealthJSON = await responseHead.data;

          if(responseSideHealthJSON && responseHeadHealthJSON) {
              setHeadlineHealthArticles(responseHeadHealthJSON)
              setSideHealthArticles(responseSideHealthJSON)
              setLoading(false)
          }
        };
        searchHealthArticles(healthCount);
    }, [healthCount])

    useEffect(() => {
        setLoading(true);
        const searchScienceArticles = async (scienceCount) => {
          const responseSide = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=science&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${scienceCount*8}`);
          const responseSideScienceJSON = await responseSide.data;

          const responseHead = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${scienceCount*4}`);
          const responseHeadScienceJSON = await responseHead.data;

          if(responseSideScienceJSON && responseHeadScienceJSON) {
            setHeadlineScienceArticles(responseHeadScienceJSON)
            setSideScienceArticles(responseSideScienceJSON)
            setLoading(false)
          }
        };
        searchScienceArticles(scienceCount);
    }, [scienceCount])

    useEffect(() => {
        setLoading(true);
        const searchMediaArticles = async (mediaCount) => {
          const responseSide = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=entertainment&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${mediaCount*8}`);
          const responseSideMediaJSON = await responseSide.data;

          const responseHead = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${mediaCount*4}`);
          const responseHeadMediaJSON = await responseHead.data;

          if(responseSideMediaJSON && responseHeadMediaJSON) {
            setHeadlineMediaArticles(responseHeadMediaJSON)
            setSideMediaArticles(responseSideMediaJSON)
            setLoading(false)
          }
        };

        searchMediaArticles(mediaCount);
    }, [mediaCount])

    useEffect(() => {
        setLoading(true);
        const searchSportsArticles = async (sportsCount) => {
          const responseSide = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=sports&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${sportsCount*8}`);
          const responseSideSportsJSON = await responseSide.data;

          const responseHead = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${sportsCount*4}`);
          const responseHeadSportsJSON = await responseHead.data;

          if(responseSideSportsJSON && responseHeadSportsJSON) {
            setHeadlineSportsArticles(responseHeadSportsJSON)
            setSideSportsArticles(responseSideSportsJSON)
            setLoading(false)
          }
        };
        searchSportsArticles(sportsCount);
    }, [sportsCount])

    useEffect(() => {
        setLoading(true);
        const searchTechArticles = async (techCount) => {
          const responseSide = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=technology&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${techCount*8}`);
          const responseSideTechJSON = await responseSide.data;

          const responseHead = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=4b39208e6f1d4eb1b50a674762d71892&pageSize=${techCount*4}`);
          const responseHeadTechJSON = await responseHead.data;

          if(responseSideTechJSON && responseHeadTechJSON) {
            setHeadlineTechArticles(responseHeadTechJSON)
            setSideTechArticles(responseSideTechJSON)
            setLoading(false)
          }
        };
        searchTechArticles(techCount);
    }, [techCount])


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
            homeCount: homeCount,
            setHomeCount: setHomeCount,
            businessCount: businessCount,
            setBusinessCount: setBusinessCount,
            healthCount: healthCount,
            setHealthCount: setHealthCount,
            mediaCount: mediaCount,
            setMediaCount, setMediaCount,
            scienceCount: scienceCount,
            setScienceCount: setScienceCount,
            sportsCount: sportsCount,
            setSportsCount: setSportsCount,
            techCount: techCount,
            setTechCount: setTechCount,
        }}>
            {props.children}
        </NewsContext.Provider>
    )
}

export default NewsState;