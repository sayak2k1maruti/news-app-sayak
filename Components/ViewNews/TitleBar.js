import Link from 'next/link'
import Styles from '../../styles/ViewNews.module.css'
const TitleBar = ({category,title}) => {
    return (
        <div className={Styles.topBar}>
            <span className={Styles.topBar_1}>
                <Link href ='/'>Home</Link>
                /
            </span>
            <span className={Styles.topBar_1}>
                <Link href ={`/${category}`}><a>#{category}</a></Link>/
            </span>
            <span>
                {title}
            </span>
        </div>
    )
}

export default TitleBar
