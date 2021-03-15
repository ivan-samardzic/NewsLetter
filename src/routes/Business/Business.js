import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Advert from '../../components/Advert/Advert'
import RouteName from '../../components/RouteName/RouteName'
import ArticlesBox from '../../components/ArticlesBox/ArticlesBox';
import Spinner from '../../components/Spinner/Spinner'
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'


const Business = () => {

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
