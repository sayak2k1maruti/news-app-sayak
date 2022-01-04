import React, { useState, useEffect, Fragment, useContext } from 'react'
import InfiniteScroll from "react-infinite-scroll-component"
import NewsCard from './NewsCard'
import Styles from "../../styles/NewsContainer.module.css"
import CardSpinner from './CardSpinner'
import CardSkeleton from './CardSkeleton'
import { Loader } from "../../Contexts/LoaderContextProvider"
import { SearchQueueContext } from "../../Contexts/SearchQueueProvider"


var timeout = null

const ALlNews = ({ category, allNews }) => {

    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(true)
    const [page, setPage] = useState(1)
    const [news, setNews] = useState(allNews)
    const [hasMore, setHasMore] = useState(true)
    const loader = useContext(Loader)
    const search = useContext(SearchQueueContext)

    const baseUrl = `/api/secret/getNews/${category}`
    if (search.query && search.query != "") {
        baseUrl += `/${search.query}`
    }

    useEffect(() => {
        
        if (search.query && search.query != '') {
            loader.current.continuousStart()
            setIsLoaded(false)
            clearTimeout(timeout);
            // Make a new timeout set to go off in 1000ms (1 second)
            //To reduce unnecessary requests
            timeout = setTimeout(async () => {
                console.log("successfull")
                try {
                    const res = await fetch(`${baseUrl}?` + new URLSearchParams({
                        page: 1
                    }))
                    const data = await res.json()
                    console.log(res)
                    setIsLoaded(true)
                    setNews(data.articles)
                    loader.current.complete()
                } catch (e) {
                    setIsLoaded(true)
                    setError(e)
                    setTimeout(()=>{
                        loader.current.complete()
                    },3000)
                }

            }, 1000);
        }else{
            setNews(allNews)
            loader.current.complete()
        }
    }, [search, baseUrl, loader])


    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [category,search])

    const fetchMore = async () => {
        try {
            const res = await fetch(`${baseUrl}?` + new URLSearchParams({
                page: page + 1
            }))
            const data = await res.json()
            if (data.articles.length === 0) {
                setHasMore(false)
            } else {
                setNews((news) => [...news, ...data.articles])
            }
            setPage((page) => page + 1)
        } catch (e) {
            console.log(e)
            setError(e)
        }
    }
    let newsLength = 0
    try {
        newsLength = news.length
    } catch (e) {
        newsLength = 0
    }
    return (
        <Fragment key={category}>
            {isLoaded ? "" : <CardSkeleton />}
            {error ? <CardSkeleton /> :
                <InfiniteScroll
                    className={Styles.newsContainer}
                    dataLength={newsLength}
                    next={fetchMore}
                    hasMore={hasMore}
                    loader={<CardSpinner />}
                    endMessage={
                        <p className={Styles.end}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    {news.map((item, key) => (
                        <NewsCard key={`${item.title}`} news={item} />
                    ))
                    }
                </InfiniteScroll>
            }
        </Fragment>
    )

}

export default ALlNews

