import React from 'react'
import { useState, useEffect, useContext } from 'react'
import Header from '../../components/Header/Header'
import Advert from '../../components/Advert/Advert'
import RouteName from '../../components/RouteName/RouteName'
import ArticlesBox from '../../components/ArticlesBox/ArticlesBox';
import Spinner from '../../components/Spinner/Spinner'
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import NewsContext from '../../context/newsContext'

const Home = (props) => {
    return (
        <NewsContext.Consumer>
            {context => (
                <div className='container-fluid'>
                    <Header size='36px' />
                    <Advert image='https://static.jutarnji.hr/images/live-multimedia/binary/2018/9/28/17/a1.png' />

                    <RouteName name='home' />
                    {context.loading ? <Spinner /> : 
                    <ArticlesBox headlineArticles={context.headlineHomeArticles} sideArticles={context.sideHomeArticles} />}
                    <Button count={context.homeCount} setCount={context.setHomeCount} />

                    <RouteName name='business' />
                    {context.loading ? <Spinner /> : 
                    <ArticlesBox headlineArticles={context.headlineBusinessArticles} sideArticles={context.sideBusinessArticles} />}
                    <Button count={context.businessCount} setCount={context.setBusinessCount} />

                    <RouteName name='tech' />
                    {context.loading ? <Spinner /> : 
                    <ArticlesBox headlineArticles={context.headlineTechArticles} sideArticles={context.sideTechArticles} />}
                    <Button count={context.techCount} setCount={context.setTechCount} />

                    <RouteName name='sports' />
                    {context.loading ? <Spinner /> : 
                    <ArticlesBox headlineArticles={context.headlineSportsArticles} sideArticles={context.sideSportsArticles} />}
                    <Button count={context.sportsCount} setCount={context.setSportsCount} />

                    <RouteName name='science' />
                    {context.loading ? <Spinner /> : 
                    <ArticlesBox headlineArticles={context.headlineScienceArticles} sideArticles={context.sideScienceArticles} />}
                    <Button count={context.scienceCount} setCount={context.setScienceCount} />

                    <RouteName name='media' />
                    {context.loading ? <Spinner /> : 
                    <ArticlesBox headlineArticles={context.headlineMediaArticles} sideArticles={context.sideMediaArticles} />}
                    <Button count={context.mediaCount} setCount={context.setMediaCount} />

                    <RouteName name='health' />
                    {context.loading ? <Spinner /> : 
                    <ArticlesBox headlineArticles={context.headlineHealthArticles} sideArticles={context.sideHealthArticles} />}
                    <Button count={context.healthCount} setCount={context.setHealthCount} />

                    <Footer size='48px' />
                </div>
            )}
            
        </NewsContext.Consumer>
    )
}

export default Home
