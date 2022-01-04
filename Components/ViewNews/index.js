import MoreStory from './MoreStory'
import TitleBar from './TitleBar'
import MainNews from './MainNews'



const ViewNews = ({  category, news , moreNews , changeNews}) => {
    return (
        <>
            <TitleBar category={category} title={news.title} />
            <MainNews news={news}/>
            <MoreStory category={category} changeNews = {changeNews} moreNews={moreNews}/>
        </>
    )
}

export default ViewNews
