import React from "react";
import ListItemIcon from '@material-ui/core/ListItemIcon'
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  icon: {
    minWidth: 32
  }
}));


type Props = {
    icon: React.ReactElement
}

const CustomIcon: React.FC<Props> = ({icon}) => {
  const classes = useStyles()
  return (
    <ListItemIcon className={classes.icon}>
      {icon}
    </ListItemIcon>
  );
};

export default CustomIcon;
