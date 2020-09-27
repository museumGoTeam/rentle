import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Guarantor, Occupant } from "../../pages/types";
import CardMedia from "./CardMedia";
import CustomButton from "../CustomButton";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: ({ hasDivider }: { hasDivider: boolean }) => ({
    borderTop: hasDivider ? `1px solid ${theme.palette.grey[300]}` : "none",
    paddingTop: 16,
    paddingBottom: 32,
  }),
  avatar: {
    borderRadius: 8,
    height: 200,
    maxHeight: 200,
  },
  address: {
    fontSize: 18,
    textTransform: "lowercase",
    fontWeight: "bold",
    color: theme.palette.primary.main,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: theme.palette.secondary.main,
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

type OccupantCardProps = {
  hasDivider?: boolean;
};

const OccupantCard: React.FC<(Occupant | Guarantor) & OccupantCardProps> = ({
  hasDivider = true,
  ...person
}) => {
  const classes = useStyles({ hasDivider });
  const { gender, name, surname, email, gsm, avatar } = person;
  const { street, zipcode, city, country } = person.address;
  const getCivility = () => {
    return gender.includes("homme") ? "Monsieur" : "Madame";
  };

  return (
    <Grid item container spacing={2} className={classes.root}>
      <Grid item container xs={12} sm={12} md={4} lg={4} xl={4}>
        <CardMedia src={avatar} className={classes.avatar} />
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
        <Typography variant="h3" color="secondary" className={classes.name}>
          {getCivility()} {name} {surname.toUpperCase()}{" "}
        </Typography>
        <Typography
          variant="h4"
          className={classes.address}
        >{`${street} ${zipcode} ${city}, ${country}`}</Typography>
        <div className={classes.divider} />
        <Grid item container direction="column" style={{ flex: 1 }}>
          {"id" in person && (
            <Typography variant="caption">
              Né{gender.includes("femme") && "e"} le{" "}
              <span className={classes.detail}>{person.birthDate} (20 ans)</span>
            </Typography>
          )}

          <Typography variant="caption">
            Né à <span className={classes.detail}>Bruxelles</span>
          </Typography>
          <Typography variant="caption">
            Email <span className={classes.detail}>{email}</span>
          </Typography>
          <Typography variant="caption">
            gsm <span className={classes.detail}>{gsm}</span>
          </Typography>
          {"id" in person && (
            <Typography variant="caption">
              Numéro du Registre national{" "}
              <span className={classes.detail}>{person.nationalRegistry}</span>
            </Typography>
          )}

          {"id" in person && (
            <Typography variant="caption" className={classes.details}>
              Locataire{" "}
              <Link to={`/property/${person.propertyLeased.id}`}>
                {person.propertyLeased.type === "appartement"
                  ? "d'un Appartement"
                  : "d'une Maison"}
              </Link>
            </Typography>
          )}
        </Grid>
        {"id" in person && (
          <Grid item container justify="flex-end">
            <CustomButton
              label="Details"
              style={{ alignSelf: "flex-end" }}
              to={`/Locataires/${person.id}`}
            />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default OccupantCard;
