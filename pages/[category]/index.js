import newsCatagories from "../../Assets/newsCatagories"
import { useContext, useEffect } from 'react'
import AllNews from '../../Components/AllNews'
import {ThemeContext} from "../../Contexts/ThemeContextProvider"
import Styles from '../../styles/Main.module.css'
import {NewsCatagory} from '../../Contexts/NewsCategoryProvider'
import { Loader } from "../../Contexts/LoaderContextProvider"

const Home = ({ allNews , category}) => {
    const theme = useContext(ThemeContext)
    const newsCategory = useContext(NewsCatagory)
    const loader = useContext(Loader)

    useEffect(()=>{
        newsCategory.changeNewsCategory(category)
    },[category])
  return (
    <main className={Styles.main} style={theme.theme}>
      <AllNews category={category} allNews={allNews}/>
    </main>
  )
}

export default Home

export async function getStaticPaths() {
    return ({
        paths: newsCatagories.map((category) => (
            {
                params: { category : category }
            }
        )),
        fallback: false
    })
}

export const getStaticProps = async ({ params }) => {
    const {category} = params
    const res = await fetch(`http://localhost:3000/api/secret/getNews/${category}/`)
    const data = await res.json()
    return ({
        props: {
            allNews : data.articles,
            category : category
        },
        revalidate : 3600
    })
}
