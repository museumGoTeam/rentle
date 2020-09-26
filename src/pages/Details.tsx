import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import PropertyDetails from "../components/details/PropertyDetails";
import DetailImage from "../components/details/DetailImage";
import { useParams } from "react-router-dom";
import { DetailsState, Occupant, Property } from "./types";
import occupants from "../constants/occupants";
import properties from "../constants/properties";
import OccupantDetails from "../components/details/OccupantDetails";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    overflowX: "hidden",
  },
  rightSide: {
    paddingTop: 16,
    paddingLeft: 64,
    paddingRight: 64,
    maxHeight: '100vh',
    overflowY: "auto"
  },
}));



const Details = () => {
  const classes = useStyles()
  const [state, setState] = React.useState<DetailsState>({loading: true, data: undefined})
  const {entity, id} = useParams<{entity: "Locataires" | "Maisons" | "Appartements", id: string}>()

  React.useEffect(() => {
    if (entity === "Locataires") setState({data: occupants[parseInt(id) - 1], loading: false})
    else setState({data: properties[parseInt(id) -1], loading: false})
  }, [entity])

  if (state.loading) return <p>Loading ...</p>
  if (!state.loading && !state.data) return <p>La page que vous recherchez n'éxiste pas</p>

  return (
    <Grid container className={classes.root}>
      <DetailImage item container xs={12} sm={12} md={6} lg={6} xl={6} image={entity === "Locataires" ? (state.data as Occupant).avatar : (state.data as Property).images[0]} />
      <Grid item container xs={12} sm={12} md={6} lg={6} xl={6} direction="column" className={classes.rightSide}>
         {entity === "Locataires" ? <OccupantDetails {...(state.data as Occupant)} /> : <PropertyDetails {...(state.data as Property)}/> } 
      </Grid>
    </Grid>
  );
};

export default Details;
