import '../styles/Global.css'
import NewsCategoryProvider from "../Contexts/NewsCategoryProvider"
import LoaderContextProvider from "../Contexts/LoaderContextProvider"
import SearchQueueProvider from "../Contexts/SearchQueueProvider"
import ThemeContextProvider from "../Contexts/ThemeContextProvider"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Head from 'next/head'
import ScrollToTopBtn from '../Components/ScrollToTop'
function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <NewsCategoryProvider>
        <SearchQueueProvider>
          <LoaderContextProvider>
            <Head>
              <meta charset="UTF-8"/>
              <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <title>FlipBoard</title>
            </Head>
            <Header />
            <Component {...pageProps} />
            <ScrollToTopBtn/>
            <Footer />
          </LoaderContextProvider>
        </SearchQueueProvider>
      </NewsCategoryProvider>
    </ThemeContextProvider>
  )
}

export default MyApp
