import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Grid from '@material-ui/core/Grid'
import CardMedia from '../home/CardMedia'


const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: 8,
    },
}))

type DetailImageProps = {
    image: string
}

const Detailmage: React.FC<DetailImageProps> = ({image}) => {
    const classes = useStyles()
    return (
        <Grid item container justify="center">
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <CardMedia src={image} className={classes.root} />
        </Grid>
    </Grid>
    )
}

export default Detailmage
