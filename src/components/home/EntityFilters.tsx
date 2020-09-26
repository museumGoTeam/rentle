import React from "react";
import Grid from "@material-ui/core/Grid";
import propertyFilters from "../../constants/property-filters";
import CustomChip, { CustomChipProps } from "../CustomChip";
import { useHistory, useParams } from "react-router-dom";

const EntityFilters = () => {
  const [filters, setFilters] = React.useState(propertyFilters);
  const {entity} = useParams<{entity: string}>()
  const history = useHistory()

  const onFilterSelected = (filterlabel: string) => {
    setFilters(
      filters.map((filter) => {
        if (filter.selected === true && filter.label !== filterlabel)
          return { ...filter, selected: false };
        if (filter.label === filterlabel && filter.selected === false)
          return { ...filter, selected: true };
        return filter;
      })
    );
    history.push(`/${filterlabel}`)
  };

  return (
    <Grid container justify="center" style={{marginBottom: 32}}>
      {filters.map((filter: CustomChipProps) => (
        <CustomChip key={filter.label} {...filter} onFilterSelected={onFilterSelected} selected={entity === filter.label} />
      ))}
    </Grid>
  );
};

export default EntityFilters;
