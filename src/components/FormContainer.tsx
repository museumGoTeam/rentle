import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 20,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  titleContainer: {
    paddingBottom: 16,
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
  title: {
    fontSize: theme.typography.h5.fontSize,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 12,
  },
  settingItemContainer: {
    border: `1px solid rgba(0,0,0,0.1)`,
    marginBottom: 40,
    padding: 20,
  },
  leftSide: {
    [theme.breakpoints.up("md")]: {
      marginRight: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1rem",
    },
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    fontWeight: "bold",
    fontSize: theme.typography.subtitle2.fontSize,
    color: "white",
    "&:hover": {
      backgroundColor: fade(theme.palette.primary.main, 0.8),
    },
  },
  helperText: {
    marginTop: 10,
    color: theme.palette.secondary.main,
  },
}));

type Props = {
  title: string;
  subtitle: string;
};

const FormContainer: React.FC<Props> = ({
  title,
  subtitle,
  children,
}) => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.root}>
      <Grid
        item
        container
        direction="column"
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.titleContainer}
      >
        <Typography variant="h3" className={classes.title} gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" className={classes.subtitle}>
          {subtitle}
        </Typography>
      </Grid>
      <Grid
        item
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.settingItemContainer}
      >
        <Grid item container>
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FormContainer;
