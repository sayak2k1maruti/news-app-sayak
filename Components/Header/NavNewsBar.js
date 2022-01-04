import React from 'react'
import Styles from '../../styles/NavNewsBar.module.css'
import AllNavsLargeScreen from './AllNavsLargeScreen';
import AllNavsSmallScreen from './AllNavsSmallScreen';
  
const NavNewsBar = () => {
    return (
        <nav className={Styles.navbar} style={{
            '--background-color': '#f7f7f7'
        }}>
            <AllNavsLargeScreen/>
            <span className = {Styles.navbarDrawer}><AllNavsSmallScreen/></span>
        </nav>
    )
}

export default NavNewsBar
