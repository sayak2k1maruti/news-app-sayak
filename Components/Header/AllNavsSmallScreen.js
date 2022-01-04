import React, { useContext, useState } from 'react'
import { NewsCatagory } from '../../Contexts/NewsCategoryProvider'
import newsCatagories from '../../Assets/newsCatagories'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import Styles from '../../styles/NavNewsBar.module.css'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import Link from 'next/link';
const AllNavsSmallScreen = () => {
    const newsCategory = useContext(NewsCatagory)
    const activeCategory = newsCategory.activeCategory
    const [open, setOpen] = useState(false)
    return (
        <>
            <ListItemButton className={Styles.navDrawerHeader}
                sx={{
                    justifyContent: 'space-between',
                    backgroundColor: 'var(--color--page--secondary)',
                    color: 'var(--color--font--primary)',
                    opacity: 0.9
                }}
                onClick={() => { setOpen(!open) }}>
                {activeCategory}
                {
                    !open ? <UnfoldMoreIcon /> : <UnfoldLessIcon />
                }
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {newsCatagories.map((item, key) => {
                        return (
                            <span key={key}>
                                {(item !== activeCategory) ?
                                    <Link href={`/${item}`}>
                                        <ListItemButton
                                            component='span'
                                            sx={{ pl: 5, color: 'var(--color--font--primary)' }}
                                            className={Styles.navDrawerHeader}
                                            key={key}
                                            onClick={() => handleClick(setOpen)}
                                        >
                                            #{item}
                                        </ListItemButton>
                                    </Link>
                                    :
                                    <ListItemButton
                                        component = 'a'
                                        href = '#'
                                        className={[Styles.navDrawerHeader, Styles.active_list_item].join(' ')}
                                        onClick={(open) => setOpen(!open)}
                                        key={key}
                                        sx={{ pl: 5, color: 'var(--color--font--secondary)', backgroundColor: 'var(--color--bg--list--secondary)' }}
                                    >
                                        #{item}
                                    </ListItemButton>}
                            </span>
                        )
                    })}
                </List>
            </Collapse>
        </>
    )
}
export default AllNavsSmallScreen
const handleClick = (setOpen) => {
    setOpen(false)
}