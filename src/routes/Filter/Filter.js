import React from 'react'
import { useState, useEffect} from 'react'
import Header from '../../components/Header/Header'
import Advert from '../../components/Advert/Advert'
import RouteName from '../../components/RouteName/RouteName'
import ArticlesBox from '../../components/ArticlesBox/ArticlesBox';
import FilterArticlesBox from '../../components/FilterArticlesBox/FilterArticlesBox'
import Spinner from '../../components/Spinner/Spinner'
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import axios from 'axios';


const Filter = ({location:{state:{filterArticles}}}) => {
    console.log(filterArticles.articles);
    return (
        <div>
            <Header size='36px' />
            <RouteName name='Filter' />
            <FilterArticlesBox filterArticles={filterArticles} />
            <Footer size='48px' />
        </div>
    )
}

export default Filter
