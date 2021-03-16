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

const Sports = (props) => {
    const context = useContext(NewsContext)
    return (
        <NewsContext.Consumer>
            {context => (
                <div className='container-fluid'>
                    <Header size='36px' />
                    <Advert image='https://static.jutarnji.hr/images/live-multimedia/binary/2018/9/28/17/a1.png' />
                    <RouteName name='Sports' />
                    {context.loading ? <Spinner /> : 
                    <ArticlesBox headlineArticles={context.headlineSportsArticles} sideArticles={context.sideSportsArticles} />}
                    <Button count={context.sportsCount} setCount={context.setSportsCount} />
                    <Footer size='48px' />
                </div>
            )}
        
        </NewsContext.Consumer>
    )
}

export default Sports
