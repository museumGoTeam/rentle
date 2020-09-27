import React from "react";
import makeStyles from '@material-ui/core/styles/makeStyles'
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography'
import CardMedia from "./CardMedia";
import CustomButton from "../CustomButton";
import { Property } from "../../pages/types";

const useStyles = makeStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.grey[300]}`,
    paddingTop: 16,
    paddingBottom: 32
  },
    image: {
        borderRadius: 8,
        height: 200,
        maxHeight: 200
    },
    propertyType: {
        fontWeight: "bold",
        color: theme.palette.secondary.main,

    },
    propertyBuilding: {
      color: theme.palette.grey[500],
      fontSize: 12,
      marginBottom: 32
    },
    address: {
        fontSize: 24,
        fontWeight: "bold",
        color: theme.palette.primary.main,
        marginBottom: 16
    },
    divider: {
        width: '15%',
        height: 1,
        backgroundColor: theme.palette.grey[300],
        marginBottom: 16
    },
    details: {
        fontSize: 12,
        fontWeight: 600,
        color: theme.palette.grey[500],
        marginBottom: 16
    },
}))

type PropertyCardProps = {
  selectable?: boolean,
}
const PropertyCard: React.FC<PropertyCardProps & Property> = ({id,image, type, address, bedroomCount, size, price, leasedBy, selectable}) => {
  const classes = useStyles()


  return (
    <Grid item container spacing={2} className={classes.root}>
      <Grid item container xs={12} sm={12} md={4} lg={4} xl={4}>
        <CardMedia
          src={image}
          className={classes.image}
        />
      </Grid>
      <Grid item container direction="column" xs={12} sm={12} md={8} lg={8} xl={8}>
            <Typography variant="body1" className={classes.propertyType}>{type}</Typography>
            <Typography variant="h2" className={classes.address}>{`${address.street} ${address.city}, ${address.country}`} </Typography>
            <div className={classes.divider} />
            <Grid item container direction="column" style={{flex: 1}}>
              <Typography variant="caption">{bedroomCount} chambres - {size} m² - {price} € / mois </Typography>
            </Grid>
            {leasedBy && <Typography variant="caption">Loué par {leasedBy.name} {leasedBy.surname}</Typography>}
            <Grid item container justify="flex-end">
              <CustomButton label="Details" color="secondary" to={`/${type === "maison" ? "Maisons": "Appartements"}/${id}`} />
              <CustomButton label="Ajouter un locataire"  to={`/property/newOccupant/${id}`} style={{marginLeft: 8}}/>
            </Grid>
      </Grid>
    </Grid>
  );
};

export default PropertyCard;
