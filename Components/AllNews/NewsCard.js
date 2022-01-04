import React, { useContext } from 'react'
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { NewsCatagory } from "../../Contexts/NewsCategoryProvider"
import Styles from "../../Styles/NewsCard.module.css"
import { SearchQueueContext } from "../../Contexts/SearchQueueProvider"

const NewsCard = ({ news, key }) => {
    const newsCategory = useContext(NewsCatagory)
    const search = useContext(SearchQueueContext)
    return (
        <Link href={`/${newsCategory.activeCategory}/${news.title}`}>
            <Card onClick={() => { newsCategory.setOffLineNews(news); search.setQuery(null) }}
                key={key}
                className={Styles.card}
                component={"span"}
                sx={{
                    width: '100vw',
                    maxWidth: 400,
                    mt: '15px',
                    ml: '10px',
                    mr: '10px',
                    textDecoration: "none",
                    color: "var(--color--font--secondary)",
                    backgroundColor: "var(--color--bg--card)"
                }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="auto"
                        image={news.urlToImage ? news.urlToImage : '/images/default_img.jpg'}
                        alt="image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {news.title}
                        </Typography>
                        {news.description && <Typography variant="body2" sx={{ opacity: "0.6" }}>
                            {news.description}
                        </Typography>}
                        <Typography variant="caption" display="block" gutterBottom sx={{ opacity: "0.5" }}>
                            By &nbsp;
                            {news.source ? news.source.name : "Unknown"}
                            <span style={{ fontSize: '50px' }}>.</span>
                            {getTimeDiff(news.publishedAt)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}

const getTimeDiff = (date) => {
    try {
        let publishedDate = new Date(date)
        let publishedTime = publishedDate.getTime()
        let currTime = new Date()
        let difference = (currTime - publishedTime) / 1000
        if (difference / (24 * 3600 * 30) >= 1) {
            return `${parseInt(difference / (24 * 3600 * 30))} months ago`
        } else if (difference / (24 * 3600 * 7) >= 1) {
            return `${parseInt(difference / (24 * 3600 * 7))} week ago`
        } else if (difference / (24 * 3600) >= 1) {
            return `${parseInt(difference / (24 * 3600))} days ago`
        } else if (difference / 3600 >= 1) {
            return `${parseInt(difference / 3600)} hours ago`
        } else if (difference / 60 >= 1) {
            return `${parseInt(difference / 60)} minutes ago`
        } else {
            return "just now"
        }
    } catch (e) {
        return "unknown"
    }
}

export default NewsCard
export { getTimeDiff }
