import Styles from '../../styles/ViewNews.module.css'
import Typography from '@mui/material/Typography';
import { getTimeDiff } from '../../Assets';
const MainNews = ({ news }) => {
    return (
        <div className={Styles.mainNews} key={news.title}>
            <h1 className={Styles.news_title}>{news.title}</h1>
            <img className={Styles.news_img} src={news.urlToImage} alt={news.title}></img>
            <div className={Styles.news_content}>
                <span>
                    <Typography sx={{ fontSize: '1rem', mb: 5, lineHeight: '1rem', opacity: .5 }} display="block" >
                        By
                        {news.source ? news.source.name : "Unknown"}
                        &nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
                        {news.author ? news.author : "anonymous"}
                        <span style={{ fontSize: '50px' }}>.</span>
                        {getTimeDiff(news.publishedAt)}
                    </Typography>
                </span>
                <span dangerouslySetInnerHTML={{__html: news.description}}>
                    
                </span>
                <br /><br />
                <a href={news.url} style={{ opacity: 0.6 }} target="_blank" rel="noreferrer">Read more... at {news.source ? news.source.name : "googleNews"}</a>
            </div>
        </div>
    )
}

export default MainNews
