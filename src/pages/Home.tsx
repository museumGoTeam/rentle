import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import PropertyFilters from "../components/home/EntityFilters";
import { useParams } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import Properties from "../components/home/Properties";
import Occupants from "../components/home/Occupants";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 32,
    paddingBottom: 32,
    width: '50%',
    margin: 'auto'
  },
}));


const Home = () => {
  const classes = useStyles();
  const {entity} = useParams<{entity: string}>()

  return (
    <Grid container direction="column" className={classes.root}>
      <PropertyFilters />
      <Grid item container justify="flex-end" style={{marginBottom: 32}}>
        <CustomButton label="Ajouter"/>
      </Grid>
      {entity === "Locataires" ? <Occupants /> : <Properties />}
    </Grid>
  );
};

export default Home;
