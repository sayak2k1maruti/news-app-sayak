import { useContext } from 'react'
import AllNews from '../Components/AllNews'
import { ThemeContext } from "../Contexts/ThemeContextProvider"
import Styles from '../styles/Main.module.css'



export default function Home({ allNews }) {
  const theme = useContext(ThemeContext)
  return (
    <main className={Styles.main} style={theme.theme}>
      <AllNews category="general" allNews={allNews} />
    </main>
  )
}
export const getStaticProps = async () => {
  try {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEWS_API}&page=1&pageSize=${process.env.PAGE_SIZE}`)
    const data = await res.json()
    return ({
      props: {
        allNews: data.articles,
      },
      revalidate: 3600
    })
  } catch (e) {
    console.log(e)
    return ({
      notFound: true
    })
  }

}