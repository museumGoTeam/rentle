import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import ImageUploader from "../ImageUploader";
import FormContainer from "../FormContainer";
import CustomSelect from "../CustomSelect";
import CustomButton from "../CustomButton";
import {
  LeaseForm,
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

type WriteLeaseProps = {
  form: LeaseForm;
  handleChange: (value: string | number | Object, name: string) => void;
};
const WriteLease: React.FC<WriteLeaseProps> = ({ form, handleChange }) => {
  const classes = useStyles();

  const handleMeterChange = (value:  number | string, name: string) => {
    if (name === "gasMeter") handleChange({...form.gasMeter, beginValue: value}, name)
    else if (name === "waterMeter")  handleChange({...form.waterMeter, beginValue: value}, name)
    else if (name === "electricityMeter")  handleChange({...form.electricityMeter, beginValue: value}, name)
  }

  return (
    <Grid container direction="column">
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
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <DateField
              name="beginDate"
              label="Date de début"
              value={form.beginDate}
              onChange={handleChange}
              disableFuture
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <DateField
              name="endDate"
              label="Date de fin"
              value={form.endDate}
              onChange={handleChange}
              disablePast
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
              name="visitBeginDate"
              label="Date d'entrée"
              value={form.visitBeginDate}
              onChange={handleChange}
              disablePast
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <DateField
              name="visitEndDate"
              label="Date de sortie"
              value={form.visitEndDate}
              onChange={handleChange}
              disablePast
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
            <DateField
              name="depositDate"
              label="Date de paiement de la caution"
              value={form.depositDate}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <DateField
              name="signatureDate"
              label="Date de signature"
              value={form.signatureDate}
              onChange={handleChange}
              disableFuture
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
            <NumberInput
              name="index"
              label="Index de base"
              value={form.index}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <CustomSelect
              name="isFirstMonthPaid"
              label="Premier mois payé"
              data={["Non", "Oui"]}
              value={form.isFirstMonthPaid === false ? "Non" : "Oui"}
              onChange={handleChange}
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
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <NumberInput
              name="gasMeter"
              label="Index d'entrée compteur gaz"
              value={form.gasMeter.beginValue}
              onChange={handleMeterChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <NumberInput
              name="waterMeter"
              label="Index d'entrée compteur d'eau"
              value={form.waterMeter.beginValue}
              onChange={handleMeterChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <NumberInput
              name="electricityMeter"
              label="Index d'entrée compteur d'électricité"
              value={form.electricityMeter.beginValue}
              onChange={handleMeterChange}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WriteLease;
