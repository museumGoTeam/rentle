import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Chip from "@material-ui/core/Chip";
import { fade } from "@material-ui/core/styles/colorManipulator";

const useStyles = makeStyles((theme) => ({
  root: (props: {selected: boolean}) => ({
    width: 158,
    paddingTop: 20,
    paddingBottom: 20,
    marginRight: 8,
    backgroundColor: props.selected ? theme.palette.secondary.main : "transparent",
    color: props.selected ? 'white' : "black",
    fontWeight: props.selected ? "bold" : "initial",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: theme.palette.grey[200],
    "&:hover": {
        backgroundColor: fade(props.selected ? theme.palette.secondary.main : theme.palette.grey[200], 0.8),
        cursor:'pointer'
    },
    '&:focus': {
        backgroundColor: theme.palette.secondary.main
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2),
    }
  }),
}));

export type CustomChipProps = {
    label: string,
    icon: React.ReactElement,
    selected: boolean,
    onFilterSelected?: (id: string) => void
}
const CustomChip: React.FC<CustomChipProps> = ({label, icon, selected, onFilterSelected}) => {
  const classes = useStyles({selected});
  return (
    <Chip
      icon={icon}
      label={label}
      onClick={() => onFilterSelected && onFilterSelected(label)}
      className={classes.root}
      clickable

    />
  );
};

export default CustomChip;
