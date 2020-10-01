import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import { useParams, useLocation } from "react-router-dom";
import { useLazyFetch } from "../hooks/useFetch";
import { Occupant, Property } from "./types";
import CustomButton from "../components/CustomButton";
import OccupantDetails from "../components/details/OccupantDetails";
import PropertyDetails from "../components/details/PropertyDetails";
const useStyles = makeStyles((theme) => ({
  root: {},
  image: {},
}));

const isPropertyDetails = (pathname: string) =>
  pathname.includes("/property/") ? true : false;
const getFetchUri = (id: string, isPropertyDetails: boolean) =>
  isPropertyDetails ? `properties/${id}` : `occupants/${id}`;

const Details = () => {
  const [leaseDetailsOpen, setLeaseDetailsOpen] = React.useState<boolean>(
    false
  );
  const { id } = useParams<{ id: string }>();
  const location = useLocation();

  const [lazyFetch, { data, loading }] = useLazyFetch<Property | Occupant>({
    uri: `http://localhost:5000/api/${getFetchUri(
      id,
      isPropertyDetails(location.pathname)
    )}`,
    method: "GET",
  });
  const classes = useStyles();

  React.useEffect(() => {
    lazyFetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  if (loading) return <p>Loading ...</p>;
  if (!data) return <p>Echec de communication avec le serveur</p>;

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item container justify="center">
        <CustomButton
          label="Générer le contrat de bail"
          onClick={() => setLeaseDetailsOpen(!leaseDetailsOpen)}
        ></CustomButton>
      </Grid>
      {isPropertyDetails(location.pathname) && "leasedBy" in data ? (
        <PropertyDetails property={data} />
      ) : (
        "propertyLeased" in data && <OccupantDetails occupant={data} />
      )}
    </Grid>
  );
};

export default Details;
