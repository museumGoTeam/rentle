import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardMedia from "./CardMedia";
import CustomButton from "../CustomButton";
import { Property } from "../../pages/types";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: ({ modifiable }: { modifiable: boolean | undefined }) => ({
    borderTop: !modifiable ? `1px solid ${theme.palette.grey[300]}` : "none",
    paddingTop: 16,
    paddingBottom: 32,
  }),
  image: {
    borderRadius: 8,
    height: 200,
    maxHeight: 200,
  },
  propertyType: {
    fontSize: 22,
    fontWeight: "bold",
    color: theme.palette.secondary.main,
  },
  propertyBuilding: {
    color: theme.palette.grey[500],
    fontSize: 12,
    marginBottom: 32,
  },
  address: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.palette.primary.main,
    marginBottom: 16,
  },
  divider: {
    width: "15%",
    height: 1,
    backgroundColor: theme.palette.grey[300],
    marginBottom: 16,
  },
  details: {
    fontSize: 12,
    fontWeight: 600,
    color: theme.palette.grey[500],
    marginBottom: 16,
  },
  detail: {
    fontWeight: "bold",
  },
}));

type PropertyCardProps = {
  modifiable?: boolean;
};
const PropertyCard: React.FC<PropertyCardProps & Property> = ({
  modifiable,
  ...property
}) => {
  const classes = useStyles({ modifiable });
  const {
    id,
    type,
    bedroomCount,
    size,
    price,
    floorNumber,
    sizeLivingRoom,
    sizeKitchen,
    charges,
    leasedBy,
  } = property;
  const { street, zipcode, city, country } = property.address;

  return (
    <Grid item container spacing={2} className={classes.root}>
      <Grid item container xs={12} sm={12} md={4} lg={4} xl={4}>
        <CardMedia src={property.image} className={classes.image} />
      </Grid>
      <Grid
        item
        container
        direction="column"
        xs={12}
        sm={12}
        md={8}
        lg={8}
        xl={8}
      >
        <Typography variant="h3" className={classes.propertyType}>
          {type}
        </Typography>
        <Typography variant="h4" className={classes.address}>
          {`${street} ${zipcode} \n ${city}, ${country} `}{" "}
        </Typography>
        <div className={classes.divider} />
        <Grid item container direction="column" style={{ flex: 1 }}>
          <Typography variant="caption">
            <span className={classes.detail}>{bedroomCount}</span> chambres -{" "}
            <span className={classes.detail}>{size}</span> m² -{" "}
            <span className={classes.detail}>{price} €/mois </span>
            {type === "appartement" && `- ${floorNumber}e étage`}{" "}
          </Typography>
          <Typography variant="caption">
            Taille cuisine :{" "}
            <span className={classes.detail}>{sizeKitchen} m²</span> - Taille
            salon : <span className={classes.detail}>{sizeLivingRoom} m²</span>
          </Typography>
          <Typography variant="caption">Charges: <span className={classes.detail}>{charges} €</span></Typography>
        </Grid>

        {leasedBy && (
          <Typography variant="caption">
            Loué par <Link to={`/occupant/${leasedBy.id}`}>{leasedBy.name} {leasedBy.surname}</Link>
          </Typography>
        )}
        <Grid item container justify="flex-end">
          {modifiable ? (
            <CustomButton label="Modifier" color="primary" />
          ) : (
            <CustomButton
              label="Details"
              color="secondary"
              to={`/property/${id}`}
            />
          )}

          <CustomButton
            label={leasedBy ? "Supprimer le locataire" : "Ajouter un Locataire"}
            to={`/property/newOccupant/${id}`}
            style={{ marginLeft: 8, backgroundColor: leasedBy ? "red" : "" }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PropertyCard;
