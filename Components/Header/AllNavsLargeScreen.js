import React, { useContext } from 'react'
import { NewsCatagory } from '../../Contexts/NewsCategoryProvider'
import Styles from '../../styles/NavNewsBar.module.css'
import newsCatagories from '../../Assets/newsCatagories'
import Link from 'next/link'
import { Loader } from "../../Contexts/LoaderContextProvider"

const AllNavsLargeScreen = () => {
    const newsCategory = useContext(NewsCatagory)
    const activeCategory = newsCategory.activeCategory
    const loader = useContext(Loader)

    return (
        <div className={Styles.allNavs}>
            {
                newsCatagories.map((item, key) => (
                    (item !== activeCategory) ?
                        <Link href={`/${item}`} key={key}>
                            <span className={[Styles.normal, Styles.navItems].join(' ')}>
                                {item}
                            </span>
                        </Link>
                        :
                        <Link href={`/${item}`} key={key} >
                            <span className={[Styles.active, Styles.navItems].join(' ')} onClick={()=>{console.log("Clicked") }}>
                                {item}
                            </span>
                        </Link>

                ))
            }
        </div>
    )
}

export default AllNavsLargeScreen
