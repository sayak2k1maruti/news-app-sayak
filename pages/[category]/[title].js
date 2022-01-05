import Styles from "../../styles/ViewNews.module.css"
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from 'react'
import { SearchQueueContext } from "../../Contexts/SearchQueueProvider"
import ViewNews from "../../Components/ViewNews";
import { ThemeContext } from "../../Contexts/ThemeContextProvider"
import { NewsCatagory } from "../../Contexts/NewsCategoryProvider"
import { Loader } from "../../Contexts/LoaderContextProvider";

const ViewNewsPage = ({ category, news, moreNews, needOffline }) => {
    const search = useContext(SearchQueueContext)
    const router = useRouter()
    const theme = useContext(ThemeContext)
    const newsCategory = useContext(NewsCatagory)
    const [newsToBeDisplay, setNewsToBeDisplay] = useState(news)
    const loader = useContext(Loader)


    useEffect(() => {
        if (search.query && search.query != '') {
            router.push(`/${category}/`)
        }
    }, [search, search.query, category, router])

    useEffect(() => {
        if (needOffline) {
            if (newsCategory.offLineNews != null) {
                setNewsToBeDisplay(newsCategory.offLineNews)
            } else {
                router.push('/404')
            }
        }
    }, [needOffline, newsCategory])
    
    useEffect(()=>{
        loader.current.complete()
    },[loader])
    
    return (
        <main className={Styles.page} style={theme.theme}>
            <ViewNews category={category} news={newsToBeDisplay} changeNews={setNewsToBeDisplay} moreNews={moreNews} />
        </main>
    )
}

export default ViewNewsPage

export const getServerSideProps = async ({ params }) => {
    const dummy = {
        source: {
            id: "id",
            name: "name"
        },
        author: "author",
        title: "title",
        description: "description",
        url: "url",
        urlToImage: "urlToImage",
        publishedAt: "2021-12-29T20:41:00Z",
        content: "content"
    }
    const { category, title } = params
    try {
        const rawData = await fetch(`https://newsapi.org/v2/everything?` + new URLSearchParams({
            apiKey : process.env.NEWS_API,
            q : title.split('-')[0].toString()
        }) )
        const data = await rawData.json()
        const rawMoreNews = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEWS_API}&page=1&pageSize=${process.env.PAGE_SIZE}&category=${category}`)
        const moreNews = await rawMoreNews.json()
        
        return {
            props: {
                category: category,
                news: data.totalResults > 0 ? data.articles[0] : dummy,
                moreNews: moreNews.totalResults ? moreNews.articles.slice(0, 5) : [],
                needOffline: data.totalResults < 1
            }
        }
    } catch (e) {
        return{
            notFound : true
        }
    }


}
