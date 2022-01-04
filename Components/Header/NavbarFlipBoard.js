import React, { useState } from 'react'
import Styles from '../../styles/NavbarFlipBoard.module.css'
import Logo from '../../Assets/Logo'
import NavbarSearch from './NavbarSearch'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material';
import ToogleThemeSwitch from './ToogleThemeSwitch';

const theme = createTheme({
    palette: {
        primary: {
            main: '#f52828'
        },
        grey: {
            main: '#555'
        }
    },
    typography: {
        button: {
            textTransform: 'none'
        }
    }
})

const NavbarFlipBoard = () => {
    const [extendedSearch, setExtendedSearch] = useState(false)
    return (
        <div className={Styles.nabvar} >
            <div className={extendedSearch ? [Styles.logo,Styles.logo_min].join(' ') : Styles.logo}>
                <Logo />
            </div>
            <div className={Styles.right}>
                <div className={Styles.newsletters} onClick={notAvailable} style={{
                    '--font-color-secondary': '#555',
                    '--font-color-primary': '#000'
                }}>Newsletters</div>
                <NavbarSearch open={extendedSearch} setOpen={setExtendedSearch} />
                {!extendedSearch && <ThemeProvider theme={theme}>
                    <Stack spacing={2} direction="row">
                        <ToogleThemeSwitch/>
                        <span className={Styles.signInUp}>
                            <Button variant="contained" onClick={notAvailable} disableElevation>Sign up</Button>
                            <Button variant="text" onClick={notAvailable} color='grey' >Log in</Button>
                        </span>
                    </Stack>
                </ThemeProvider>}
            </div>
        </div>
    )
}

export default NavbarFlipBoard

const notAvailable = ()=>{
    alert("This Features is not available Yet!\nUnder Development\nSorry")
}