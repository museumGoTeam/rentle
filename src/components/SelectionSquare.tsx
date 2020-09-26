import React from "react";
import Grid, {GridProps} from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: ({divider, selected}: {divider : boolean | undefined, selected: boolean | undefined}) =>  ({
    backgroundColor: selected ? theme.palette.primary.main : theme.palette.grey[500],
    color: "white",
    paddingTop: 16,
    paddingBottom: 16,
    borderRight: divider ? "1px solid black" : "",
    "&:hover": {
        cursor: 'pointer',
        backgroundColor: !selected ? fade(theme.palette.primary.main, 0.7) : theme.palette.primary.main,
        transition: '1s ease'
    }
  }),
}));


type SelectionSquareProps = {
    title: string,
    selected?:boolean,
    divider?: boolean,
}

const SelectionSquare: React.FC<SelectionSquareProps & GridProps > = ({title, selected, divider, ...rest}) => {
  const classes = useStyles({divider, selected});
  return (
    <Grid
      item
      container
      justify="center"
      className={classes.root}
      style={{ borderRight: "1px solid black" }}
      {...rest}
    >
      {title}
    </Grid>
  );
};

export default SelectionSquare;
