import List from '@mui/material/List';
import SmallNewsCard from './SmallNewsCard';
import Link from 'next/link';
import CardSkeletonSmall from './CardSkeletonSmall';
import { useState,useEffect } from 'react';
import Styles from '../../styles/ViewNews.module.css'


const MoreStory = ({ category , moreNews , changeNews}) => {

    const [isLoaded, setIsLoaded] = useState(true)

    useEffect(()=>{
        setIsLoaded(moreNews.length > 0)
    },[moreNews,setIsLoaded])

    return (
        <div className={Styles.more_news}>
            <h1>More news from <Link href ={`/${category}`}>{category === 'news' ? 'general' : category}</Link></h1>
            {
                (isLoaded ) ?
                    <List sx={{ width: '100%', display: "flex", flexDirection: "row", flexWrap: "wrap", bgcolor: 'var(--color--page--primary)' }}>
                        {moreNews.map((item, key) => (
                            <SmallNewsCard
                                changeNews = {changeNews}
                                key={key}
                                news = {item}
                                category = {category}
                            />
                        ))}
                    </List>
                    :
                    <CardSkeletonSmall />
            }

        </div>
    )
}

export default MoreStory
