import React from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid, { GridProps } from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography'
import {fade} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    CounterButton: {
      backgroundColor: theme.palette.primary.main,
      width: 32,
      height: 32,
      color: 'white',
      borderRadius: '50%',
      '&:hover': {
          cursor: 'pointer',
          background: fade(theme.palette.primary.main, 0.7)
      }
    },
    counter: {
      fontSize: 18,
      fontWeight: 'bold',
    }
  }));

type CounterInputProps = {
    name?: string,
    value: number,
    title: string
    onValueChange: (name: string, newValue: number) => void
}

const CounterInput: React.FC<GridProps & CounterInputProps> = ({name, value = 0, title, onValueChange, ...rest}) => {
    const classes = useStyles()

    const increaseValue = () => {
      onValueChange(name ? name : "", value + 1)
    }

    const decreaseValue = () => {
      onValueChange(name ? name : "", value - 1)
    }
 
    return (
        <Grid {...rest}>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}><Typography variant="body1" align="center" style={{fontSize: 14}}>{title}</Typography></Grid>
          <Grid item container alignItems="center" xs={12} sm={12} md={4} lg={4} xl={4}>
            <Grid item container alignItems="center" justify="center" md={4} lg={4} xl={4} onClick={increaseValue} className={classes.CounterButton}>+</Grid>
            <Grid item container alignItems="center" justify="center" md={4} lg={4} xl={4} className={classes.counter}>{value}</Grid>
            <Grid item container alignItems="center" justify="center" md={4} lg={4} xl={4} onClick={decreaseValue} className={classes.CounterButton}>-</Grid>
          </Grid>
        </Grid>
    )
}

export default CounterInput
