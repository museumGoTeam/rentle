import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
}));

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      {children}
    </Grid>
  );
};

export default Layout;
