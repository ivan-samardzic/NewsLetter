import React, { useState, useReducer, useEffect } from 'react';
import NewsContext from './newsContext';
import axios from 'axios';

const api_key = '4b39208e6f1d4eb1b50a674762d71892';

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
        setLoading(true)
        const searchHomeArticles = async(homeCount) => {

            const responseSideHome = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=general&apiKey=${api_key}&pageSize=${homeCount*8}`);
            const responseSideHomeJSON = await responseSideHome.data;

            const responseHeadHome = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${api_key}&pageSize=${homeCount*4}`);
            const responseHeadHomeJSON = await responseHeadHome.data;

            if (responseSideHomeJSON && responseHeadHomeJSON) {
                setHeadlineHomeArticles(responseHeadHomeJSON)
                setSideHomeArticles(responseSideHomeJSON)
                setLoading(false)
            }
        };

        searchHomeArticles(homeCount);
    }, [homeCount])


    useEffect(() => {
        setLoading(true)
        const searchBusinessArticles = async(businessCount) => {
            const responseSideBusiness = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=business&apiKey=${api_key}&pageSize=${businessCount*8}`);
            const responseSideBusinessJSON = await responseSideBusiness.data;

            const responseHeadBusiness = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${api_key}&pageSize=${businessCount*4}`);
            const responseHeadBusinessJSON = await responseHeadBusiness.data;

            if (responseSideBusinessJSON && responseHeadBusinessJSON) {
                setHeadlineBusinessArticles(responseHeadBusinessJSON)
                setSideBusinessArticles(responseSideBusinessJSON)
                setLoading(false)
            }
        };
        searchBusinessArticles(businessCount);
    }, [businessCount])

    useEffect(() => {
        setLoading(true);
        const searchHealthArticles = async(healthCount) => {

            const responseSideHealth = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=health&apiKey=${api_key}&pageSize=${healthCount*8}`);
            const responseSideHealthJSON = await responseSideHealth.data;

            const responseHeadHealth = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=health&apiKey=${api_key}&pageSize=${healthCount*4}`);
            const responseHeadHealthJSON = await responseHeadHealth.data;

            if (responseSideHealthJSON && responseHeadHealthJSON) {
                setHeadlineHealthArticles(responseHeadHealthJSON)
                setSideHealthArticles(responseSideHealthJSON)
                setLoading(false)
            }
        };
        searchHealthArticles(healthCount);
    }, [healthCount])

    useEffect(() => {
        const searchScienceArticles = async(scienceCount) => {
            setLoading(true);
            const responseSideScience = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=science&apiKey=${api_key}&pageSize=${scienceCount*8}`);
            const responseSideScienceJSON = await responseSideScience.data;

            const responseHeadScience = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${api_key}&pageSize=${scienceCount*4}`);
            const responseHeadScienceJSON = await responseHeadScience.data;

            if (responseSideScienceJSON && responseHeadScienceJSON) {
                setHeadlineScienceArticles(responseHeadScienceJSON)
                setSideScienceArticles(responseSideScienceJSON)
                setLoading(false)
            }
        };
        searchScienceArticles(scienceCount);
    }, [scienceCount])

    useEffect(() => {
        const searchMediaArticles = async(mediaCount) => {
            setLoading(true);
            const responseSideMedia = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=entertainment&apiKey=${api_key}&pageSize=${mediaCount*8}`);
            const responseSideMediaJSON = await responseSideMedia.data;

            const responseHeadMedia = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${api_key}&pageSize=${mediaCount*4}`);
            const responseHeadMediaJSON = await responseHeadMedia.data;

            if (responseSideMediaJSON && responseHeadMediaJSON) {
                setHeadlineMediaArticles(responseHeadMediaJSON)
                setSideMediaArticles(responseSideMediaJSON)
                setLoading(false)
            }
        };

        searchMediaArticles(mediaCount);
    }, [mediaCount])

    useEffect(() => {
        const searchSportsArticles = async(sportsCount) => {
            setLoading(true);
            const responseSideSports = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=sports&apiKey=${api_key}&pageSize=${sportsCount*8}`);
            const responseSideSportsJSON = await responseSideSports.data;

            const responseHeadSports = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${api_key}&pageSize=${sportsCount*4}`);
            const responseHeadSportsJSON = await responseHeadSports.data;

            if (responseSideSportsJSON && responseHeadSportsJSON) {
                setHeadlineSportsArticles(responseHeadSportsJSON)
                setSideSportsArticles(responseSideSportsJSON)
                setLoading(false)
            }
        };
        searchSportsArticles(sportsCount);
    }, [sportsCount])

    useEffect(() => {
        const searchTechArticles = async(techCount) => {
            setLoading(true)
            const responseSideTech = await axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=technology&apiKey=${api_key}&pageSize=${techCount*8}`);
            const responseSideTechJSON = await responseSideTech.data;

            const responseHeadTech = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${api_key}&pageSize=${techCount*4}`);
            const responseHeadTechJSON = await responseHeadTech.data;

            if (responseSideTechJSON && responseHeadTechJSON) {
                setHeadlineTechArticles(responseHeadTechJSON)
                setSideTechArticles(responseSideTechJSON)
                setLoading(false)
            }
        };
        searchTechArticles(techCount);
    }, [techCount])


    return ( 
        <NewsContext.Provider value={{
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
            { props.children } 
        </NewsContext.Provider>
    )
}

export default NewsState;