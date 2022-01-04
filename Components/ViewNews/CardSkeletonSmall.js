import Skeleton from '@mui/material/Skeleton';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import {  ListItemButton } from '@mui/material';

const skeleton = (
    <>
        <ListItemButton sx={{ maxWidth: 360 }}  alignItems="flex-start">
            <ListItemAvatar>
                <Skeleton variant="rectangular" width={100} height={100} />
            </ListItemAvatar>
            <Skeleton variant="text" />
            <Skeleton variant="text" />
        </ListItemButton>
        <Divider variant="inset" component="li" />
    </>
)

const CradSkeletonSmall = () => {
    return (
        <>
            {skeleton}
            {skeleton}
            {skeleton}
            {skeleton}
            {skeleton}
            {skeleton}
        </>
    )
}

export default CradSkeletonSmall
