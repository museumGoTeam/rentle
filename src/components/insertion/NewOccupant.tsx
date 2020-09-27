import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import ImageUploader from "../ImageUploader";
import FormContainer from "../FormContainer";
import CustomSelect from "../CustomSelect";
import CustomButton from "../CustomButton";
import {
  LocationForm,
  OccupantForm,
  PropertyForm,
} from "../../pages/types/form";
import axios from "axios";
import NumberInput from "../NumberInput";
import { initialOccupantForm } from "../../constants/initstate";
import DateField from "../DateField";

const useStyles = makeStyles((theme) => ({
  line: {
    marginBottom: 4,
  },
}));

type NewOccupantProps = {
  form: OccupantForm;
  handleChange: (value: string | number | Object, name: string) => void;
};
const NewOccupant: React.FC<NewOccupantProps> = ({form,handleChange}) => {
  const classes = useStyles();

  const handleLocationChange = (value: string | number, name: string) => {
    handleChange({...form.address, [name]: value}, "address")
  }

  return (
    <Grid container direction="column">
      <Grid
        container
        item
        justify="center"
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{ width: "100%" }}
      >
        <ImageUploader name="image" onUpload={() => {}} />
      </Grid>
      <Grid
        container
        item
        direction="column"
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{ paddingLeft: 4 }}
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          container
          justify="center"
          spacing={2}
          className={classes.line}
        >
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <CustomSelect
              label="Sexe"
              name="gender"
              data={["homme", "femme"]}
              value={form.gender}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <TextField
              variant="outlined"
              label="Prénom"
              name="name"
              value={form.name}
              onChange={(e) =>
                handleChange(e.target.value, e.target.name)
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <TextField
              variant="outlined"
              label="Nom"
              name="surname"
              value={form.surname}
              onChange={(e) =>
                handleChange(e.target.value, e.target.name)
              }
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          spacing={2}
          className={classes.line}
        >
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <DateField
              name="size"
              value={form.birthDate}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <TextField
              variant="outlined"
              name="nationalRegistry"
              label="Numéro national"
              value={form.nationalRegistry}
              onChange={(e) =>
                handleChange(e.target.value, e.target.name)
              }
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify="center"
          spacing={2}
          className={classes.line}
        >
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <TextField
              variant="outlined"
              name="email"
              label="Email"
              value={form.email}
              onChange={(e) =>
                handleChange(e.target.value, e.target.name)
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <TextField
              variant="outlined"
              name="gsm"
              label="Numéro de téléphone"
              value={form.gsm}
              onChange={(e) =>
                handleChange(e.target.value, e.target.name)
              }
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item container justify="center" spacing={2}>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
            <TextField
              variant="outlined"
              name="street"
              label="Rue"
              value={form.address.street}
              onChange={(e) =>
                handleLocationChange(e.target.value, e.target.name)
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
            <NumberInput
              name="zipcode"
              label="Code postal"
              value={form.address.zipcode}
              onChange={handleLocationChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
            <TextField
              variant="outlined"
              name="city"
              label="Ville"
              value={form.address.city}
              onChange={(e) =>
                handleLocationChange(e.target.value, e.target.name)
              }
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <TextField
              variant="outlined"
              name="country"
              label="Pays"
              value={form.address.country}
              onChange={(e) =>
                handleLocationChange(e.target.value, e.target.name)
              }
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NewOccupant;