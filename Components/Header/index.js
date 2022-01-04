import NavNewsBar from './NavNewsBar'
import NavbarFlipBoard from './NavbarFlipBoard'
import {ThemeContext} from '../../Contexts/ThemeContextProvider'
import { useContext } from 'react'
const Header = () => {
    const theme = useContext(ThemeContext)
    return (
        <header style = {theme.theme}>
            <NavbarFlipBoard />
            <NavNewsBar />
        </header>
    )
}

export default Header
