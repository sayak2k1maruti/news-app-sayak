import Styles from "../../styles/CardSpinner.module.css"
import CircularProgress from '@mui/material/CircularProgress'

const CardSpinner = () => {
    return (
        <div className = {Styles.spinnerContainer}>
            <CircularProgress color="secondary" />
        </div>
    )
}

export default CardSpinner
