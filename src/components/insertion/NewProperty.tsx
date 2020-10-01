import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import ImageUploader from "../ImageUploader";
import CustomSelect from "../CustomSelect";
import CustomButton from "../CustomButton";
import { PropertyForm } from "../../pages/types/form";
import axios from "axios";
import NumberInput from "../NumberInput";

const useStyles = makeStyles((theme) => ({
  line: {
    marginBottom: 4,
  },
}));

const NewProperty = () => {
  const classes = useStyles();
  const [form, setForm] = React.useState<PropertyForm>({
    type: "maison",
    floorNumber: 0,
    bedroomCount: 1,
    size: 64,
    sizeLivingRoom: 32,
    sizeKitchen: 16,
    price: 1400,
    charges: 600,
    address: {
      street: "",
      zipcode: 0,
      city: "",
      country: "",
    },
    image:
      "https://images.unsplash.com/photo-1576154918674-f31a1c91a3cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1477&q=80",
  });

  const handlePropertyChange = (value: string | number, name: string) => {
    setForm({ ...form, [name]: value });
  };
  const handleLocationChange = (value: string | number, name: string) => {
    setForm({ ...form, address: { ...form.address, [name]: value } });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/properties", { ...form })
      .then((res) => console.log(res));
  };

  return (
    <form onSubmit={onSubmit}>
      <Grid container direction="column">
        <Grid container item justify="center" xs={12} sm={12} md={12} lg={12} xl={12} style={{width: '100%'}}>
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
          <Grid item container justify="center" spacing={2} className={classes.line}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <CustomSelect
                label="type"
                name="type"
                data={["maison", "appartement", "chambre"]}
                value={form.type}
                onChange={handlePropertyChange}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <CustomSelect
                label="étage"
                name="floorNumber"
                data={Array.from(Array(100).keys())}
                value={form.floorNumber}
                onChange={handlePropertyChange}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <CustomSelect
                label="chambres"
                name="bedroomCount"
                data={Array.from(Array(8).keys())}
                value={form.bedroomCount}
                onChange={handlePropertyChange}
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
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <NumberInput
                name="size"
                label="Taille"
                value={form.size}
                onChange={handlePropertyChange}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <NumberInput
                name="sizeLivingRoom"
                label="Taille salon"
                value={form.sizeLivingRoom}
                onChange={handlePropertyChange}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <NumberInput
                name="sizeKitchen"
                label="Taille cuisine"
                value={form.sizeKitchen}
                onChange={handlePropertyChange}
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
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <NumberInput
                name="price"
                label="Prix"
                value={form.price}
                onChange={handlePropertyChange}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <NumberInput
                name="charges"
                label="Charges"
                value={form.charges}
                onChange={handlePropertyChange}
              />
            </Grid>
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
        <Grid item container justify="center">
          <CustomButton label="Confirmer" type="submit" />
        </Grid>
      </Grid>
    </form>
  );
};

export default NewProperty;
