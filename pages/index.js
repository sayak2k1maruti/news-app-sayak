import { useContext } from 'react'
import AllNews from '../Components/AllNews'
import {ThemeContext} from "../Contexts/ThemeContextProvider"
import Styles from '../Styles/Main.module.css'



export default function Home({allNews}) {
  const theme = useContext(ThemeContext)
  return (
    <main className={Styles.main} style={theme.theme}>
      <AllNews category="general" allNews={allNews}/>
    </main>
  )
}
export const getStaticProps = async () => {
  let url = `http://localhost:3000/api/secret/getNews/general/`
  const res = await fetch(url)
  const data = await res.json()
  return(
    {
      props : {
        allNews : data.articles
      },
      revalidate : 3600
    }
  )
}