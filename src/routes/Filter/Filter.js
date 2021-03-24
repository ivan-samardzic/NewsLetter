import React from 'react'
import Header from '../../components/Header/Header'
import Advert from '../../components/Advert/Advert'
import RouteName from '../../components/RouteName/RouteName'
import FilterArticlesBox from '../../components/FilterArticlesBox/FilterArticlesBox'
import Footer from '../../components/Footer/Footer'


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
