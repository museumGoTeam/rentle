import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Property } from "./types";
import PropertyCard from "../components/home/PropertyCard";
import OccupantCard from "../components/home/OccupantCard";
import CustomButton from "../components/CustomButton";
import CustomDialog from "../components/CustomDialog";
import LeaseDetails from "../components/details/LeaseDetails";

const useStyles = makeStyles((theme) => ({
  root: {},
  image: {},
}));

const PropertyDetails = () => {
  const [leaseDetailsOpen, setLeaseDetailsOpen] = React.useState<boolean>(false)
  const { id } = useParams<{ id: string }>();
  const { data: property, loading } = useFetch<Property>({
    uri: `http://localhost:5000/api/properties/${id}`,
    method: "GET",
  });
  const classes = useStyles();

  if (loading) return <p>Loading ...</p>;
  if (!property) return <p>Echec de communication avec le serveur</p>;

  return (
    <Grid container direction="column" className={classes.root}>
        <Grid item container justify="center">
            <CustomButton label="Générer le contrat de bail" onClick={() => setLeaseDetailsOpen(true)}></CustomButton>
        </Grid>
      <Grid item container>
          <PropertyCard {...property} modifiable/>
      </Grid>
      <Grid item container justify="center">
            {property.leasedBy && (
                <React.Fragment>
                    <Typography variant="body1" style={{padding: 16, fontWeight: 'bold'}}>Locataire</Typography>
                    <OccupantCard {...{...property.leasedBy, propertyLeased: property}} />
                    <Typography variant="body1"  style={{padding: 16, fontWeight: 'bold'}}>Guarant</Typography>
                    <OccupantCard {...property.leasedBy.guarantor} />
                </React.Fragment>
            ) }

      </Grid>
    </Grid>
  );
};

export default PropertyDetails;
