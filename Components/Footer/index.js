import Styles from '../../Styles/Footer.module.css'
import {ThemeContext} from '../../Contexts/ThemeContextProvider'
import { useContext } from 'react'
const Footer = () => {
    const theme = useContext(ThemeContext)
    return (
        <footer className={Styles.footer} style={theme.theme}>
            <p>Clone of <a href="https://flipboard.com/" target="_blank" rel="noreferrer">FlipBoard </a></p>
            <br/>
            <p>By @sayak</p>
            <a href="mailto:sayakdas2k1@gmail.com">sayakdas2k1@gmail.com</a>
           <br/><br/>
           <a style={{fontSize:"1rem"}} href="https://flipboard.com/" target="_blank" rel="noreferrer">Original WebSite : https://flipboard.com/</a>
        </footer>
    )
}

export default Footer