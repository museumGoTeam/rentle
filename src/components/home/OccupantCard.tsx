import React from "react";
import makeStyles from '@material-ui/core/styles/makeStyles'
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography'
import { Occupant } from "../../pages/types";
import CardMedia from "./CardMedia";
import CustomButton from "../CustomButton";

const useStyles = makeStyles(theme => ({
  root: ({hasDivider}: {hasDivider: boolean}) => ({
    borderTop: hasDivider ? `1px solid ${theme.palette.grey[300]}` : 'none',
    paddingTop: 16,
    paddingBottom: 32
  }),
    avatar: {
        borderRadius: 8,
        maxHeight: 230
    },
    address: {
        textTransform: 'lowercase',
        fontWeight: "bold",
        color: theme.palette.secondary.main,
    },
    propertyBuilding: {
      color: theme.palette.grey[500],
      fontSize: 12,
      marginBottom: 32
    },
    info: {
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
    }
}))

type OccupantCardProps = {
  hasDivider?: boolean
}

const OccupantCard: React.FC<Occupant & OccupantCardProps> = ({ID,gender, name, surname, email, gsm, avatar, address, nationalRegistry, birthDate, propertyLeased, hasDivider = true}) => {
  const classes = useStyles({hasDivider})
  return (
    <Grid item container spacing={2} className={classes.root}>
      <Grid item container xs={12} sm={12} md={4} lg={4} xl={4}>
        <CardMedia
          src={avatar}
          className={classes.avatar}
        />
      </Grid>
      <Grid item container direction="column" xs={12} sm={12} md={8} lg={8} xl={8}>
            <Typography variant="h2" className={classes.info}>{`${surname.toUpperCase()} ${name}, ${birthDate}`} </Typography>
            <div className={classes.divider} />
            <Typography variant="body1" className={classes.address}>{`${address.street} ${address.city}, ${address.country}`}</Typography>
            <Typography variant="subtitle1" className={classes.details}>Locataire {propertyLeased.type === "appartement" ? "d'un Appartement" : "d'une Maison"}</Typography>
            <CustomButton label="Details" style={{alignSelf: "flex-end"}} to={`/Locataires/${ID}`} />
      </Grid>
    </Grid>
  );
};

export default OccupantCard;
