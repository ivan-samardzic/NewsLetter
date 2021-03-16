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

const Science = (props) => {
    const context = useContext(NewsContext)
    return (
        <NewsContext.Consumer>
            {context => (
                <div className='container-fluid'>
                    <Header size='36px' />
                    <Advert image='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f538c469353173.5b7ebeb00a8da.gif' />
                    <RouteName name='Science' />
                    {context.loading ? <Spinner /> : 
                    <ArticlesBox headlineArticles={context.headlineScienceArticles} sideArticles={context.sideScienceArticles} />}
                    <Button count={context.scienceCount} setCount={context.setScienceCount} />
                    <Footer size='48px' />
                </div>
            )}
        </NewsContext.Consumer>
    )
}

export default Science
