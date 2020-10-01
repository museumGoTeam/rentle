import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import OccupantCard from "../home/OccupantCard";
import { Occupant } from "../../pages/types";
import PropertyCard from "../home/PropertyCard";

type OccupantDetailsProps = {
  occupant: Occupant;
};

const OccupantDetails: React.FC<OccupantDetailsProps> = ({ occupant }) => {
  return (
    <React.Fragment>
      <Grid item container>
        <OccupantCard {...occupant} isModifiable/>
      </Grid>
      <Grid item container justify="center">
        <Typography variant="body1" style={{ padding: 16, fontWeight: "bold" }}>
          Bien loué
        </Typography>
        <PropertyCard {...{ ...occupant.propertyLeased, leasedBy: occupant }} />
        <Typography variant="body1" style={{ padding: 16, fontWeight: "bold" }}>
          Guarant
        </Typography>
        <OccupantCard {...occupant.guarantor} />
      </Grid>
    </React.Fragment>
  );
};

export default OccupantDetails;
