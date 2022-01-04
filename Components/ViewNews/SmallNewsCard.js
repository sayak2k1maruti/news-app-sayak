import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Avatar, ListItemButton } from '@mui/material';
import Link from 'next/link';
import Styles from '../../styles/ViewNews.module.css'
import { NewsCatagory } from "../../Contexts/NewsCategoryProvider"
import { useContext } from 'react';

const SmallNewsCard = ({ news , category , changeNews}) => {
    const newsCategory = useContext(NewsCatagory)
    return (
        <>
            <Link href={`/${category}/${news.title}`} >
                <ListItemButton sx={{ maxWidth: 360 }}  alignItems="flex-start" 
                    onClick={() => { newsCategory.setOffLineNews(news); changeNews(news) }}
                >
                    <ListItemAvatar>
                        <Avatar src={news.urlToImage} sx={{
                            width: '100px',
                            height: "100px",
                            mr: 1
                        }} alt="image" variant="square"></Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={news.title}
                        secondary={"unknown" && news.source.name}
                    />
                </ListItemButton>
            </Link>
            <Divider variant="inset" component="li" />
        </>
    )
}

export default SmallNewsCard
