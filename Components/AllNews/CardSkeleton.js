import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Styles from "../../styles/NewsContainer.module.css"

const skeleton = (
    <Card sx={{
        width: '100vw',
        maxWidth: 400,
        mt: '15px',
        ml: '10px',
        mr: '10px',

    }}>
        <CardActionArea>
            <CardContent>
                <Stack spacing={1}>
                    <Skeleton variant="rectangular" width={210} height={118} />
                    <Skeleton variant="text" />
                    <Skeleton variant="rectangular" width={210} height={118} />
                    <Skeleton variant="text" />
                </Stack>
            </CardContent>
        </CardActionArea>
    </Card>
)

const CardSkeleton = () => {
    return (
        <div className = {Styles.newsContainer}>
            {skeleton}
            {skeleton}
            {skeleton}
            {skeleton}
            {skeleton}
            {skeleton}
        </div>
    )
}

export default CardSkeleton
