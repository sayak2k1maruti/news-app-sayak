import React, { useContext } from 'react'
import Styles from '../../Styles/NavbarFlipBoard.module.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { SearchQueueContext } from "../../Contexts/SearchQueueProvider"

const NavbarSearch = ({open,setOpen}) => {
    
    const searchContext = useContext(SearchQueueContext)
    const onChange = (e) => {
        searchContext.setQuery(e.target.value)
        console.log(e.target.value)
    }
    return (
        <>
            <div className={open ? [Styles.searchBox,Styles.extended].join(' ') : Styles.searchBox} >
                <span onClick = {()=>setOpen(true)}>
                <IconButton>
                    <SearchIcon sx={{color : "var(--color--font--caption)"}}/>
                </IconButton>
                </span>
                <input onClick = {()=>setOpen(true)} className={Styles.search}  onChange={onChange} value={searchContext.query ? searchContext.query : ''} placeholder="Search Flipboard"></input>
                {open && <IconButton onClick = {()=>{setOpen(false);searchContext.setQuery(null)}}>
                    <CloseIcon sx={{color : "var(--color--font--caption)"}}/>
                </IconButton>}
            </div>
        </>
    )
}
export default NavbarSearch
