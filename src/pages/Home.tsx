import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import PropertyFilters from "../components/home/EntityFilters";
import PropertyCard from "../components/home/PropertyCard";
import { useParams } from "react-router-dom";
import OccupantCard from "../components/home/OccupantCard";
import CustomButton from "../components/CustomButton";
import { Occupant, Property } from "./types";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 32,
    paddingBottom: 32,
  },
  list: {
    width: "50%",
    margin: "auto",
    paddingTop: 32,
    paddingBottom: 32,
  },

}));


const mapToProperty = () => [].map((property: Property) => <PropertyCard key={property.ID} {...property} />)

const mapToOccupant = () => [].map((occupant: Occupant) => <OccupantCard key={occupant.ID} {...occupant} />)

const Home = () => {
  const classes = useStyles();
  const {entity} = useParams<{entity: string}>()

  return (
    <Grid container direction="column" className={classes.root}>
      <PropertyFilters />
      <Grid item container className={classes.list}>
        <Grid item container justify="flex-end">
          <CustomButton label="Ajouter" />
        </Grid>
        {
          entity === "Locataires" ?  mapToOccupant() : mapToProperty()
        }
      </Grid>
    </Grid>
  );
};

export default Home;
