import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropertyCard from "../home/PropertyCard";
import { Property } from "../../pages/types";
import OccupantCard from "../home/OccupantCard";

type PropertyDetailsProps = {
  property: Property;
};

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ property }) => {
  return (
    <React.Fragment>
      <Grid item container>
        <PropertyCard {...property} hasDivider={false} />
      </Grid>
      <Grid item container justify="center">
        {property.leasedBy && (
          <React.Fragment>
            <Typography
              variant="body1"
              style={{ padding: 16, fontWeight: "bold" }}
            >
              Locataire
            </Typography>
            <OccupantCard {...{ ...property.leasedBy, propertyLeased: property }} />
            <Typography
              variant="body1"
              style={{ padding: 16, fontWeight: "bold" }}
            >
              Guarant
            </Typography>
            <OccupantCard {...property.leasedBy.guarantor} />
          </React.Fragment>
        )}
      </Grid>
    </React.Fragment>
  );
};

export default PropertyDetails;
