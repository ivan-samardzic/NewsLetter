import React, { createContext } from 'react'

const NewsContext = createContext({
    headlineHomeArticles: {},
    sideHomeArticles: {},
    headlineBusinessArticles: {},
    sideBusinessArticles: {},
    headlineHealthArticles: {},
    sideHealthArticles: {},
    headlineMediaArticles: {},
    sideMediaArticles: {},
    headlineScienceArticles: {},
    sideScienceArticles: {},
    headlineSportsArticles: {},
    sideSportsArticles: {},
    headlineTechArticles: {},
    sideTechArticles: {},
    loading: true,
    count: 1,
});

export default NewsContext;